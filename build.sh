#!/bin/bash
npx @11ty/eleventy
cp -a docs/posts/. docs/
rm -rf docs/posts
mkdir -p docs/rss
cp -a docs/feed.xml docs/rss/index.xml
echo "It's built, sucka!"