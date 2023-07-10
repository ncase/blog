---
layout: base-layout.njk
title: "Why Simulate?"
date: 2016-04-15T14:18:21.000Z
tags:
- post
- Explorable Explanations
- Journo Stuff
share_image: https://blog.ncase.me/content/images/2016/04/simulation-1.gif
share_desc: ""
---

![that sim-u-la-tion gif](/content/images/2016/04/simulation.gif)

When most people hear the word “simulation”, they probably think about The Matrix, and whether we're all living in a simulation or something. But real simulations are made for a _purpose_. They're created to figure out the past, improve the present, or explore possible futures.

So the good news is, we _can't_ be living in a simulation, because this world _has_ no purpose! Yaaaaaaaay!

* * *

There's many reasons to use simulations, but for this blog post, I've created a rough taxonomy of 6 main functions. Of course, these categories are broad, fuzzy, and not mutually exclusive. This list is mostly for my own sake, but if you're an educator, researcher, or journalist, hopefully it can be of help to you as well!

Anyway, here's how we can use, or are already using, simulations to understand the world around us:

![1](/content/images/2016/04/simulating.png)

1\. Exploration (What If?)
--------------------------

First off, simulation as thought experiment. Thought experiments aren't just some useless armchair philosophizing – they've been _critical_ to the development of science! For example, Galileo never actually dropped balls off the Tower of Pisa to prove different masses must fall at the same rate – [he proved it via thought experiment](https://en.wikipedia.org/wiki/Thought_experiment#Overview). Simulations let us ask, “what if?” (sidenote: Another scientific example: Albert Einstein's chasing-a-light-beam thought experiment leading directly to Special Relativity.)

**Examples:**

**[Explorable Explanations](http://worrydream.com/ExplorableExplanations/#reactiveDocument)** by Bret Victor – In this example, one can ask _“what if”_ of a policy proposal, by dragging numbers, to see what effects different prices and parameters would have.

[**Simulating The World In Emoji** 😘](http://ncase.me/simulating/) by Nicky Case (me!) – inspired by Bret Victor's work, I made this tool to model systems, so a reader can change _every_ rule and parameter, asking all sorts of "what if" questions.

**[The New Science of Sentencing](https://www.themarshallproject.org/2015/08/04/the-new-science-of-sentencing#simulator)** by the Marshall Project, and the very closely inspired **[Gun Suicides](http://jonuy.com/firearms-and-deaths/)** by Jon Uy – both of these let you change sliders to let you _make tradeoffs_ between different public policies.

![2](/content/images/2016/04/polygons.png)

2\. Explanation (How Does?)
---------------------------

This one is the most common kind of simulation I've seen. Simulations are best at explaining **processes**, things that happen over lots and lots of small steps. (sidenote: Of course, there are simpler ways to show simpler processes – no need to use a flamethrower for a birthday cake candle. For example, [causal loop diagrams](https://en.wikipedia.org/wiki/Causal_loop_diagram), flowcharts, or even just a numbered list of steps.)

**Examples:**

**[Parable of the Polygons](http://ncase.me/polygons/)** by Vi Hart & Nicky Case (me again!) – this interactive shows how harmless individual decisions can accumulate to a harmful societal result... and lets _you_ make those small individual decisions, step by step. _You_ lead the process, here.

**[Introduction to A\*](http://www.redblobgames.com/pathfinding/a-star/introduction.html)** by Amit Patel – simulations to explain a technical concept. In this example, you provide _different inputs_ to a computational process, and see what the process spits out back at you.

**[Methinks It Is Like A Weasel](https://en.wikipedia.org/wiki/Weasel_program)** by Richard Dawkins – this one isn't "interactive", and doesn't need to be, since simulation != interactive. But it's still one of my favorite educational sims, coz it's so simple, yet shows how the _process_ of evolution works. (sidenote: OR DOES IT? I wrote another post recently, about how random mutation + non-random selection isn't enough to explain evolution; [you need _recombination_.](http://blog.ncase.me/the-building-block-hypothesis/))

![3](/content/images/2016/04/netlogo.png)

3\. Emergence
-------------

A few simple rules in Go or Chess can lead to centuries of complex play. Individually dumb ants can make up a scary-smart colony. The mindless process of evolution creates life that looks designed.

That's emergence, and it's hella cool. (sidenote: See previous blog post: [Emergence Is Frikkin' Magic](http://blog.ncase.me/emergence-is-frikkin-magic/))

But it's also something humans can't figure out just in their head, what with [our working memory of 7 ± 2 things](https://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two). But just like how writing let us extend our memory to paper, and led to the invention of mathematics and history, computers can [augment](http://www.dougengelbart.org/pubs/augment-3906.html) (but should not _replace_) our ability to work with complexity and emergence.

(The following examples are not "interactive", but again, simulation != interactive)

**Tools:** one popular simulation tool (for both education and research) is [NetLogo](https://ccl.northwestern.edu/netlogo/). On the more theoretical, non-software side, there's also [agent-based models](https://en.wikipedia.org/wiki/Agent-based_model), [stock-and-flows](https://en.wikipedia.org/wiki/Stock_and_flow), and [monte carlo simulations](https://en.wikipedia.org/wiki/Monte_Carlo_method).

**Algorithms:** some algorithms _use_ emergent behavior to become incredibly powerful. For example, [genetic algorithms](https://en.wikipedia.org/wiki/Genetic_algorithm) and [neural networks](https://en.wikipedia.org/wiki/Artificial_neural_network) (which recently beat expert humans at Go). (sidenote: Ooh! Check out this cool, new [explorable explanation on neural networks!](http://playground.tensorflow.org/))

![4](/content/images/2016/04/Screen-Shot-2016-04-14-at-16-36-34.png)

4\. Predicting the Unknown (meh)
--------------------------------

First of all, I gotta say – prediction is _totally_ overrated. The world is way too complex for prediction, and even if you _can_ predict something, the effort is probably better spent in being _adaptive_ to multiple possible futures, or _changing_ the future – rather than trying to predict and plan for _one_ future.

But hey, peeps try. (sidenote: Alright, I'm being over-the-top cynical. Forecasting is important, but for any complex system, one should only predict _probabilities_, not specifics.)

**In The Real World:** obviously, weather forecasts, which are only accurate up to a few days. But peeps also use sims to try to [predict economics](https://en.wikipedia.org/wiki/Dynamic_stochastic_general_equilibrium), which is accurate up to... um, prolly not ever, really.

**_Retro_\-diction:** now _this_ usage I kinda like. Instead of trying to predict the unknown future, using simulations to "predict" the unknown past. For example, computational archeologists have used agent-based sims to try to figure out [how the Anasazi tribe suddenly disappeared.](http://www.css.gmu.edu/~axtell/Rob/Research/Pages/Ancient_societies_files/Anasazi-Nature%20(J%20Diamond).pdf)

![5](/content/images/2016/04/Screen-Shot-2014-05-23-at-5-45-25-PM.png)

5\. Creating the Unknown (yeh!)
-------------------------------

Now _this_ is the good stuff. Scientists, engineers, and even policymakers, all already use simulations to test out different futures, and design & pick the better ones.

**In The Real World** - [Firefighters use sims](https://en.wikipedia.org/wiki/Wildfire_modeling) to fight forest fires in real-time. [City planners use sims](http://www.urbansim.com/) to figure out building placement, traffic flow, resources, etc. [The CDC uses sims](http://www.cdc.gov/epicasestudies/download_simulation.html) to strategize how to combat epidemics. See? _SIMULATIONS SAVE LIVES._

But I have one main complaint about these sims, and that's that they're not accessible to the rest of us. These simulations are used to decide how citizens' lives are shaped, shouldn't we be able to use them, too? I don't think it's malicious, it's just that designing things to be friendly and generally accessible is hard, which is why we should look to... (sidenote: One exception I can think of is [C-ROADS](https://www.climateinteractive.org/tools/c-roads/), a stock-and-flow model of climate change that's meant for laypeeps & policypeeps, yet scientifically rigorous.)

**Vidyagames!** – like [The Sims](https://en.wikipedia.org/wiki/The_Sims) series, or those [business-management games](https://en.wikipedia.org/wiki/Business_simulation_game). They're probably not very accurate, but dang they sure do a good job of making complex systems and tradeoffs not only accessible, but _fun!_

![6](https://i.imgur.com/nQLibhO.png)

6\. Role-Playing
----------------

Finally, I'd like to end with something a little bit more _human_ – role-playing. Our natural curiosity to know what it's like to be another person, to live another life. Whether that's through books, movies, games... or simulations.

**Interactive Stories:** Despite [my having _made_ an "empathy game"](https://ncase.itch.io/coming-out-simulator-2014), I take a lot of issue with "empathy games". I mean, nobody describes books or movies as being "for empathy". That said, there are some great role-playing interactive stories out there, that actually enlighten and educate. One that impacted me personally is [Depression Quest](http://www.depressionquest.com/) by Zoe Quinn. (You can read my analysis/dissection of it in my essay, [I Do & I Understand](http://blog.ncase.me/i-do-and-i-understand/)) (sidenote: Runner-up: [Syrian Journey](http://www.bbc.com/news/world-middle-east-32057601) from BBC Interactive. Rough, but good idea of using a "composite character" from real interviews to tell a nonfic story. The game-y tone of writing is _awful_, though.)

**Real Life Uses Too, I Guess:** And of course, role-playing simulations are used to train flight pilots, surgeons, and military personnel.

* * *

The world is shaped by complex systems, too vast and complicated for the unaided human mind to handle. But like how we use oven mitts to get a grasp on fresh, hot cookies, we can use simulations to get a grasp on complexity. And it'll be just as delicious.

\* _Further reading: [Why Model?](http://jasss.soc.surrey.ac.uk/11/4/12.html) by Joshua Epstein._

\*\* _the header .gif is from the adventure-comedy indie game, [JAZZPUNK](http://www.jazzpunk.net/). i don't know how to explain it. it is not a thing that can be explained_