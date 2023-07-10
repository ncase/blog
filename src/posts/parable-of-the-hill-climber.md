---
layout: base-layout.njk
title: "Parable of the Hill Climber"
date: 2018-11-30T16:34:44.000Z
tags:
- post
- Behind The Scenes
share_image: https://blog.ncase.me/content/images/2018/11/max0001.png
share_desc: "Once upon a time, there was a hill climber."
---

Once upon a time, there was a hill climber.

![max0001-1](/content/images/2018/11/max0001-1.png)

The hill climber wanted to climb the tallest hill. However, the land was foggy and they couldn't see far. So, they climbed in whatever nearby direction seemed uphill.

![max0002](/content/images/2018/11/max0002.png)

They climbed & climbed, and finally reached a peak. “At last,” the hill climber said, “I've climbed the tallest hill!”

![max0003](/content/images/2018/11/max0003.png)

What our protagonist has done is known as the "Hill Climbing" algorithm. Given a point on a landscape of possibilities – where higher points represent better states – the algorithm just looks at nearby points (because evaluating all points would be too costly), moves to the "highest" nearby point, and repeats. Eventually, the algorithm will reach a peak.

Just one problem.

![max0004](/content/images/2018/11/max0004.png)

That peak may not be _the_ peak.

Our hero is now stuck in what's called a **"local maximum".**

![max0005](/content/images/2018/11/max0005.png)

The hill climber looked to the left. Doesn't seem uphill.

![max0006](/content/images/2018/11/max0006.png)

The hill climber looked to the right. Doesn't seem uphill.

![max0007](/content/images/2018/11/max0007.png)

The hill climber felt trapped. “Is this all there is?” they thought. “Is life literally all downhill from here?”

Little did they know, there are better algorithms. Algorithms like “Stochastic Hill Climbing” and “Simulated Annealing” solve the local-maximum problem by _adding randomness_. This causes the algorithm to take _worse_ steps in the short-run, so it can locate _better_ states in the long-run.

Sometimes, you have to leave what's been working for you, and take a step down into the fog...

![max0008](/content/images/2018/11/max0008.png)

...to climb to a better place.

![max0009](/content/images/2018/11/max0009.png)

_[(this cheesy story was originally posted on my Patreon)](https://www.patreon.com/posts/23027356)_