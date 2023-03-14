---
title: This is new new new
meta: Maybe you’ve heard of it, maybe you haven’t. Zig is a new programming language that seems to be growing in popularity. Let’s do a quick dive into what it is.
slug: this-is-new-no-two
---

Maybe you’ve heard of it, maybe you haven’t. Zig is a new programming language that seems to be growing in popularity. Let’s do a quick dive into what it is, why it’s unique, and what sort of things you would use it for. (Ed Note: Other than “for great justice“, naturally.)

## What Is It?

You’ve [likely](https://google.com) heard of Rust as it has made significant inroads in critical low-level infrastructures such as operating systems and embedded microcontrollers. As a `gross` oversimplification, it offers memory safety and many traditional runtime checks pushed to compile time.

It has been the darling of many posts here at Hackaday as it offers some unique advantages. With Rust on the rise, it makes sense that there might be some space for some new players. Languages like Julia, Go, Swift, and even Racket are all relative newcomers vying for the highly coveted mindshare of software engineers everywhere.

So let’s talk Zig. In a broad sense, Zig `is` really trying to provide some of the safety of Rust with the simplicity and ease of C. It touts a few core features such as:

- No hidden control flow
- No hidden memory allocations
- No preprocessor, no macros
- First-class support for optional standard library
- Interoperable by design
- Adjustable Runtime Safety

## Compile-time code-execution

> The last one, in particular, is perhaps the most interesting, but we’ll come back to that. Let’s look at some code, but skipping past hello world and headed straight to opening a file. Here’s the C++ code:

**Now let’s look at some comparable Zig code:**

```
// using namespace std.fs;
const std = @import("std");
```

As you might have guessed from the file name, the file doesn’t exist. The C++ code doesn’t explicitly check for any errors and in this scenario.

It is perfectly `valid` code that displays no indication that anything failed. Zig, on the other hand, we have to do a try since that file could fail. When it does fail, you get a nice stack trace:

```
pub fn main() !void {
    const stdout = std.io.getStdOut().writer();
    const file = try cwd().openFile( "nonexistingfile.txt",
    .{ .read = true }, );
    defer file.close();
    var buffer: [1024]u8 = undefined;
    const size = try file.readAll(buffer[0..]);
    try stdout.writeAll(buffer[0..size]); }
// Thanks to Erik Engheim for the C++ and Zig sample code.
```

Perfectly valid code that displays no indication that anything failed. Zig, on the other hand, we have to do a try since that file could fail. When it does fail, you get a nice stack trace:
