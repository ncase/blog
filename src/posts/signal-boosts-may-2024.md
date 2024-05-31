---
title: "Signal Boosts for May 2024"
tags:
- post
share_desc: "stuff I liked last month"
date: 2024-05-31
readtime: "8 min"
layout: base-layout.njk
hasMath: true
---

Since I no longer use ~~Twitter~~ 𝕏, I want a new way to share: 1) Stuff I liked, and 2) Why I liked them. Also, I gotta blog more.

So, introducing my first **monthly Signal Boosts post!** Just a list of links / papers / movies / books / videos / games / music / podcasts / whatever, that I saw last month & added value to my life. (It's like a "links post"[^examples], but fewer items & more in-depth.)

[^examples]: Inspired by these blogs that also do monthly "Links Posts": [Slime Mold Time Mold](https://slimemoldtimemold.com/), [Astral Codex Ten](https://www.astralcodexten.com/).

So without further ramble:

## 🌳 Are you a teenage programmer? Hack in the Canadian forest!

![Old-timey drawing of a train going through a forest](/content/media/sb-may2024/17171711188258.jpg)

**TIME SENSITIVE OFFER:** My friends at Hack Club are running a hackathon for high-schoolers, to make tech to help the environment. This week-long event takes place on a cross-Canada train, from Vancouver to Montréal, through some beautiful boreal forest!

Ticket price?... it's *FREE.* (with travel grants)

The catch is you have to be in high school (or earlier), and also there's limited seats. So, if you are a ≤ 18yo programmer or know someone who is, ask them to consider HACKING THE FOREST:

🌳 **[THE BOREAL EXPRESS](https://boreal.hackclub.com/)** 🌳    
⏳ (apply soon, applications close June 10th!) ⏳


## 🎬 HUNDREDS OF BEAVERS

There's no describing this. You just have to see the trailer: (2 min)

<iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/wxkutAg_Cms?si=J129pXOEHzc7mOmq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

* First, it's just so *inventive.* I've rarely seen this kind of blend between live action & animation[^nox]. Not "just" Roger Rabbit style where humans move alongside toons, but humans move *as if* they're toons.
* It's shamelessly a homage to the Golden Age of slapstick comedy (Buster Keaton, Roadrunner, etc), yet updates the old tropes: the protagonist has a solid character growth arc, the "love interest" isn't a passive damsel nor (too much of) a Manic Pixie, and the world's rule-based ecosystem is as elegantly emergent as videogames like *Rain World* or *Portal*.
* Finally, it's insanely impressive how many jokes — visual gags, slapstick comedy, Rube Goldberg-like contraptions — could be squeezed out of such a simple setting!

[^nox]: The only other case I remember of a live-action/animation-hybrid style like this, is James Lee's *Nox:* e.g. [A Life Without Facebook (2018)](https://www.youtube.com/watch?v=dlXkTKxg4e4)

If you're an artist with a low budget, this movie is *inspiring*, to show how much one can do with so little.

(4½ stars out of 5)

**Watch on:** [Apple TV](https://tv.apple.com/us/movie/hundreds-of-beavers/umc.cmc.3ow9glcz3h5xm4u5yosbmkoww), [Amazon Prime](https://www.amazon.com/Hundreds-Beavers-Ryland-Brickson-Cole/dp/B0CWPMRFM6/)

**Recommended for:** lighthearted comedy movie night.




## ▶️ 3Blue1Brown's series on Transformers (e.g. ChatGPT)

![A pi creature pointing at the "T" in "GPT"](/content/media/sb-may2024/17171747666530.jpg)

Once again, Grant Sanderson (3Blue1Brown) delivers. This YouTube channel teaches tough ideas from math/computer science, with beautiful visualizations & intuitive explanations. This past month, Grant did it again, explaining the *Transformer*, the AI architecture behind ChatGPT, DALL-E, AlphaFold, and more!

It's a 3-part series, with 1 more part to come:

* [But what is a GPT? Visual intro to transformers](https://www.youtube.com/watch?v=wjZofJX0v4M) (27 min)
* [Attention in transformers, visually explained](https://www.youtube.com/watch?v=eMlx5fFNoYc) (26 min)
* [final part to come]

(Actually, this series is a sequel to his *previous* series, [explaining the classic, "vanilla" Artificial Neural Networks](https://www.3blue1brown.com/topics/neural-networks). I found *those* super-valuable too; it even helped me code my own ANN from scratch!)

**Recommended for:** Folks with no prior knowledge of deep learning, but okay with calculus & linear algebra. (And if you're *not* comfy with those, check out Grant's series on [those](https://www.3blue1brown.com/topics/calculus) [topics](https://www.3blue1brown.com/topics/linear-algebra)!)




## 📄 A Unifying Probabilistic View of Associative Learning

*(warning: technical)*

![](/content/media/sb-may2024/17171748914309.jpg)


[Gershman 2015](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1004567) is one of those rare papers that: 1) takes a lot of different ideas from different fields, then 2) somehow unifies them all.

Context behind the paper:

* Psychologists wanted a model of how "conditioning" works. (e.g. Ring a bell every time you give a dog food, and the dog will start salivating just at the sound of a bell.)
* One early model was the Hebbian model: neurons that fire together, wire together.
* However, this model didn't explain "blocking": if you train a rat to associate a Light with Food, *then* present both Bell+Light with Food, the rat will *not* associate Bell with Food... the Light→Food association seems to "block" the Bell→Food association!
* So, the Rescorla-Wagner (RW) model was created, and it's mathematical: `Change in strength of association = Some learning rate x Prediction error`, where `Prediction error = Actual result - Predicted result`. This explains "blocking": once a rat's learnt Light→Food, showing Light+Bell→Food creates no prediction error, hence *no extra learning.*
* However, the RW model doesn't predict:
    * <u>Latent inhibition</u>: First showing lots of Bell→NO-Food, slows down the later learning of Bell→Food.
    * <u>Recovery from extinction</u>: You can untrain Bell→Food by later showing lots of Bell→NO-Food. If you try to immediately re-train it afterwards, it's hard. But the longer you wait, the easier it is to retrain.
    * <u>Higher-order conditioning</u>: Train Bell→Food, then train Light→Bell, and the rat will learn Light→Food!

This paper solves *all* those problems, by swiping ideas from Engineering & Artificial Intelligence:

* Latent inhibition & Recovery from extinction can *both* be elegantly explained by a very popular idea from engineering, *Kalman Filters*. KFs explain animal perception well, and there's been a few proposals for how neurons could approximate KFs.[^kalman-neuro]
    * In sum: KFs let a machine/animal 1) be uncertain, 2) *know* it's uncertain, and 3) update its uncertainty using observations. This is a huge step up from old psych models, and even current mainstream AI models, which *don't* natively have "uncertainty" built into them.
* Higher-order conditioning can be explained with *Temporal Difference Learning*, a popular technique from AI. (The most famous example being Q-Learning, the algorithm that let Google's AI beat Atari games.) TD Learning's also probably what our brains do, using dopamine as the "reward prediction error" signal.[^td-neuro]
    * In sum: TD Learning is very similar to the RW model, except the Prediction Error isn't just for predicting *current* reward, it's for predicting *all future reward* (discounted over time).

[^kalman-neuro]: [Millidge et al 2021](https://arxiv.org/pdf/2102.10021) proposes a biologically plausible way for neurons to approximate Kalman Filters. (I haven't actually read this paper yet, just its abstract.)

[^td-neuro]: [Starkweather & Uchida 2021](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8107188/), tl;dr yeah dopamine signals pretty much *are* temporal difference errors. Note: Dopamine does NOT correspond to reward, it corresponds to UNEXPECTED reward. (prediction error!)

This paper doesn't explain *everything*, of course. (For example, I'm not sure how this model can explain intermittent reward — the finding that you can make animals *more* obsessed, by rewarding them *less* often & unpredictably, the psychology of slot machines.)

But dang, if this paper isn't promising!

**[Link to paper, again](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1004567)**

**Recommended for:** Cognitive science/Psychology/AI nerds, with undergraduate math capabilities. You can skim the more math-heavy parts and just look at the pretty pictures, that's what I did.

P.S: I learnt Kalman Filters through [this video series](https://www.mathworks.com/videos/series/understanding-kalman-filters.html) and [this picture-filled blog post](https://www.bzarg.com/p/how-a-kalman-filter-works-in-pictures/).




## 📄 AI Alignment: A Comprehensive Survey

![ais1](/content/media/sb-may2024/ais1.png)


I spent a year writing [a 20,000-word article on AI Safety](https://aisafety.dance/), and right after launching I find *this* paper, which I fear made my work redundant.

(To be fair to myself, I think my thing's more layperson-accessible. Mine also has comics with a Robot Catboy Maid.)

In sum, the authors break up the AI Safety problem into 4 parts, with the acronym, **RICE**:

![Robustness, Interpretability, Controllability, Ethicality](/content/media/sb-may2024/ais2.png)
*(from paper, Figure 3)*

I can't really summarize the paper beyond that, since it *is*, well, *very* comprehensive. It's 58 large pages, not counting references. Basically a mini-book.

**Link to paper:** [Ji, Qiu, Chen, Zhang et al 2024](https://alignmentsurvey.com/uploads/AI-Alignment-A-Comprehensive-Survey.pdf)

**Recommended for:** Folks interested in AI Safety/Alignment. Paper assumes some technical background.





## 🎙️ The Ezra Klein Show

![Banner photo of New York Times' *The Ezra Klein Show*](/content/media/sb-may2024/17171769882005.jpg)

A podcast where this guy (Ezra Klein) interviews folks, including some big names like Barack Obama and Sam Altman. *Remember, "retweets are not endorsements".*

Ezra has a rare combination of personality traits:

* Humble enough to be able to openly acknowledge his uncertainty & publicly change his mind.
* Anti-humble enough to (tactfully) call bullshit on his guests, and ask tough pointed questions.

I don't know how he strikes the balance, but I'm envious. Anyway, despite name-dropping Obama & Altman earlier, I don't actually recommend *starting* with those specific interviews. Here's what I *do* recommend starting with:

* Interview with [Jennifer Pahlka](https://podcasts.apple.com/us/podcast/the-book-i-wish-every-policymaker-would-read/id1548604447?i=1000615839464), founder of Code for America, and part of the team who saved Healthcare&#46;gov. A look into governmental cover-your-ass-ocracy, and a well-needed antidote/reminder for "policy wonk" types like me & Ezra: principles & philosophy are nice, and none of that matters if *you can't get shit done.*
* Wonk-types think a lot about alternate technologies & policies (and we *should* consider those), but more rarely do we think about *alternate ways to love & care* for each other. So check out these interviews: [Kristen Ghodsee](https://podcasts.apple.com/us/podcast/what-communes-and-other-radical-experiments-in-living/id1548604447?i=1000616253878) on alternatives to the nuclear family, [Dan Savage](https://podcasts.apple.com/us/podcast/dan-savage-on-polyamory-chosen-family-and-better-sex/id1548604447?i=1000593427667) on alternatives to straight monogamy.
* Ezra, being a secular[?] liberal Jew[^ezra], has grappled with a *lot* of questions since October 7th. To understand the "inside view" of (moderate-ish) Palestinians & Israelis, here's: an interview with [Salam Fayyad](https://podcasts.apple.com/us/podcast/building-the-palestinian-state-with-salam-fayyad/id1548604447?i=1000644742952), former prime minister & finance minister of the Palestinian Authority; an interview with [Ari Shavit](https://podcasts.apple.com/us/podcast/watching-the-protests-from-israel/id1548604447?i=1000654784076), Israeli journalist & long-time critic of Benjamin Netanyahu. **Again, "retweets are not endorsements"** — but you *have* to understand opposing views "from the inside" if you hope to change hearts/minds.

[^ezra]: As far as I can tell, Ezra Klein is an atheist but unwillingly so. [2007 statement](https://prospect.org/article/wages-atheism/). He *wants* to believe, but cannot. Coz, I mean, the Holocaust kinda puts a fine point on the whole "how can a good, omnipotent God allow unnecessary suffering of innocents" problem.

Also, Ezra just has a soothing voice. Nothing like "neurotic Jewish nerd" rizz

Find this show on where-ever you get your podcasts. (I use PodBean)

**Recommended for:** Policy-wonk nerds. People tired of podcast-pundits pandering to you & not actually challenging your mind. People who need to fill up an hour on their daily commute.


## 🎵 THE CONE ZONE!!!!!

<iframe style="border: 0; width: 350px; height: 555px;" src="https://bandcamp.com/EmbeddedPlayer/album=3604859437/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="https://idadeerz.bandcamp.com/album/the-cone-zone-changes">the CONE ZONE! / changes by ida deerz</a></iframe>

This album just bops

**Recommended for:** fans of trans furry hyperpop