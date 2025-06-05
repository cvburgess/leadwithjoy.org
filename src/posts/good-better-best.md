---
layout: post.vto
tags:
  - process
  - tools
  - planning
type: playbook
title: Good Better Best
description: The Good Better Best method allows teams to break down ideas quickly and identify the most impactful milestones given existing deadlines and constraints
date: 2025-05-17
episodeId:
draft: false
authors:
  - cvburgess
---

When given an epic, feature, task, or other ambiguous unit of work, it is often
up to teams to break that work down and find the optimal path to delivery.

The Good/Better/Best method allows teams to break down ideas quickly and
identify the most impactful milestones given existing deadlines and constraints.

> [!SUMMARY]
>
> - **Good ( MVP )**: "What is the literal least we can do?"
> - **Better ( Stretch Goals )**: "What are the 'low hanging fruit' that will
>   wow users?"
> - **Best ( Dream Big )**: "What would we build with unlimited time and money?"
>
> ---
>
> - Invite engineers, designers, product, and any other key decision makers
> - Schedule two sessions, 60m + 30m
>   - **Session 1**: Best + Good
>   - **Session 2**: Better ( after allowing time for research )

## Good

When breaking work down it is critical to know what the least you can do is,
genuinely and still call the delivery a success. This is often referred to as
the minimum viable product or "MVP". The question the team should answer is:

> What is the literal least we can do?

This is where deadlines, expectations, and other constraints should be surfaced
so all team members and stakeholders are working with the same finish line in
mind.

It is also a good idea to surface non-constraints that people may make incorrect
assumptions about, especially if you are a newer team in a larger organization
and there isn't a clear precedent for what you are building.

Some examples of things that may surface in a Good session:

- **Do** need to use the existing payment processor
- **Do not** need to roll out the the US and EU at the same time
- **Do** need to use only pre-approved tools and vendors
- **Do not** need to follow the internal design spec, but preferred
- **Do** need to meet a Q2 deadline for an investors presentation
- **Do not** need to make it available to all customers until Q4

## Better

There will likely be a wide chasm between "what is the literal least we can do?"
and "what would we do if we had unlimited time and money?" - or at least, there
should be. Naturally, the question that helps bridge those is:

> What are the 'low hanging fruit' that will wow users?

This is the perfect time for teams to break off, research or "spike" various
ideas and tools, and return to the group with an analysis of what items may be
easy enough to implement without risking timelines.

Some things the team may encounter when researching:

- Tools and libraries the team is using include some desired functionality "for
  free"
- There are existing proprietary solutions that can be purchased
- There are internal teams or individuals with expertise that can be leveraged
- There are open source libraries that can add functionality or polish like
  - Animation and effects
  - Performance optimization
  - Customization like theming, sorting, filtering, and searching
- Dead ends that did not pan out
  - Libraries that are unmaintained or incompatible with your tools
  - Performance issues or other bugs in tools that may frustrate users
  - Limitations to internal tools or roadmaps and timelines that won't pan out

Anything discovered in the Better exercise should be shared with the group and
documented somewhere. Ideally, for accepted ideas, log them on the main tickets
they apply to (or new tickets where appropriate) and clearly label them as
"stretch goals" to make it clear that they should not be tracked as a key
deliverable for MVP.

Once MVP is delivered, if your organization gives you the opportunity to
continue working on the project you can keep pulling tickets from this pile to
enhance the project with minimal impact.

## Best

Often times everyone from stakeholders to engineers have big ideas on where the
product can go next and what would create a truly noteworthy experience. The
Best exercise creates time and space for everyone to collaborate on and get
excited about the future.

Try to "yes and" as much as possible - **there are no wrong ideas in this
phase.**

The team should leave this session having thoroughly explored:

> What would we build with unlimited time and money?

Some questions to help kick off a Best session:

- "What would we build if we had unlimited time/money/energy?"
- "What would make our customers lose their minds?"
- "What would it look like to incorporate AI into this feature?"

