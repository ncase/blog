const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
require('dotenv').config();

// Source and destination paths
const OBSIDIAN_POSTS_PATH = process.env.OBSIDIAN_POSTS_PATH;
const OBSIDIAN_MEDIA_PATH = process.env.OBSIDIAN_MEDIA_PATH;
const LOCAL_POSTS_PATH = './src/posts';
const LOCAL_MEDIA_PATH = './src/content/stuff';
if(!OBSIDIAN_POSTS_PATH || !OBSIDIAN_MEDIA_PATH){
    console.error('Please set up your .env file (see .env-example)');
    process.exit(1);
}

// Copies a specific markdown file from Obsidian to the posts folder
// > node transfer.js "filename"
const filename = process.argv[2];
try {

    // Check if filename argument was provided
    if(!filename){
        console.error('You need a filename, dingus');
        process.exit(1);
    }

    // Force filename to have .md extension
    const markdownFile = filename.endsWith('.md') ? filename : `${filename}.md`;
    const sourcePath = path.join(OBSIDIAN_POSTS_PATH, markdownFile);

    // Check if source file exists
    if(!fs.existsSync(sourcePath)){
        console.error(`File not found: ${markdownFile}`);
        return;
    }

    // Read the file content
    let content = fs.readFileSync(sourcePath, 'utf8');

    // Simple text-replacement
    // "txgs:"
    content = content.replace(`txgs:`, `tags:`);
    // Single-line $LaTeX$
    let singleLineLatexRegex = /(?<!\$)\$(?!\$)(?!\d)([^$\n\r]+)\$/g
    /***
    I HATE REGEX
    (?<!\$)         // negative lookbehind: NOT preceded by a $ (avoids $$ for centered LaTeX)
    \$              // matches literal $
    (?!\$)          // negative lookahead: NOT followed by a $ (avoids $$ for centered LaTeX)
    (?!\d)          // negative lookahead: NOT followed by a digit (avoids prices like $1,234)
    ([^$\n\r]+)     // captures one or more characters that are NOT $, newline, or carriage return
    \$              // matches the closing literal $
    ***/
    content = content.replace(singleLineLatexRegex,'\\\\($1\\\\)'); // ugh backslashing the backslashes
    // Newsletter CTA:
    content = content.replace(`((newsletter))`, `<iframe src="https://ncase.me/ncase-credits/signup2.html" frameborder="no" width=640 height=250></iframe>`);
    // Supporter CTA (TODO)

    ////////////////////////////
    // Transfering over media //
    ////////////////////////////

    // Extract date from YAML frontmatter
    let thisMonth, thisMonthsMedia;
    const dateMatch = content.match(/^date:\s*(.+)$/m);
    if(dateMatch){
        // Parse date and format as YYYY-MM
        const date = new Date( dateMatch[1].trim() );
        thisMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2,'0')}`;
        // Create dated "stuff" folder if doesn't already exist
        thisMonthsMedia = path.join(LOCAL_MEDIA_PATH, thisMonth);
        if(!fs.existsSync(thisMonthsMedia)){
            fs.mkdirSync(thisMonthsMedia, { recursive: true });
            console.log(`Created folder: ${thisMonthsMedia}`);
        }
    }else{
        console.log('gimme a DATE, dingus');
    }

    // Find ![[media-name]](\w*)// alt text
    const mediaRegex = /!\[\[([^\]]+)\]\](?:\s*\/\/\s*([^\n\r]*))?/g
    /***
    I HATE REGEX.
    !\[\[           // ![[
    ([^\]]+)        // $1: (media name & extension - not ])
    \]\]            // ]]
    (?:             // start optional alt text // NON-CAPTURE
    \s*\/\/\s*      // some space//space before the actual alt-text
    ([^\n\r]*)      // $2: alt text (not newline or carriage return)
    )?              // end optional alt text
    ***/
    const matches = [...content.matchAll(mediaRegex)];
    console.log(matches.length);
    matches.forEach(match => {
        let [fullMatch, mediaName, altText] = match;

        // Alt text: default, and escape.
        altText = altText || "no alt text set, shame on me";
        altText = altText.replace(/"/g, '&quot;');

        // Copy over Obsidian media file to local media
        const sourcePath = path.join(OBSIDIAN_MEDIA_PATH, mediaName);
        const destPath = path.join(thisMonthsMedia, mediaName);
        if(fs.existsSync(sourcePath)){
            fs.copyFileSync(sourcePath, destPath);
            console.log(`Copied media: ${mediaName}`);
        }else{
            console.error(`I have no idea how you got this error. Media file not found: ${sourcePath}`);
        }

        // How to embed media? Depends on the extension type...
        let relativeMedia = '../content/stuff/'+thisMonth;
        let mediaPath = encodeURI(`${relativeMedia}/${mediaName}`);
        const ext = path.extname(mediaName).toLowerCase();
        let replacementMD;
        // Images!
        if(['.jpg', '.jpeg', '.png', '.apng', '.gif', '.webp'].includes(ext)){
            replacementMD = `![${altText}](${mediaPath} "${altText}")`;
        // Videos!
        }else if(['.mp4', '.webm', '.mov'].includes(ext)){
            replacementMD = `<video width='640' controls src="${mediaPath}" aria-label="${altText}"></video>`;
        // Audio!
        }else if(['.mp3', '.wav', '.ogg'].includes(ext)){
            replacementMD = `<audio controls src="${mediaPath}" aria-label="${altText}"></audio>`;
        }else{
            console.error(`the heck file extension is ${ext}? in a ![[media-name.ext]]`);
        }

        // Replace!
        content = content.replace(fullMatch, replacementMD);
    });

    // Write the modified content to destination
    const destPath = path.join(LOCAL_POSTS_PATH, markdownFile);
    fs.writeFileSync(destPath, content);
    console.log(`Copied and processed: ${markdownFile}`);

    // Run build script
    console.log('Running build...');
    execSync('./build.sh', { stdio: 'inherit' });
    console.log('Build complete!');

}catch (error){
    console.error('Error:', error.message);
}
