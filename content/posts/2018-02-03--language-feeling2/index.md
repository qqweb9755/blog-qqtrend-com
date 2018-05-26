---
title: How language can feel wrong (#2)
subTitle: Introducing an open data project
cover: photo-1465070845512-2b2dbdc6df66-cover.jpg
category: "main"
author: darren
tags: nlp, ai, opendata, opensource
---

In the [previous part](/language-feeling) I introduced the idea that one of our brain's most fundamental language skills is the way it *knows* what is correct and what is not. It just does this intuitively: in contrast, telling you why something is correct or not is a skill learned at school.

That previous article was all about playing with psycholinguistics. This one is where we roll our collective sleeves up and see if we can use this idea to save the universe. (In our own small way.)

## I'm Feeling 54% Uncomfortable

Wouldn't it be great if our word processor could go beyond highlighting our *`dubiuos speeling`*, and give us feedback on grammar and stylistic issues, too? Well, yes, it would be great, and of course there are already some tools to do this. We all mistakes, though because our human brains are already really good at this, a proof-read catches most of them.

However the usefulness of such a tool/algorithm/function/machine-learning model/AI - whatever you want to call it - goes beyond just helping you write.

For instance, OCR (extracting text from scans of documents). If it returns "The they're is packed tonight.", all the individual words are in our dictionary and looking good, but our AI could then read it, and inform us that sentence is making its teeth stand on edge, at the level of 0.54. The OCR software could then re-analyze that sentence in some way (return its 2nd choice, or try a sharpness filter on the original image, etc., etc.) and return "The theatre is packed tonight." Ooh, squeals our AI, in delight, I'm only getting a 0.02 from that.

How would it be used in machine translation? Well the latest neural machine translation (NMT) models to generate text have these two characteristics:

* no human-coded grammar rules
* a stochastic element

The first point means it can sometimes generate gibberish, the second means if you ask it again you can get a different sentence. So you could keep requesting translations until we get below a threshold for naturalness.

The final motivating example I want to mention is one that I think is easily over-looked. We can use this tool to improve the training data that we are giving to our NLP models. The bigger the data the better the models, but big data might mean a corpus of a billion words, harvested from the Internet,and written by people who didn't stop to proof-read. Our poor-overworked native speaker checker will never have time to check the whole corpus. But if our tool went through and scored them for us, it could pull just the most suspicious 1%. Or 0.1%. Any mistakes get (manually) fixed and *all* our NLP models get slightly better.

## What We Need First

We, at QQ Trend, feel there is a big gap in the available training data for creating this kind of model, so we are setting up and sponsoring an open source (open data) project to build a corpus of good *and bad* examples. It is the bad examples we feel are missing.

Without this, we have to assume all the training data we have is correct, and assume that any other possible combination of words is incorrect. It is not a terrible approach; but even with a relatively small corpus the first assumption will be wrong sometimes, and even with a multi-billion word corpus, the second assumption is never going to be true.

In particular, what we feel is missing are artificial examples that demonstrate common mistakes and corner cases, that might not come up so cleanly in more realistic sources.

Initially our sponsorship entails donating 100hrs to the project. Mostly this will be used to have human experts create the examples.

We are going to concentrate most of our effort on Japanese. But we are very keen to encourage people to contribute data for other languages, even English (!), and will give what support we can.

The data is of two types. Both are plain text, one example per line. The first type is just a collection of mistakes, with no further information. The second type uses a variation of our MT templating system (TODO: insert a link to a full description), where good/bad alternatives are colon-separated between curly brackets. The first one is correct, the others are incorrect. You can leave an option blank. Some English examples:

* `I {broke:breaked} the teapot.`
* `{My:Me:Mine} Mum said it was fine.`
* `I {broke:breaked} {my:me:the:a} Mum's teapot.`

On the one hand this is not too complicated for whoever is generating content. But on the other is is very powerful. For instance the 3rd example can be used to generate one correct sentence and seven incorrect ones. When combined with the full power of the MT templating system, a single sentence can generate hundreds of examples.

The license will be either [CC0](https://creativecommons.org/publicdomain/zero/1.0/) or [CC-BY](https://creativecommons.org/licenses/by/4.0/), the intention being that there are no restrictions on use. The only reason to prefer CC-BY over CC0 is to allow contributions from existing CC-BY corpora. This is open for discussion; initially it will be CC0. Any tools and other software will be MIT license, for the same reasons.

## Next Steps

We've been slowly working on this internally for a few months now. This blog post will be updated with repository details once we go live, but if you want to get involved, or know of similar data sources, leave a comment or send us an email.

