---
title: "Signal Boosts for June 2024"
tags:
- post
share_image: https://blog.ncase.me/content/media/sb/thumb.png
share_desc: "Tutor bots, data detectives, and I FOUND A FIVE-LEAF CLOVER"
date: 2024-06-28
readtime: "8 min"
layout: base-layout.njk
hasMath: true
---

Ay it's yo' girl Nicky, sharing [another](/signal-boosts-may-2024) collection of cool/useful stuff I found last month!

In no particular order:
* [An actually-good tutor-bot](#khan)
* [A note-taking app](#obsidian)
* [Data detectives](#data)
* [Binging on mystery novels](#murder)
* [I FOUND A FIVE-LEAF CLOVER](#clover)

<a id="khan"></a>

## 🌱 Khan Academy's tutor-bot

![](/content/media/sb-june2024/khan.png)
_fan of the app, not a fan of the Cronenberg-esque fleshy-speech-bubble mascot..._

First off, I'm not being sponsored by Khan Academy or OpenAI to mention this. I mean, I'll take your money, but no-one's offering.

Anyway: 1-on-1 tutoring's been long known to have one of the greatest effect sizes on learning[^tutoring-effect], but alas, 1-on-1 tutoring ain't cheap. So, that's always been the promise of AI tutors: personalized tutoring, but affordable to all.

[^tutoring-effect]: An oft-cited old study found that 1-on-1 tutoring + "mastery learning" = [a two-sigma improvement](https://en.wikipedia.org/wiki/Bloom%27s_2_sigma_problem): that is, the average tutored student gets better than 98%(!!) of non-tutored students. (or, going from a C student to an A student, according to [this grade curve calculator](https://www.calcunation.com/calculator/bell-curve-grade.php))

	**Alas, like much early psych research, this doesn't replicate.** (See [these](https://www.educationnext.org/two-sigma-tutoring-separating-science-fiction-from-science-fact/) [reviews](https://nintil.com/bloom-sigma/) )

	According to recent meta-analyses, [1-on-1 tutoring](https://www.researchgate.net/profile/Matthew-Burns-10/publication/317159091_Meta-Analysis_of_the_Effects_of_Academic_Interventions_and_Modifications_on_Student_Behavior_Outcomes/links/5eeba09d458515814a6825ab/Meta-Analysis-of-the-Effects-of-Academic-Interventions-and-Modifications-on-Student-Behavior-Outcomes.pdf)'s effect size is ~0.5, and [mastery learning](https://scholarsbank.uoregon.edu/xmlui/bitstream/handle/1794/28137/stockard_jean_id9.pdf?sequence=1)'s is ~0.5, so added together they probably "only" have a 1-sigma effect: taking an average student to above 68% of other students. (or, C student to B student)

	Which definitely isn't as impressive... but still pretty good!

So when ChatGPT first came, I was excited then immediately disappointed, coz *wow* ChatGPT sucked at tutoring math / physics / technical topics.  For example, I asked it to help me re-derive the rocket equation (which tells you how a rocket's velocity changes) and after 20 minutes of stringing me along with plausible BS, it told me, "assume the rocket's velocity is constant".  *That's* when I closed the app in disgust.

Well 2 years later, I can finally honestly say I've experienced an *actually good* AI tutor:

**[Khanmigo, by Khan Academy!](https://www.khanmigo.ai/)** (powered by GPT-4)

(Ok, I haven't tried the *full* Khanmigo yet, I'm currently using [Khanmigo Lite](https://chatgpt.com/g/g-hRCqiqVlM-tutor-me) on a free plan of ChatGPT. But after a month of trying it, I'm excited to buy the full version!)

Khanmigo, so far, has helped me understand the rocket equation, some integral calculus, and misc stuff from math & physics I wanted to buff up on.

A few features of Khanmigo:

* Works better on math / physics / technical topics than ChatGPT.
* *Will not* give you the answer all in one go; instead, it'll help *you* re-discover ideas from scratch!
* Gives you practice problems, *and* gives feedback on your work.
* Can create graphs & other visuals.

Of course, Khanmigo's missing that social human element[^human], and it's not as good as a master teacher like, say, 3Blue1Brown... but dare I claim, it's on par with an *average* college tutor, at only $4/month![^tutor-rate] Also, it's free for US teachers, and Khan Academy's a non-profit.

[^human]: Actually, the "social human element" [may not matter much](http://web.archive.org/web/20240628180937/https://edisciplinas.usp.br/pluginfile.php/4279672/mod_resource/content/1/Intelligent%20tutoring%20systems%20and%20learning%20outcomes%20A%20meta-analysis.pdf): "No significant difference between learning from \[tutor software\] and learning from individualized human tutoring or small-group instruction."

	But I still believe (without hard evidence) that an *excellent* human (like 3Blue1Brown) can still out-teach the best *current* software (for now).

[^tutor-rate]: For context, [the average hourly tutor rate is ~$20](https://tutorcruncher.com/average-tutoring-rates/).  So, instead of 1 hour of an *average* human tutor, you could have *5 months* of Khanmigo.

And yes, since I'm someone who's *entire income* comes from making educational stuff, I should be slightly scared of this. Oh well. Not a bad way to end up broke, I guess.


<a id="obsidian"></a>
## 🪨 Obsidian, a note-taking app

![](/content/media/sb-june2024/obsidian.png)

I've been on the hunt for a *good* note-taking app for years. A decade ago I used Notational Velocity, but my needs outgrew its minimalism. Then I used Bear but it doesn't have folders & crashed a lot on tablet. Then I used Notion but *dear god it's so slow & laggy*, also there's no offline mode on Android? Then I used Google Keep, but again, no folders and sometimes laggy. Then I tried a lesser-known app called [MWeb](https://www.mweb.im/), which was pretty good, but there's no Android version.

This month, I (re-)found **Obsidian**!  I actually *did* try Obsidian last year, but it didn't stick because I went overboard with their cross-linking note system & made a mess of it.  But now, I use Obsidian for almost *everything* text-related:

* Day / Week / Year task management
* Journaling & Dream diaries
* Dumping ideas & notes from research/studying
* Writing articles — including *this* blog post you're reading!

Some features of Obsidian that make it especially good for me:

* **For staying organized:** Todo-list-style checkboxes; Clicking headers & bulletpoints to hide/collapse sections. (Obsidian also allows cross-linking notes like in Notion, but honestly, as mentioned earlier, every time cross-linking it becomes a mess. Shame, coz that feature *sounds* so cool, yet it's always been bad for me. Other folks swear by it, though.)
* **For articles/writing:** I can write in Markdown (what my blog engine requires), stick pictures in notes, *and even use LaTeX, a math-rendering tool*. That last one's important, since I do math-education stuff sometimes. \\(a^2 + b^2 = \text{yo momma}\\)
* (Finally: Obsidian allows plug-ins, so if there's some other feature you want, someone's probably written a plug-in for that!)

I currently use Obsidian on Mac OS X, iPad, and Android. App itself is free, but I pay $4/month for Obsidian Sync, to synchronize all my devices. Again, I'm not being sponsored to say any of this, I just really like Obsidian.

**[Check out Obsidian here!](https://obsidian.md/)** Available on all major platforms.

(CORRECTION on June 29, 2024: The original version of this post claimed that Obsidian was open-source. [It's not.](https://github.com/obsidianmd/obsidian-releases?tab=readme-ov-file#about-this-repo) I don't know how I mixed it up in my head, sorry. Sincere thanks to J.C. & Q for emailing me about the error!)


<a id="data"></a>
## 🍸 Data Colada, data detectives

> A previous version of this post was supposed to go live in January 2019. But the day before it was scheduled, **the Data Colada team (Uri, Leif, and Joe) received an email that we took to be a potential death threat.** After discussions with the local police, the FBI, and our families, we decided to postpone its publication indefinitely.
>
> ~ from [Data Colada #117](http://datacolada.org/117)  \[emphasis added\]

That wasn't even the _first_ time these data detectives got seriously threatened. From [Data Colada #116](https://datacolada.org/116): \[emphasis added\]

> We identified evidence of fabricated data in four studies co-authored by Francesca Gino. We asked her employer, Harvard University, to look into it. They spent a year and a half doing that, and determined that we were right. So they contacted the relevant journals with requests for retractions and put Gino on unpaid administrative leave. Then we wrote some blog posts about it. **Then Francesca Gino filed a $25M defamation lawsuit against us and Harvard.** Legal wackiness ensued.

That lawsuit is *still* ongoing.

Anyway, what I love most about Data Colada's posts is they genuinely feel like _murder mysteries._ Showing exhibit A, exhibit B, etc, all independently pointing to stinky fishiness.

For example, in [one of their biggest fraud busts \[Data Colada #98\]](https://datacolada.org/98), they investigated a famous study on honesty. (Yes: Fraud, in a study on honesty. Lady Irony must eat well, coz irony be *thicc.*)

 *Supposedly,* the study asked 13,488 folks to report how many miles they drove. Now, if the data was *real*, you'd expect a bell curve like this:

![](/content/media/sb-june2024/data1.png)

What you would *NOT* expect, is the data looking like *this:*

![](/content/media/sb-june2024/data2.png)

That is: looking like someone typed `RANDBETWEEN(0,50000)` in Excel to get uniformly-random fake data. And this was just *one* of the many signs of fraud our detectives uncovered.

Anyway, to read their "data murder mysteries", check out the above links! Data Colada also writes insightful articles on statistics in general. One of my faves is: [why the standard way to detect publication bias sucks, and a better way to do it](https://datacolada.org/30). (the authors *invented* a new statistical tool!)

<a id="murder"></a>
## 🔪 Holly Jackson's mystery novels

![](/content/media/sb-june2024/hj.png)

Iiiiiiiii just binged on all (but one) of Holly Jackson's books last month.

My mini-reviews: (90% spoiler-free)

* HJ's Good Girl series:
	* **A Good Girl's Guide to Murder:** A solid classic! Full of surprising-but-logical twists, good character arcs & motivations. Loved how most chapters ended with a running list of notes & questions & hypotheses. Felt kinda "rationalist fic", with the protagonist – "Pip" – demonstrating a "scientific method" approach. (Main criticism: characters sometimes unrealistically monologue, but the exposition-dump is twist-y enough to be worth it.)
	* **Good Girl, Bad Blood:** This sequel goes meta: Pip makes a podcast about her story in the previous book, then solves a new missing-persons case for the podcast. The story never uses this idea much (the podcast was not crucial to any clues or story points), and one of the Big Twists un-satisfyingly comes out of nowhere.
	* **As Good As Dead:** My misgivings about the 2nd novel were _well_-compensated for. The 2nd novel's ending set up a much more _psychological_ 3rd novel, with Pip struggling with PTSD, anger, and the injustice of the legal system. (This book shows the reader *real* stats, like how often false confessions happen & why.[^false-confessions]) Then, like *Psycho* & *Hereditary*, the novel throws a _complete_ curveball in the middle, and becomes a wildly different story. The book was a bit too hammy on the "everything's coming full circle!" theme, but, yeah. It worked. Solid ending to the series.
	* **Kill Joy:** `(prequel novella, haven't read yet)`
* HJ's standalone books:
	* **Five Survive:** Six young adults stuck in an RV in a dead zone with a sniper! Lots of clever MacGyver'ing & cat-and-mouse action. That said, I don't like novels where the Big Twist is *artificially* held from you; in this case, the protagonist *knows* (one of) the Big Twists, but her internal monologue refuses to tell you, the reader, until 2/3 of the way in.
	* **The Re-appearance of Rachel Price:** A *reverse* murder mystery, of someone's mom coming back from the dead! This one best captured the same spirit of HJ's first book, but in a fresh distinct way. I'm talking: logical twists, clever detective work, solid emotional character arcs! Ending is disturbing-in-a-good-way, too.

[^false-confessions]: From [the Innocence Project](https://innocenceproject.org/overturning-false-confessions/): “In approximately 25% of the wrongful convictions overturned with DNA evidence, defendants made false confessions, admissions or statements to law enforcement officials.” [False confessions happen](https://innocenceproject.org/false-confessions/) due to a subject's intellectual disabilities, coercive/deceptive interrogations, being bribed with promise of immunity, sleep-deprived confusion, to protect someone else, etc. [Other replicated research](https://cris.maastrichtuniversity.nl/ws/portalfiles/portal/1091296/guid-03aa0f12-49eb-46f9-9b67-e382ab75fcf1-ASSET1.0.pdf) shows it's really easy to elicit false confessions, even with negative consequences.

(If you hate reading, there's a BBC adaptation of the first novel coming out July, then streaming on Netflix in August. I probably won't watch it.)
<a id="clover"></a>
## 🍀 I FOUND A FRIGGIN' *FIVE*-LEAF CLOVER

True fact!

<iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/azG7E8LyVqg?si=LPwAI0hVhIN1DH_V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Anyway, that's all for this month, folks. Go home.
