#!/bin/bash
rm -rf docs # fresh start
npx @11ty/eleventy # make it
cp -a docs/posts/. docs/ # copy over docs
mkdir -p docs/rss # custom rss url
cp -a docs/feed.xml docs/rss/index.xml # clone the rss
echo "It's built, sucka!"
