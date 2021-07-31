# Term
A simple library for manipulating the terminal.

## Features
*   Allows you to deal with Unicode escape characters more easily.
*   Offers a very simple an efficient API with minimal abstraction.
*   Includes information on every function and constant through JSDoc comments.

## Supported features from the standards
*   All ASCII Control characters such as `BEL`, `LF`, and `ESC`.
*   All Fe Escape sequences such as `ESC N`, `ESC [`, and `ESC \`.
*   All Control Sequence Introducer sequences such as `ESC [ ? A`,
    `ESC [ ? ; ? H`, and `ESC [ ? m`.

## Unsupported features from the standards
*   Select Graphic Rendition 38 and 48 alternative version (colon-separated)
    as per ISO 8613-6.
    It's hardly ever used and overly complicated.
*   Operating System Command sequences.
*   Fs, Fp, and nF Escape sequences.
    (The control characters for these are defined, but there are no functions
    for using them more easily.)

Non-ANSI-complient terminals, such as the Windows Command Prompt from version
before 10.1511, are not supported; that includes Windows 7, and 8.
Additionally, not all features may work the same way on all systems/terminals,
due to implementation inconsistencies and deviations from the standards.

If you have a legitamite use for any of these features,
[open an Issue](https://github.com/Micha-ohne-el/deno-term/issues)
and I'll see if I can implement it. The main challenge with these is finding
documentation on them.
Alternatively, of course, you can also do the work yourself and
[submit a Pull Request](https://github.com/Micha-ohne-el/deno-term/pulls) :)
