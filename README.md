# Exploiting Zenbleed from Chrome
This repository contains a proof-of-concept for exploiting Zenbleed from Chrome using a V8 vulnerability which enbles arbitrary code execution in the renderer process.

The target Chrome version is 114.0.5735.90 on Linux.
The vulnerability exploited in CVE-2023-3079.

The proof-of-concept largely builds on the efforts of @mistymntncop and @taviso.

See Tavis Ormandy's [Zenbleed blog post](https://lock.cmpxchg8b.com/zenbleed.html) for details about Zenbleed.
See @mistymntncop's [proof-of-concept V8 exploit](https://github.com/mistymntncop/CVE-2023-3079/blob/main/exploit.js) for the V8 vulnerability details.

