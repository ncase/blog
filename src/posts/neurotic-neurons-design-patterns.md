---
layout: base-layout.njk
title: "Neurotic Neurons: Design Patterns"
date: 2015-09-27T20:15:00.000Z
tags:
- post
- Behind The Scenes
share_image: 
share_desc: ""
---

Ten months ago, I had the idea to do _some_ interactive thing involving Hebb's Rule & neurons. Since then, I've been sketching/prototyping several different versions. The final version I released, _[Neurotic Neurons](http://ncase.me/neurons)_, took only four weeks from start to finish, and that's including one week off for XOXO.

So, that's nine months of mucking about, then one month of actually useful work. The 90% crap rule holds up.

Anyway, the upside of having created and playtested so many different versions, is that I can compare and contrast them. With the feedback of dozens of playtesters, I now have semi-sorta-kinda-not-really-empirical evidence of what does and doesn't work for an interactive explanation.

Here's what works. This is kind of a note to self, so next time, I can avoid nine months of mucking about.

### 1\. Huge possibility space.

Before _Neurotic Neurons_, my neurons project looked like this:

![GIF - iltbam anxiety](/content/images/2015/09/ahhh.gif)

It definitely had more story and art, but there were only there things you could actually interact with. As my playtesters reported, it didn't feel like a _system_, it felt like an obtuse animation.

_Neurotic Neurons_ took the complete opposite approach:

![click neuron](/content/images/2015/09/Screen-Shot-2015-09-27-at-14-00-02.png)

When it starts off, you get 30-ish neurons you can click in any order you want, whenever you want, even while the narrator is talking. Even in the therapy scene:

![therapy](/content/images/2015/09/Screen-Shot-2015-09-27-at-14-02-53.png)

There's still nine neurons you can click in any order you want. What I _could_ have done was force the player to go through each set of three in sequence, but limiting it down to three options would feel like -- as reported before -- an obtuse animation. Ironically, most players solved the therapy puzzle sequentially from left-to-right _anyway_.

There's another major difference _Neurotic Neurons_ took from my previous version...

### 2\. Direct manipulation.

As you saw in the first GIF above, you'd click the book, _then_ my character reads it, _then_ some magic signal flies off, _then_ it fires the neuron. That's three in-betweens.

In Neurotic Neurons, you click to fire a neuron. Not even _one_ in-between. The manipulation is _direct_.

There's not much to say about the virtues of direct manipulation, other than it gives better control, or at least a better _illusion_ of control, and besides, it just _feels_ good, which brings me to my next point...

### 3\. Juice! Juice! Juice!

When you first click on a neuron, it just sends _so many_ signals out flying, creating lots of interesting visuals from one or a few interactions. That's what game designers call _juicy_ -- things that squish & squash & bounce & brighten & react to whatever you do.

![GIF - clicky propagation](/content/images/2015/09/propagation.gif)

Feels good, man.

(In an early prototype of _Neurons_, the neural network was randomly generated, meaning some neurons would have no outbound connections, so they were boring to click. So that's why in the released iteration, I manually created a neural network so that _any_ neuron you'd click on your first go would be juicy and interesting.)

On top of the _visual_ juice, one unique aspect of Neurons was the _voice_ juice.

I, the narrator, would react to little things you do, too! (Inspired by _The Stanley Parable_ and _Bastion_, of course.) If you made little mistakes in the Hebb/Anti-Hebb parts, my narrator would gently guide you. The first time you click a neuron, I say _“Yeah!”_ If you click a neuron before I was done talking in the intro, I'd say _“Ex-CUSE me, I'm talking here!”_

Why would I let the player interrupt me? Other than being funny, it fits other design pattern I stumbled upon...

### 4\. Low non-interaction.

With the exception of the 8-second intro and 8-second outro, you can _always_ interact with something in Neurotic Neurons. Even during the credits. Even while the narrator is talking.

(For some reason, most of my players decide to patiently wait for me to finish talking, and I'm not sure why. Maybe just the _knowledge_ you could interact if you wanted to is enough.)

This "Always Be Interactive" rule has already made its way to mainstream game design, with games that deliver story through scripted sequences, or disembodied voiceovers. (as opposed to the game-story design philosophy of mixing cutscenes and gameplay, like oil and water.)

However, not _all_ kinds of interaction are good, so...

### 5\. No crap-interaction.

Think back again to the first GIF I showed you, where you have to click to get a piece of the story about my anxieties, and there's no meaningful choice of what to click. That's a crap interaction.

(**Aside:** There's two exceptions I can think of for when "click-this-to-progress" can work: creating anticipation, like unwrapping a present, or creating panic, like a series of fast quicktime events.)

(**Aside II - The Tangentioning:** I'll write more about crap-interaction in a future post, but Bret Victor's long-ass essay, [Magic Ink](http://worrydream.com/MagicInk/), has a particularly eye-opening section titled “Interaction Considered Harmful”. If you have, uh, an hour to spare, I recommend reading it.)

But interaction for the sake of interaction? No. So in my new version, when I deliver the part of my story about my anxieties, the neurons _automatically_ fire. You _can_ still interact with it if you want to, but you no longer _have_ to:

![GIF - fears](/content/images/2015/09/fears.gif)

Oh, this scene reminds me. You see that specific arrangement of neurons? I considered other arrangements, but this one was the only one that let me...

### 6\. Keep mechanics consistent.

For comparison, I previously wanted to make the fears _hierarchical_, like a fear of public speaking connecting to both a fear of social interaction and a fear of failure. However, if the player were to disconnect _those_ connections, the entire thing would make no sense. The only way to prevent that would be to "lock" the connections.

An ugly solution which, actually, in a previous version, I did implement:

![pavlov lock](/content/images/2015/09/Screen-Shot-2015-09-27-at-13-49-09.png)

It's a sucky solution, so I scrapped my plans for a hierarchical arrangement, and did the three-part arrangement you see in the final version.

However, _that_ arrangement still needed constraints. You shouldn't be able to connect fears to each other, or connect feeling fear to feeling safe. However, this time, I could enforce that constraint through _spatial distance_! Those neurons would simply be too far apart for Hebb's Rule to work, something I already established _before_.

The lesson I learnt was, whenever you need to enforce a constraint, _try to use the mechanics you already have_.

Also, one should try to be consistent with the mechanics throughout. In the introduction to Neurons, I could have disabled Hebb & Anti-Hebb's rule, just to focus on the signal propagation, but I thought it'd feel more elegant to have it consistent throughout.

And besides, in a previous version, I _did_ toggle the rules on-and-off at different points, but that just made it more confusing, _less_ clear, which brings me to my final lesson...

### 7\. Clarity > Cleverness.

Early on, I made a whole bunch of things I thought was just _sooooo_ clever, but just ended up making things more confusing. Here's a few of 'em:

![Hebb's Rule](/content/images/2015/09/Screen-Shot-2015-09-27-at-13-57-47.png)

Hebb's Rule has a nice mnemonic rhyme, “Neurons that fire together, wire together.” However, that rhyme doesn't tell you _which_ direction the connection is created. Anti-Hebb's rhyme, “Neurons that fire out of sync, lose their link,” also just confused people.

![pavlov's pug](/content/images/2015/09/Screen-Shot-2015-09-27-at-13-51-32.png)

One original premise for my neurons project was to explain the famous conditioning experiments, and see them in a new light! However, since they wouldn't be in “a new light” if you _didn't_ know about them, and if you _already_ knew about them, the puzzles would be boringly easy... so it was all just cleverness for no solid reason.

![chompy](/content/images/2015/09/Screen-Shot-2015-09-27-at-13-56-15.png)

Finally, there's this clever thing, the thing I was most reluctant to kill. Chompy the Lizard Brain. So cute! So loveable! Ended up being a very muddled metaphor that confused everyone, including myself.

(**Note: more clarity =/= more exposition.** In previous versions, I'd over-explain things, but the more redundant information, the less players paid attention, so the _more_ confused they were later on.)

By the way, as much as I dislike listicles -- such as this blog post -- I will admit it's a very clear format.

### In Summary:

1.  Huge possibility space.
2.  Direct manipulation.
3.  Juice! Juice! Juice!
4.  Low non-interaction.
5.  No crap-interaction.
6.  Keep mechanics consistent.
7.  Clarity > Cleverness.

Here's to less mucking about next time.