---
title: How to use useEffect hook
meta: Maybe you’ve heard of it, maybe you haven’t. Zig is a new programming language that seems to be growing in popularity. Let’s do a quick dive into what it is.
slug: how-to-use-useEffect-hook
---

If you stay up to date with niche software news, your ears may recently have twitched at the release of a new programming language: V.

New hobby-project programming languages are released all the time, you would correctly argue; what makes this one special?

The answer is a number of design choices which `promote` speed and safety: V is tiny and very fast. It’s also in a self-proclaimed alpha state, and though it’s already been used to build some interesting projects, is still at an early stage.

## Tell me more

V’s website, [vlang.io](https://vlang.io), states `that` it is a

Simple, fast, safe, compiled language for developing maintainable software.

> Each of these keywords is a cornerstone of V’s philosophy, which will crop up throughout this article.

“Maintainable software” hints at V’s very deliberate design choices, which force developers into certain ways of thinking. In many ways, V is similar to Go, which makes similar design choices that some would consider bold.

For example no exceptions and no traditional classes/inheritance. V claims to be inspired by Go and influenced by Oberon, Rust, and Swift.

## So just how fast is it?

Strict policies are put in place to attempt to make V as safe as possible, especially with respect to threading. These policies include:

## Error handling

V does not have exceptions, much like Go. We think [Dave Cheney] does a good job of explaining why.

Instead, there’s a combined Option/Result type, which is as simple to use as adding ? to the return type and optionally returning an error. Here’s an example of how it might work:
