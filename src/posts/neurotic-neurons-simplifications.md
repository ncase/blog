---
layout: base-layout.njk
title: "Neurotic Neurons: Simplifications"
date: 2015-09-26T19:57:55.000Z
tags:
- post
- Behind The Scenes
share_image: https://blog.ncase.me/content/images/2015/09/thumbnail-2.png
share_desc: ""
---

![](/content/images/2015/09/thumbnail-1.png)

My most recent interactive project, [Neurotic Neurons](http://ncase.me/neurons), has a _lot_ of simplifications. I think this can be a good thing — a street map is useful not just despite simplifying the city, but _because_ it simplifies the city. Likewise, this model throws away details that may distract from learning about the core principles of anxiety and therapy.

Nevertheregardless, for the sake of intellectual honesty, here's everything I know I lied about, why I simplified them the way I did, and what I know _I don't even know_.

### 1\. Thoughts don’t live in individual neurons.

Well, duh.

You have no "dog" neuron or "pain" neuron. I was using those phrases as linguistic shorthand because explaining the world through symbolic spoken language is like eating a steak through a straw.

I wish I didn't have to explicitly debunk the idea that thoughts live _inside_ individual neurons, (to be fair, nobody knows how thoughts emerge from neural connections, they just do) but considering [crappy popsci like this](http://www.telegraph.co.uk/news/celebritynews/3276569/Jennifer-Aniston-neuron-shows-how-we-react-to-celebrity-faces.html), and the fact so many people still believe that “we only use 10% of our brain”, I just gotta cover all my bases here.

### 2\. Neurons aren't deterministic.

One neuron doesn't _directly_ cause the next connected neuron to fire — instead, it raises (or lowers) the next neuron's action potential, merely making it _more likely_ (or less likely) to fire. It's stochastic, that is, sorta random.

However, adding unpredictability to a model makes it harder to learn, and if I could get away without it, that's fine. My goal with _Neurons_ was teachin' peeps the general gist, rather than specific details.

However, making my model deterministic meant I had to add _another_ inaccuracy:

### 3\. Neural signals don't have varying strengths.

All neural electrical signals have more-or-less the exact same voltage. What real neurons do to vary the intensity of a nerve signal is changing the _frequency_ of signals. Getting poked sends a few signals per millisecond, getting punched sends a _lot_ more signals per millisecond.

Yup, higher signal frequency sure _hertz._

(bad pun face)

Anyway, since I made my model deterministic, I couldn't use probability to make signals "die out". So, I pretended that signals get weaker the more they're passed down from neuron to neuron, and that only the _strongest_ signals trigger the Hebbian & Anti-Hebbian learning rules.

Speaking of which...

### 4\. Hebbian & Anti-Hebbian Learning is... actually pretty good, but sort of incomplete.

Hebbian & Anti-Hebbian Learning, even though proposed long before we knew much about the anatomy of neurons, turned out to have a solid biological basis! It's called [spike-timing-dependent plasticity](https://en.wikipedia.org/wiki/Spike-timing-dependent_plasticity) (STDP), one of many things I don't actually know deeply about.

Anyway, the Hebb & Anti-Hebb rules also explains a lot of the weird results from [classical conditioning](https://en.wikipedia.org/wiki/Classical_conditioning) experiments, even explaining why backwards conditioning doesn't work, and extinction of conditioned responses.

What those rules _don't_ explain, however, is the Zero Contingency Procedure. (Given a connection A→B, firing B without A weakens the connection, since A no longer "predicts" B.) I don't know what model explains _that_, which brings me to my final bulletpoint:

### 5\. Everything I Know I Don't Know

As I just mentioned, I don't know what model explains the Zero Contingency Procedure? Maybe some variant on the Anti-Hebbian rule?

Also, other than the most basic details I gleamed from [Crash Course](https://www.youtube.com/watch?v=qPix_X-9t7E), I don't know much about neural anatomy, especially not the actual chemical mechanism by which Hebb/Anti-Hebb/STDP works.

Furthermoreover, I don't know where or how inhibitory neural connections come into play. Because... that's a connection from neuron A to neuron B, where A \*anti-\*predicts B? If A fires, make B firing _less_ likely. Not sure how that kind of connection gets learnt.

And finally, while it would be nice... for obvious reasons, I can't list what I don't know I don't know.