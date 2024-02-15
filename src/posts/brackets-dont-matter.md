---
title: "Why don't brackets matter in multiplication? (Visual proof of associativity)"
tags:
- post
share_image: https://blog.ncase.me/content/media/brackets-dont-matter/banner.png
share_desc: "A never-before-seen visual proof of a stupidly basic fact"
date: 2024-02-15
hasMath: true
readtime: "4 min"
layout: base-layout.njk
---

Remember how in math class, every fact was introduced intuitively & visually, and you never had to rote-memorize stuff without understanding them?

Yeah me neither. I'm considering writing a book titled: *Math For People Who Have Been Scarred For Life By Math (or: Algebra in Pictures)*. It'd be the K-12 algebra book I wish *I* had as a kid: a book where all the facts are re-discovered from scratch, with beautiful visual intuition.

While outlining this book, I quickly realized: I *don't* know why some basic facts in algebra are true.

**For example, I had no idea why brackets don't matter in multiplication.** This fact is called "associativity": \\((a \times b) \times c = a \times (b \times c)\\).

[Yes, it's an "axiom", but why does *this specific axiom hold for multiplying numbers?!* Associativity *isn't* true for some operators! e.g. Subtraction: \\((3 - 2) - 1 \neq 3 - (2 - 1)\\).]

As far as I know, *there does not already exist a published visual proof* for why brackets don't matter (associativity) when multiplying whole numbers.

In contrast, there *do* already exist:

1) A classic visual proof for why *order* doesn't matter ("commutativity") in multiplying *two* numbers:

![Visual proof that 3x4 = 4x3. Rotate a grid of 3-by-4 dots. 3 rows of 4 dots is 4 rows of 3 dots!](/content/media/brackets-dont-matter/animation.gif)

2) A visual proof for associativity in multiplying *three* numbers.[^yt-link] (But it requires a 3D visualization, so it's impossible to visualize multiplying *more than three* numbers.)

[^yt-link]: The earliest published-online example I could find of this proof is fairly recent: [Sri Komala (2020) on YouTube](https://www.youtube.com/watch?v=gvQkZaWbCrc)

![Visual proof that multiplying 3 numbers is associative. Drawing of a 3D lattice of blocks, 2 by 3 by 4 cubes wide.](/content/media/brackets-dont-matter/proof3associative.png)

3) [A formal university-level proof](https://proofwiki.org/wiki/General_Associativity_Theorem/Formulation_2/Proof_2), for why if associativity holds for multiplying 3 numbers, then it holds for any multiplying [any number of] numbers.

But: there's no *fully visual proof* for the associativity of multiplication for *more than three* whole numbers.

Until I found one!

*As far as I know*, this visual proof is novel? I *was* hoping to save the grand reveal of this proof for my book that I may or may not ever write. But, it's been sitting in the closet of my mind for two years, so let's just get it out:

<hr>

## The Proof:

First recall, what do brackets mean in math? It means: "do this first".

![(I'm sorry, I can't do accessible alt text for the following pictures, because it's a visual proof. The main text should be good enough for a rough mental image, hopefully.)](/content/media/backlog/math0001.png)

Now, how can we visualize multiplication? Remember "*3* times *4*" means "*3* groups of *4*". Like, 3 boxes of 4 balls each:

![](/content/media/backlog/math0002.png)

Then, **"doing" a multiplication means _removing the box containers:_**

![](/content/media/backlog/math0003.png)

Now, let's picture 2 x 3 x 4. That's 2 boxes of 3 boxes of 4 balls each:

![](/content/media/backlog/math0004.png)

Since doing a multiplication means *removing a box container*, it should now be clear: it *does not matter which order you remove the box containers, you'll always end up with the same number of balls.*

![](/content/media/backlog/math0005.png)

In other words, it doesn't matter which multiplications you do first.

In other *other* words, *brackets don't matter* in multiplication!

Best of all, with this visual, we don't *need* the university-level proof: we can instantly see that associativity must be true for multiplying *any number of* numbers!

Here's 2 x 3 x 2 x 3 x 2, bracketed in three different ways, all leading to the same result:

![Animation of "2 x 3 x 2 x 3 x 2" represented as boxes-within-boxes. No matter which way the boxes are removed, the number of balls in the end must stay the same.](/content/media/backlog/animation.gif)

Granted, this proof only works for *whole* numbers... but still! Kinda shocking a visual proof of such a basic fact *did not* exist before!

---

What's left to do:

* Visual proof of "*Order* doesn't matter (commutativity) for *more than two* numbers."
* Visual proof of "For *any* operator, not just whole-number multiplication: if it's associative for 3 numbers, then it's associative for 3+ numbers."

But I guess you'll have to wait until I write that book, to see those. (Or, wait until I get bored and just dump them as standalone articles.)

*This blog post is a standalone section, ripped out of my upcoming 90-minute-long[!!!] blog post, Cleaning Out The Idea Closet (47 Projects on My Backlog).*

<iframe src="https://ncase.me/ncase-credits/signup.html" frameborder="no" width=640 height=200></iframe>

<iframe src="https://ncase.me/ncase-credits/supporters/feb2024.html" frameborder="no" width=640 height=640></iframe>

