---
title: "The Everyday Game Theory of E-Bikes"
meta_title: "The Everyday Game Theory of E-Bikes"
description: "On city streets, e-bikes occupy a curious position between cars and pedestrians, order and chaos. In Beijing, they can be the fastest option for trips within a few kilometers, and their growing numbers create all kinds of strategic encounters with the existing traffic system. Watching these games makes me think that AI still has a long way to go before it can imitate them."
date: 2025-12-01
image: "index.assets/banner.png"
categories: ["Reflections"]
author: "Liangbin"
tags: ["Reflections"]
summary: "On city streets, e-bikes occupy a curious position between cars and pedestrians, order and chaos. In Beijing, they can be the fastest option for trips within a few kilometers, and their growing numbers create all kinds of strategic encounters with the existing traffic system. Watching these games makes me think that AI still has a long way to go before it can imitate them."
math: false
draft: false

translationKey: "notes-ebike-gaming"
aliases: ["/writing/ebike-gaming/"]
---
A friend told me a lot of amusing stories about riding an e-bike. Since these stories came from my friend, any first-person account below refers to that friend.

![Gemini_Generated_Image_k5bk5sk5bk5sk5bk - 01](index.assets/Gemini_Generated_Image_k5bk5sk5bk5sk5bk%20-%2001.png)

## Cars vs. e-bikes

When you are driving a car, e-bikes have a way of making you feel completely helpless and furious.

You are driving along normally when an e-bike suddenly appears in front of you. Its speed and angle are so unexpected that you have to brake sharply. The passengers sway with the car and, without any coordination, offer the same warm greeting.

But even after swearing, you know it is pointless. There are so many e-bikes on the road that you could direct your anger at a different rider every time.

The irony is that you complain about e-bike riders breaking the rules only when you do not have one yourself. Once you own one, your thoughts in the same situation are bound to be:
"There is still a gap here. I can squeeze through."
"The car behind is still ten meters away. I can overtake the one ahead."

This is a typical **asymmetric game**: a car faces the high cost of a collision, while the e-bike's cost is framed as simply dusting oneself off and carrying on. The two participants therefore have different optimal strategies:
- **The car's best strategy tends toward yielding.**
- **The e-bike's best strategy tends toward taking the opening.**

## E-bikes vs. traffic lights

The cost of running a red light on an e-bike is almost zero. If there is no car ahead, the decision is often a single word: "Go."

Yet the game behind that "go" is something autonomous driving will not learn within five years. Here are a couple of examples:

1. Anticipatory red-light running:
   A delivery rider sees green turn to amber and predicts that the light will be red on arrival at the intersection. The rider presses ahead.
   The rider knows that all the cars will then be stopped, creating the safest window.
   The crossing traffic still needs at least two seconds to get a green light, then five more seconds to reach the conflict point. In those five seconds, the rider will already be fifty meters away.

   In each substate where "the light is about to turn red," the rider chooses the action that maximizes gain and minimizes risk: go.

2. Everyone waiting together:
   You arrive at an intersection with no cars nearby, yet every e-bike is obediently waiting at the red light, including the delivery riders. How do you play this game? You absolutely do not go: there must be a traffic officer ahead.

   This is a typical case of **Bayesian updating**:
   When you observe behavior that defies your expectations—e-bike riders voluntarily obeying the rules—you infer a hidden, high-risk condition at the intersection: a traffic officer.
   Your best strategy is therefore to wait.

## E-bikes vs. e-bikes

"Five minutes with the traffic, one minute against it."

You will inevitably see two e-bikes twitching face to face on the road. A rider traveling in the correct direction meets one coming the wrong way. Both are exceedingly polite and move left at the same time. Realizing that this does not work, they both switch to the right. They repeat the process, tracing a Z shape as though having spasms in the road.

This is a typical **coordination game**. Both riders want to give way, but neither knows which side the other will choose. Passing on either the left or the right would be a viable equilibrium; repeatedly choosing the wrong combination traps them in a brief **oscillating equilibrium**.

To an observer, it looks like twitching. In fact, both riders are iterating their **best responses**—just a little slowly.

## E-bikes vs. pedestrians

Unlike an encounter between two e-bikes, an encounter between an e-bike and a pedestrian often ends with the pedestrian waiting in place while the rider chooses a route.
This is a classic **sequential game**. Moving first exposes the pedestrian to greater risk, while the e-bike has a wider range of strategies: passing on the left, passing on the right, skimming past, or stopping momentarily.
Under this information structure, the pedestrian's best-response function is to remain still.
The e-bike has the **first-mover advantage**, ultimately determining how the path unfolds.

---
> Illustration prompt:
> Create a miniature city scene in the style of Zootopia 2. At an intersection, many electric scooters are waiting at a red light, and everyone is wearing a helmet. 8K resolution, 4:3 aspect ratio.
