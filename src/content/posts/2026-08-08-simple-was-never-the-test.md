---
title: "Simple Was Never the Test"
description: "A test is something you can fail — so the industry's favorite simple explanations of AI, the ones nothing can contradict, were never passing anything."
pubDate: 2026-08-08
column: "The AI Era, Read With Instruments"
weight: 2.6
draft: false
---

The sentence that got caught was six words and a squiggle, sat inside a parenthesis, and was written for a ten-year-old:

> *double the wall ≈ quadruple the scanning*

Wrong. Not vague, not rounded, not gently simplified. Wrong in the direction that gets worse the further out you go.

I had spent a long stretch writing an explanation of how a language model works — one picture, and no word the reader had to take on faith. A fast helper sits at a desk. Behind him, a wall of sticky notes.

He reads your question in one go, many eyes at once. Then he writes his answer one word at a time — glancing at every note on the wall before each word, then pinning up one more for the word he just wrote.

The rule I'd set at the front was that the words could get smaller, but the facts could not get wrong.

Then a fact-check pass reached that parenthesis, and the parenthesis lost.

Here's the check. Run it in your head.

The wall holds 100 notes. The next word costs 100 glances. Now the wall holds 200 notes. The next word costs 200 glances.

Double the wall, double the glances — per word written. That's a straight line. My sentence had promised a curve.

So where does *quadruple* actually live? One room away. When the helper reads your question, every word checks itself against every other: n words, n glances each, about n². Double the question and the reading work goes up fourfold. That's the famous quadratic — and it is true, of reading.

My parenthesis was standing in the writing room and had reached next door for its number.

The sting is how close it was. Start the wall empty and write out a whole answer of n words: the glances total 1 + 2 + 3 + … + n, roughly n²/2.

So a quadratic does live in this room too — in the whole-answer total, once the answer runs long compared to the question. It is not the one my sentence made, which was about what one more word costs.

**Wrong by being right about a different question.** That is the shape most confident errors have.

The repair changed one word and added two:

> *double the wall ≈ double the scanning per word*

The two added ones are what matter. They name which room the number is standing in.

Now the part I had wrong long before that parenthesis, which is why I'm writing any of this down.

I thought the risk in explaining something to a child was omission — that a small version of a true thing is always a slightly false thing, and losing something was the deal.

That was not the failure. The failure was a false quantitative claim, stated with confidence, in a parenthesis, next to a drawing of sticky notes.

The page hadn't failed because it was too small. It failed because it was exact enough to be checkable — and then didn't survive the check.

Everyone in this business can recite the test. *If you can't explain it simply, you don't understand it well enough.* It travels with Einstein's name on it, though nobody can point at where he wrote it.

Give it its full strength, because it earns most of it. Jargon is where people hide, and somebody who can only say a thing in the vocabulary usually cannot say it at all.

I believe that. I wrote a whole explainer on the strength of it.

But look at what the test actually grades. It grades whether the other person nods.

And here is the half that never travels with it: **simple isn't a test, because a test is something you can fail.**

My parenthesis could be failed. That's the only reason it got caught: a claim about how a cost scales, precise enough to be carried to the real machine and beaten by it.

That isn't the failure mode of simplifying. That's the success condition. The bar was never small words — it's whether the small version is still exact enough to lose.

Hold the industry's two favorite simple explanations of AI to it.

The first: *it's just autocomplete — it only predicts the next word.* Try to fail it. You can't. It names no quantity and no mechanism, so there is nothing for a fact to hit.

Push it into a form that could lose — that the machine kept what it read and answers from a copy — and it dies on contact. There is no copy in there.

But the spoken sentence never commits to that. It survives every conversation because it never bet anything. **It can't be wrong, which is exactly why it can't be right.**

The second: *it learns from you.* This one does bet, and you can go and look.

Take it as it's meant — that the machine you are talking to is changing because of you. While it talks, the dials holding everything it knows are frozen; nothing you say moves them. What changes is the wall of notes, and something outside decides what goes up.

One reading rescues it: your conversations may feed a training run months from now — a different machine, on a different day. Nobody hearing the sentence hears that.

It can be checked, it loses, and it gets said anyway — because it sounds simple, and simple has been accepted as its own credential.

That is what the dictum costs. It taught us to grade explanations by how easily they go down, and an explanation built to go down easily has nothing in it hard enough to break.

The version that got fact-checked and lost was doing more work than any smooth sentence in the room. It said something a machine could contradict. It got contradicted. It got fixed.

I can show you the exact spot where my explanation was wrong. Nobody can do that with *it's just autocomplete*. There is no spot.

*This came out of a fidelity pass I put finished pages through — read as if a stranger had written them, and corrected before I got to argue. The number in this one didn't survive.*
