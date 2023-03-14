---
title: How to use getStaticProps
meta: Maybe you’ve heard of it, maybe you haven’t. Zig is a new programming language that seems to be growing in popularity. Let’s do a quick dive into what it is.
slug: how-to-use-getstaticprops
---

Astro is a new approach to the current fervor in JavaScript: wringing more performance out of reactive front ends. It is developed by the same team that created the Snowpack build tool.

There have been several attempts to improve performance by avoiding the expensive prefetching and bootstrapping that have afflicted React-like frameworks. This is the notorious hydration problem described here.

Astro takes an interesting and novel approach. It is a build system that lets you use whatever framework you want (React, Svelte, Vue, etc.), and then does the work of finding where lazy loading can best be employed. You can think of this as a kind of smart code splitting applied to your app at bundle time.

> So you get to use the same familiar framework you’re using now, but also gain potentially huge performance benefits.

## Islands architecture

The web architecture Astro proposes to deliver is sometimes called islands architecture. The core idea is that the islands are your interactive, JavaScript-dependant components, surrounded by pure HTML/CSS markup.

By carving up the app in this manner, you can ship all of the HTML straight to the browser, so the user has something to interact with, while the JavaScript-dependent portions can be loaded only as needed. You can even tell Astro to defer the JavaScript until a component is visible to the user, as you’ll see below.

```
const builtAt: Date = new Date();
const builtAtFormatted = format(builtAt, 'MMMM dd, yyyy -- H:mm:ss.SSS');
const Test = <h1>Hello, Astro!</h1>
```
