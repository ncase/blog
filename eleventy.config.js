module.exports = (config)=>{

	// Markdown add-ons
	let markdownIt = require("markdown-it");
	let markdownItFootnote = require("markdown-it-footnote");
	let options = {
		html: true, // Enable HTML tags in source
		linkify: true // Autoconvert URL-like text to links
	};
	let markdownLib =  markdownIt(options).use(markdownItFootnote);
	config.setLibrary("md", markdownLib);

	// RSS (well, Atom actually)
	const pluginRSS = require("@11ty/eleventy-plugin-rss");
	config.addPlugin(pluginRSS);

	// Latest Posts
	config.addFilter('latestTenPosts', posts=>{
		return posts.slice(-10).reverse(); // Latest 10 Posts, in reverse order
	});
	config.addFilter('latestFivePosts', posts=>{
		return posts.slice(-5).reverse();
	});
	config.addFilter('latestOnePost', posts=>{
		return posts.slice(-1).reverse();
	});
	config.addFilter('latestThreePosts', posts=>{
		return posts.slice(-3).reverse();
	});
	config.addFilter('stripPostsInURL', postURL=>{
		return postURL.replace('/posts/','/');
	});

	// Date BS
	config.addFilter("displayDate", function(dateObj) {
		dateObj.setTime(dateObj.getTime() + (5 * 60 * 60 * 1000)); // add 5 hours for EST (4 for EDT)
		//const localDate = new Date(dateObj + "T00:00:00-05:00"); // Eastern time
		return dateObj.toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		}).toLowerCase();
	});
	/*config.addFilter("rssDate", function(dateObj) {
		//dateObj.setTime(dateObj.getTime() + (5 * 60 * 60 * 1000)); // add 5 hours for EST (4 for EDT)
		//return dateObj;
	});*/

	// Sh sh sh. No console, only dreams now.
	config.setQuietMode(true);

	// Old layout, whoops
	config.addLayoutAlias('base-layout.njk', 'page.njk');

	// To copy through
	config.addPassthroughCopy("src/content");
	config.addPassthroughCopy("src/styles");
	config.addPassthroughCopy("src/scripts");
	//config.addPassthroughCopy("rss");
	config.addPassthroughCopy("src/favicon.png");
	config.addPassthroughCopy("src/CNAME");

	// configig file
	return {

		// Where?
		dir: {
            input: "src", // stuff it in 'src' so real root's less messy
			output: "docs" // for GitHub pages
		},

		// Use nunjucks, please
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk"

	};

};