Using a whiteboard tool here can be very helpful so everyone can quickly add
ideas and combine duplicates as they are reviewed. Save a copy of this as a
reference or iterate on it as the team moves throughout the session.

Avoid the temptation to log all these ideas into your project management tool of
choice. Many of these ideas can and should be tossed aside and gather dust and
you don't need more clutter in your project management tool - I'd bet money on
that.

## Running the Playbook

Here's a step-by-step guide to running a Good, Better, Best session with your
team.

### Key takeaways

Once complete, you should have the following tangible artifacts:

- **Good**: A clear, documented and approved **scope** for MVP
- **Better**: A list of **stretch goals** that may impress users with minimal
  impact
- **Best**: A wide-ranging **brain dump** of ideas that may eventually be
  implemented

### Ideal order

When running a team through a Good Better Best exercise, the order can have a
serious impact on how valuable the conversation and key takeaways are.

1. **Best ( Dream Big )**: "What would we build with unlimited time and money?"
2. **Good ( MVP )**: "What is the literal least we can do?"
3. **Better ( Stretch Goals )**: "What are the 'low hanging fruit' that will wow
   users?"

### Scheduling

It is best to break this meeting into two sessions: one for Best + Good, and a
follow up session for Better once everyone has had an opportunity to do some
research.

**Session 1: Best + Good**

- ⏰ ~60m (30m + 30m)
- 👩‍💻 All stakeholders, especially product (or anyone with scoping authority)
- 🔑 "What is the literal least we can do?"
- 🔑 "What would we build with unlimited time and money?"

**Session 2: Better**

- ⏰ ~30m, at least 1h after the first session
- 👩‍💻 Design, engineering, and anyone contributing to the work effort
- 🔑 "What are the 'low hanging fruit' that will wow users?"

### Start with "Best"

Starting with Best allows the team to space to dream big and get all their ideas
out there in the open.

When let everyone share their ideas they feel seen, heard, and are often far
more comfortable compromising in the following sessions. Often times the
constraints in later sessions may be more flexible than anticipated if an idea
captures the attention of the stakeholders that set the constraints.

- **Do** allow both technical and non technical stakeholders to share ideas
- **Do** set a timer to keep the session from lasting forever
- **Do** ensure as many voices as possible are heard
- **Do** use a whiteboard, kanban board, or other collaborative tool
- **Do not** bring in deadlines or other constraints yet, the sky is the limit

### Ground with "Good"

Once all the ideas, large and small, are out in the open, the team can take a
step back and discuss the constraints the team will face while building.

These constraints will create a shared "yardstick" that the team can measure
ideas against and determine what there genuinely is or should be capacity for.

- **Do** have stakeholders share constraints
  - Deadlines and key dates
  - Out of office time, vacations, holidays, etc
  - Other projects and commitments consuming capacity
  - Budgets, policies, and other organizational controls
- **Do** write those constraints down clearly somewhere everyone can see
- **Do** discuss and document what the minimum viable deliverable is
- **Do** get agreement from stakeholders and the team and log the key decision
- **Do** use a whiteboard, kanban board, or other collaborative tool
- **Do not** expand scope beyond what is absolutely critical
  - No stretch goals, freebies, or quick wins

### Research "Better"

Have the team break for at least an hour with these two goal posts clearly
defined and shared: MVP (Good) and the end goal (Best). Use that time to
research items that are included in Best but missing from Good or stepping
stones that might get the team closer to the end goal.

Once the team is ready, hold the second session as a group to discuss findings.

- **Do** share any "low hanging fruit" that was researched
  - Quick wins that can be completed in less than a day
  - Freebies that are provided by existing libraries and tools
  - Tools available via the open source community or proprietary solutions
- **Do** share which items turned out to be more involved than expects
  - Document these "traps" somewhere for future note
- **Do** decide as a team if and when any of the discoveries should be included
- **Do** clearly label these distinctly from the MVP work where possible
- **Do not** commit the team to anything from the Better bucket until Good is
  delivered
