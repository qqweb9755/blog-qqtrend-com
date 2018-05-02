---
title: Mocha Testing Tip for async code
subTitle: Infinite loops!
cover: photo-1490474418585-ba9bad8fd0ea-cover.jpg
tags: mocha, testing, js, bash
author: darren
category: "developer"
---

Do you ever have a test fail just *sometimes*? If you are an experienced programmer, just the thought of it would have given you that drop of cold sweat, trickling down your backbone. Here is a recent example - I was altering a save function, that uses promises; changing it to do an atomic save. Simplified, my save() function started off something like this:

    return this.saveHelper(fname)

`saveHelper()` returns a promise that resolves to `true` on success.

I then changed it to:

    return this.saveHelper(tmpFname)
      .then(ret => {fs.rename(tmpFname, fname); return ret })

All my tests pass. Then 10 seconds later, they didn't. Cue: cold sweat.

Doh! `rename()` (in the excellent fs-extra module) is async. I was returning before the promise had resolved. The fix was this (i.e. pass through the real return value we are interested in):

    return this.saveHelper(tmpFname)
      .then(ret => fs.rename(tmpFname, fname).then(() => ret))

All my tests pass... but they did that before. How can I be sure I've fixed it?

What I do is use a bash infinite loop, to just run that particular test over and over:

     while ./node_modules/.bin/mocha --harmony test/mytest.js;do :; done

In my case the test takes less than half a second, so I let it run for 30 seconds, before using ctrl-c to break out. The nice thing about using `while`, is it will only stop if the test fails; otherwise it will just run forever. So you can start it running, go make a cup of tea, and if it is still running when you get back, chances are you fixed the bug.

(Depending on what you are doing, you may not need the --harmony flag, and you may need other flags to mocha.)

Naturally, you can also do this with your full test suite:

    while yarn test;do :; done

