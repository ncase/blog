window.$ = (query, el=document)=>{
    return document.querySelector(query);
};
window.$all = (query, el=document)=>{
    return [...document.querySelectorAll(query)];
};

window.addEventListener("load", ()=>{

    // ARTICLE SUMMARIES
    // Scale the thumnails:
    $all(".article-summary").forEach( (article)=>{
        $("#article-thumb", article).style.height = getComputedStyle(article).height;
    });

    /////////////////////////////////////////////////////////////
    // SIDEBAR SHTUFF ///////////////////////////////////////////
    /////////////////////////////////////////////////////////////

    // SIDEBAR TABS
    // Each one toggles its respective sidebar panel
    $all("#sidebar_tabs > div").forEach( (tab)=>{
        let panelName = tab.id.slice(4); // after "tab_"
        tab.onclick = ()=>{
            document.body.setAttribute("sidebar_state", "open");
            if(currentPanelName == panelName){
                closePanel();
            }else{
                revealPanel(panelName);
            }
        };
    });

    // SIDEBAR PANELS
    let currentPanelName = '';
    // Reveal 'em
    let revealPanel = (panelName)=>{
        // Remember current one
        currentPanelName = panelName;
        // Open up
        document.body.setAttribute("sidebar_state", "open");
        // Hide all except one
        $all("#sidebar > div").forEach( (panelPage)=>{
            panelPage.style.display = 'none';
        });
        $(`#panel_${panelName}`).style.display = 'block';
        // Don't close plz
        startToClose = false;
    };
    // Close 'em
    let closePanel = ()=>{
        currentPanelName = '';
        document.body.setAttribute("sidebar_state", "closed");
    };
    // The overlay behind the panel, above content
    // Must mouse over it for >0.5s to count
    let closeCountdown = 0,
        startToClose = false;
    $("#return_to_content").onmouseover = ()=>{
        closeCountdown = 100;
        startToClose = true;
    };
    $("#return_to_content").onmouseleave = ()=>{
        startToClose = false;
    };
    setInterval(()=>{
        if(startToClose){
            if(closeCountdown<=0) closePanel();
            else closeCountdown-=10;
        }
    },10);

    // SIDEBAR: TABLE OF CONTENTS
    // Populate it!
    let allHeadings = $all("h1, h2, h3, h4, h5, h6");
    let tocHTML = "";
    if(!window.NOT_A_POST){ // ONLY FOR POSTS
        if(allHeadings.length==0){
            $('#tab_toc').style.display = 'none';
        }
        allHeadings.forEach( (heading)=>{

            // Table of Contents link
            let headingText = heading.innerText,
                headingForURI = headingText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
            tocHTML += `<p><a class='black-link' href="#${headingForURI}">${headingText}</a></p>`;

            // Anchor in article
            let anchor = document.createElement('a');
            anchor.className = 'scroll-anchor';
            anchor.id = headingForURI;
            heading.prepend(anchor);

        });
        $('#panel_toc').innerHTML = tocHTML;
        // HACK: If ToC is too large... just shrink font until it works
        let tocFont = 16;
        do{
            $('#panel_toc').style.fontSize = tocFont+'px';
            tocFont--;
        }while( tocFont>1 && parseInt(window.getComputedStyle($("#panel_toc")).height)+20 > document.body.clientHeight);
    }

    // READING CONTROLS
    let updateStyle = ()=>{

        // Dark or not
        let isDark = $("#style_dark_mode").checked;
        document.body.setAttribute("dark_mode", isDark ? "yes" : "no");

        // Font size
        let fontsize = $("#style_fontsize_slider").value + 'px';
        $("#style_fontsize").innerText = fontsize;
        $("#content").style.fontSize = fontsize;

        // Font family
        let selectedFont = $all("input[name=style_font_family]").find( (radioButton)=>{
            return radioButton.checked;
        }).value;
        document.body.setAttribute("font_family", selectedFont);

        // Also update localStorage to save settings across pages
        window.localStorage.style_dark = isDark;
        window.localStorage.style_size = fontsize;
        window.localStorage.style_font = selectedFont;

    };
    // Dark Mode
    $("#style_dark_mode_container").onclick = ()=>{
        $("#style_dark_mode").checked = !$("#style_dark_mode").checked;
        updateStyle();
    }
    // Size
    $("#style_fontsize_slider").oninput = ()=>{
        updateStyle();
    }
    // Font Family
    $all("input[name=style_font_family]").forEach( (radioButton)=>{
        radioButton.onclick = updateStyle;
    });
    // Reset
    let resetStyle = ()=>{
        $("#style_dark_mode").checked = false;
        $("#style_fontsize_slider").value = 19;
        $("input[value=serif]").checked = true;
        updateStyle();
    };
    $("#style_reset").onclick = resetStyle;

    // Save settings across pages
    // Defaults
    window.localStorage.style_dark = window.localStorage.style_dark || false;
    window.localStorage.style_size = window.localStorage.style_size || 19;
    window.localStorage.style_font = window.localStorage.style_font || "serif";
    // Cut off transition CSS
    document.body.style.transition = "none";
    // Set to localStorage's values (remember, they're STRINGS)
    $("#style_dark_mode").checked = (window.localStorage.style_dark=="true");
    $("#style_fontsize_slider").value = parseInt(window.localStorage.style_size);
    $(`input[value=${window.localStorage.style_font}]`).checked = true;
    // Anim!
    setTimeout(()=>{
        updateStyle();
        setTimeout(()=>{
            document.body.style.transition = null;
        },1000);
    },10);

    ////////////////////////////////////////////////////////////
    // SCROLLY for NOT-FRONTPAGE pages /////////////////////////
    ////////////////////////////////////////////////////////////

    if(!window.IS_FRONTPAGE){
        // RAF: scroll the text & do parallax
        let animloop = ()=>{
            $("#splash_image").style.top = (window.scrollY*0.3)+"px";
            requestAnimationFrame(animloop);
        };
        requestAnimationFrame(animloop);
    }

    ////////////////////////////////////////////////////////////
    // FOR POSTS: PUB DATE, FEETNOTES, READING TIME ////////////
    ////////////////////////////////////////////////////////////

    if(!window.NOT_A_POST){

        // Pub Date
        if(window.postDate){

            let formatOptions = { year: 'numeric', month: 'short', day: 'numeric' },
                formattedDate = window.postDate.toLocaleDateString("en-US", formatOptions).toLowerCase();
            $("#pub_date_header").innerHTML = `on ${formattedDate} &nbsp;&nbsp;&middot;&nbsp;&nbsp`;

            // Too old? Older than 2 years
            if($("#warning_years")){
                let years = ((new Date())-window.postDate) / (1000*60*60*24*365)
                if( years >= 2 ){
                    $("#warning_message").style.display = 'block';
                    $("#warning_years").innerText = Math.floor(years);
                }
            }

        }

        // Footnotes: Littlefoot 'em, THEN hide with Nutshell
        littlefoot.littlefoot({
            activateOnHover: true,
            hoverDelay: 0,
            dismissOnUnhover: true,
            buttonTemplate: `
            <button
                aria-label="Footnote <% number %>"
                class="littlefoot__button"
                id="<% reference %>"
                title="See Footnote <% number %>"
            />
                <% number %>
            </button>`
        });
        // Make a : footnote header before hiding in Nutshell (if any exist)
        let footnotesDivider = $(".footnotes-sep");
        if(footnotesDivider){

            // Make that header
            let foo = document.createElement("h1");
            foo.innerHTML = ": Click to see all feetnotes 👣";
            $(".footnotes-sep").after(foo);

            // Remove all "↩︎" links
            $all(".footnote-backref").forEach((back)=>{
                back.remove();
            });

        }
        Nutshell.start(); // either way, lol start!

        // READING TIME
        const NUMBER_OF_WORDS = ($("#content").innerText.match(/\s/g) || []).length,
              AVERAGE_READING_TIME = 230,
              READING_TIME_IN_MINUTES = Math.ceil(NUMBER_OF_WORDS/AVERAGE_READING_TIME);
        $("#reading_time_header").innerText = `${READING_TIME_IN_MINUTES} min`;

        // THE CLOCK SCROLLY
        const HEADER_CONTENT_GAP = 48,
              CONTENT_FOOTER_GAP = 67;
        const CLOCK_SPRITESHEET_WIDTH = 12;

        // WHEN SCROLL, UPDATE CLOCK.
        let updateClock = ()=>{

            // Reading Timer... CALCULATE RATIO
            let topOfContent = 0,
                btmOfContent = topOfContent
                               + $("#header").getBoundingClientRect().height
                               + HEADER_CONTENT_GAP
                               + $("#content").getBoundingClientRect().height
                               + CONTENT_FOOTER_GAP;

            let scrollYWhenAtTop = topOfContent,
                scrollYWhenAtBottom = btmOfContent - document.body.clientHeight;

            let range = scrollYWhenAtBottom - scrollYWhenAtTop,
                ratio = (window.scrollY - scrollYWhenAtTop) / range;

            if(ratio<0) ratio=0;
            if(ratio>1) ratio=1;

            //////////////////////////////////////

            // Reading Timer... CLOCK ICON
            let frame = Math.floor(ratio*119); // 120 FRAMES
            let y = Math.floor(frame/CLOCK_SPRITESHEET_WIDTH),
                x = frame % CLOCK_SPRITESHEET_WIDTH,
                bgPosition = `${x*-100}% ${y*-100}%`;
            $("#clock_icon").style.backgroundPosition = bgPosition;

            //////////////////////////////////////

            // Reading Timer... LABEL
            let timeLeft = Math.ceil( (1-ratio)*READING_TIME_IN_MINUTES );
            $("#clock_label").innerHTML = (timeLeft==0) ? "🎉🎉🎉" : `~${timeLeft}m`;

        };
        window.addEventListener("scroll",updateClock);
        updateClock();
    }

});