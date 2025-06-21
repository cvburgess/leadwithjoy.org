---
layout: post.vto
tags:
  - planning
  - process
  - project
  - tools
type: playbook
title: Weighted Cost / Benefit Analysis
description: Organize the backlog with a technique that connects your technical debt and wealth to broader organizational goals so your team can get more done with less chaos
date: 2025-06-17
episodeId: 
videoId: 
draft: false
authors:
  - cvburgess
---
The longer a project exists, the longer its technical backlog gets. Littered with scraps of technical debt, dreams of technical wealth, and all the dependencies that have fallen behind, figuring out what to tackle and it what order can be a daunting task - especially if you need to justify those decisions to stakeholders or leadership teams.

Using a weighted cost benefit analysis to sort your backlog (and align it with organizational priorities) is a reliable and data-driven way to rally the team around a common goal and get more done.

> [!SUMMARY]
>
> - **What is it?**: A tool for managing a large technical backlog with competing (or changing) priorities
> - **When to use it?**: When you want to show your leaders that the technical roadmap is aligned with the current business objectives
> - **Schedule:**
>     - **Deep Clean**: 60-90m refinements to get the current backlog scored
>     - **Routine Grooming**: 30-60m each month for reviewing existing / refining new items
> - **Resources**: [Backlog Template - Google Sheets](https://docs.google.com/spreadsheets/d/1Ttr0hH_P4UGtsj0e338hewYAURizzX1HOp1oS2KfCHk/edit?usp=drive_web&ouid=106394523405700250728)
> - **Bonus Points** :Share read-only access broadly so team members and stakeholders alike can see how the technical backlog is evolving

## When to use a weighted backlog

If your team has more than a handful of technical debt / wealth items in your  backlog (and I know you do), the sooner the better!

- If the team is struggling to make a serious dent in its technical debt
- If the team has differing opinions on what "the most important thing" is
- If you are having a hard time communicating to leadership how technical debt / wealth tie into broader organizational goals / OKRs

If you have a small team that does not work in a changing environment, this tool is still useful but you may be able to [leverage other tools](#comparison%20to%20other%20tools).

## Origin story

Using a weighted cost benefit analysis to prioritize a backlog is not a new concept - project and product managers have been using this in their spreadsheet or database tool of choice to help drive roadmaps for *years*.

Once we start thinking of technical debt and technical wealth as a core part of our product roadmap, the thought of borrowing and tweaking tried-and-true product management tools is a no-brainer.

[preview](https://www.6sigma.us/six-sigma-in-focus/weighted-scoring-prioritization/)

## How it works

A cost benefit analysis is pretty standard in non-engineering settings. You may even have used one without knowing if you've ever made a big list of "pros" and "cons" before making a big decision.

This is a turbo-charged version of the classic "pros" and "cons" list where we try to assign numerical values to define roughly *how much benefit we get and for what cost*.
### Costs

The main buckets we can lump costs into are typically:

- **Effort**: The amount of work it will take to complete the item
- **Complexity**: The amount of teams / repos / files the work will impact
- **Uncertainty**: The amount of unknowns the team may encounter
- **Risk**: The amount of work that can be salvaged if the project is abandoned

#### Effort

The most obvious cost is the labor it will take to complete an item. You can measure this in hours, dollars, sprints, people, etc - the point is, we have a lot of tried and true methods we use for measuring effort. Pick what works best for your team.

**Some tips for scoring effort:**
- Measure as if one person (or a consistent number) worked on each item to avoid fluctuating numbers between items
- Avoid the temptation to use a granular / accurate metric like story points that implies the team will be held accountable for these estimates
- **Most common scale**: Hours, Days, Weeks, Months, Years

#### Complexity

There are a few different "axes" for complexity - consider files, repos, languages, teams, and any other "contexts" that may complicate the task.

Find the axes that apply to your team and be sure to agree as a group how many this task will involve.

**Common ways complexity can grow**:
- A front end task requires changes to the backend requiring either a full stack engineer or some assistance from a back end engineer to be completed
- A task needs input from a stakeholder, subject matter expert, or end user
- A task needs updates to or a completely new design
- A dependency update requires that a small change be made to a large number of files
- A breaking change will require coordination with another team
- A system update or migration will cause downtime that needs to be coordinated

Complexity matters because while doing the actual work might be within a team's control, if it requires another team, stakeholder, or coordination among repos... well, you could be waiting a while and there's not much you can do about it.

#### Uncertainty

Working with uncertainty is a given in technology - especially young or fast-moving companies like startups and new teams in larger organizations.

It is important for teams to talk about uncertainty and score it individually to prevent inflated effort figures. Some teams combine these but it often creates a long conversation around why folks padded their effort figures in different ways when we could instead score them separately and add them together later in a more consistent way.

Do your best to gauge uncertainty, but know that it is, by its very nature, an imperfect art.

[preview](https://www.theuncertaintyproject.org/tools/rumsfeld-matrix)

**A three point scale is often enough for scoring uncertainty**:
1. The team is **_very confident_** there will be no surprises
2. The team is **_hopeful_** there will be few surprises
3. The team is **_concerned_** there will be several surprises

#### Risk

Technical projects will *almost always* be pushed to the back burner if a project more critical to the organization's bottom line becomes a top priority. 

Knowing how much risk the team is absorbing can help engineers think of creative ways to break it apart and find more iterative, less risky approaches... or embrace the fact that you might need to roll the dice a bit.

One question you can ask to gauge how much risk is being absorbed is:

> If we get 80% done, but don't have the resources to finish, do we throw it all away?

Another way to frame this for the team might be:

> Can we ship this little by little and see the value as we go?

If the answer is "no" or "not really", as is often the case with dependency updates, then the item is high risk.

### Benefits

These should be driven largely by the product team and stakeholders and align with the goals and objectives (or OKRs) of the organization.

The key metrics and indicators for a B2B organization will likely differ from B2C and different markets and products will have different tradeoffs.

> [!NOTE] Every team should have its own unique benefits
> 
 > A user-facing mobile app team may care more about top-line metrics like revenue, conversion, and the ability to quickly deliver new features.
> 
> An internal team focused on building APIs and dashboards may instead focus on reliability, uptime, and performance.
> 
> Which "benefits" a team optimizes for should reflect their unique goals.

**Some example benefit themes:**
- **Growth**: User retention, conversion, analytics, NPS
- **Efficiency**: Productivity, velocity, shipping faster, reducing blockers
- **Profitability**: Revenue, cost savings, onboarding new users
- **Reliability**: Scalability, uptime, APM metrics
- **Quality**: Bugs caught, bugs reported, bugs per story / point
- **Performance**: Speed, bundle size, lighthouse score, CI/CD times

If the team is responsible for multiple domains - like mobile, web, APIs, integrations, emails, etc - those may make for great categories in addition to or instead of the cross-cutting ones above.

### Weights

Weights are factors that allow you to reprioritize the backlog without re-entering scores or data manually. Some rules to remember:

- Each weight should be between 0 and 100
- The sum of all weights for costs should equal 100
- The sum of all weights for benefits should equal 100


> [!TIP] Formula for weighting scores
> When applying weights, multiply them as percentages:
> 
> `weighted score = score * (weight / 100)`

### Scoring

When scoring, its important that the final weighted score for both benefits and costs is between 1 and 100.

For instance, if you take a weighted benefit of `80/100` and a cost of `20/100` you get a `60/100`.  If costs and benefits are on different scales it makes getting a final score  messier and less obvious for everyone following along.

The individual scores and scales for each cost and benefit can vary wildly from "yes / no", to t-shirt sizes, to 5-stars, or even counting the number of teams or customers impacted.

Whatever you use, find a way to give it a numeric value between 1 and 100.

> [!TIP] Formula for scaling scores to 100
> To achieve equally distributed final scores that range from 0-100, use:
> 
> `scaled score = (score - 1) / (max score - 1) * 100`

When the formula is applied to team-submitted scores, the following are calculations for commonly used scales:

- **2 point scale**:  `[0, 1] -> [0, 100]`
    - Yes / no
    - Thumbs up / thumbs down
- **3 point scale**: `[1, 2, 3] -> [0, 50, 100]`
    - Small / medium / large
    - High / medium / low
- **4 point scale**: `[1, 2, 3, 4] -> [0, 33, 67, 100]`
    - Known as a "forced-choice scale" because it has no midpoint
- **5 point scale**: `[1, 2, 3, 4, 5] -> [0, 25, 50, 75, 100]`
    - Star ratings
    - T-shirt sizes ( xs, sm, md, lg, xl )

Not sure where to start? Here are some sane "defaults" you can use when scoring costs with your team:

- **Effort**
    - 1 = hours
    - 2 = a day (or two)
    - 3 = days
    - 4 = weeks
    - 5 = months+
- **Complexity**
    - 1 = a file or two, no coordinated changes
    - 3 = multiple teams, roles, or repos to coordinate
- **Uncertainty**
    - 1 = well documented and understood
    - 3 = yolo! there *may* be dragons but the team doesn't know
- **Risk**
    - 1 = completely iterative / reusable / salvageable
    - 3 = all or nothing

## Comparison to other tools

Another commonly tool for backlog prioritization is the [impact / effort matrix](https://www.learnleansigma.com/guides/impact-effort-matrix/).

While the matrix may appear easier to get started with, there are a few reasons I don't love using it with technical backlogs:

1. Impact of items highly subjective and requires broad knowledge of the organization
    - We want to include as many engineers as we can (just like refinement of our product backlog), but less senior or tenured engineers may not have enough context to gauge impact
    - What is low impact? High impact? If every engineer is using a different "ruler" to score items you can end up with an inaccurate backlog
2. Impact of items is dependent on what is being built and by whom
    - **Example**: A UI component library will have minimal-or-no impact on API stories
3. Impact of items may change over time
    -  **Example**: Compliance items may have more impact once enterprise customers are onboarded
    -  **Example**: Upgrading a dependency may become less impactful if the organization decides to migrate to a new tool
4. Rescoring items is labor intensive
    - As the realities above occur, the team must rescore items and consider the business context of each item
    - As a team lead, you must constantly groom the entire backlog to ensure items are up to date

## Roadmapping

While this technique will yield a prioritized backlog, it rarely makes sense to work on items in a random order.

When reviewing the backlog it often makes sense to group similar items into "themes" to be worked on holistically. This can unlock some efficiency gains by doing similar tasks without context switching and also allow the team to "bundle" items with varying scores into something more cohesive and easy to sell.

For example if refactoring a testing strategy doesn't have a high score and a new UI library does, combining these so that as the UI is rewritten the tests are updated may yield... **_shivers_**... synergy.

## Running the playbook

Here's a step-by-step guide to running a weighted priority backlog grooming with your team.

### Key takeaways

- A spreadsheet or database with real-time rankings of technical backlog items
- An understanding of how each item in the backlog impacts the team and the organization

### Scheduling

The initial refinement of your team's backlog may take a while depending on its size. Chunk the backlog into smaller sessions and send out the list of items you intend to refine ahead of time so teams can review and research before the meeting, speeding it up significantly.

Once the backlog is fully groomed, consider a monthly or quarterly session to triage newly added items and review how updates weights re-ranked items.

Consider an initial 30m session to explain the process to the team and invite non-engineers who might be curious how scoring works and how the team is thinking.

- ⏰ 60-90m sessions until triaged; 30-60m a month after that
- 👩‍💻 Invite all engineers; consider inviting QA, product, and design as optional
- 🎤 Pointing poker tools can speed up the process for large teams

### Prep

Create the backlog ahead of the grooming session. You can always add or adjust weights after the meeting, but categories and scores should be ready.

1. Work with stakeholders to identify the costs and benefits your organization cares about
2. Using your tool of choice (Notion, Airtable, Google Sheets, etc) create a new table with these columns:
    - Item name
    - Item description
    - 1 column per benefit category for scoring 
    - 1 column per cost category for scoring
    - Final weighted score
    - Needs review ( items you want to revisit later )
    - **Optional**: Date created, date scored, and other metadata
3. Fill the backlog with item names and descriptions
4. Document each cost and benefit and how the team should score them

### Rules

Try to not let the team get too attached to or emotional about championing any one item - we are all (hopefully) passionate about the codebase and these items, but it is not a contest. Sometimes numbers can make it seem like one item is "better" or "worse" than another, but that is not what these scores mean.

- Agree as a team to do your best with the imperfect information available
- The scores are not set in stone and can always be revised
- The weighted scores are only used to help gauge priority but are not exact
- A negative score does not mean the item is not worth doing, it means it is an investment that needs to be considered

### Review weights

Meet with stakeholders before the call and allow them to divvy up the 100 points among the benefits any way they see fit, ensuring the final total is exactly 100.

When kicking off a meeting with the team, share what has changed in the weights since the last meeting and offer any available context as to why the weights changes.

Keep this section to < 5m whenever possible. If there is a big shift in the organization's priorities, you may want to address that in another forum proactively so there are no surprises here.

### Score items

1. Go in order from top to bottom and "pitch" each item by sharing its name, description, and opening the floor for clarifying questions
2. Start scoring the benefits, then move on to costs
3. Remind the team of the scale for each benefit or cost before voting
4. Use a pointing poker tool (or a show of hands with small teams) to find the average score
5. If a large difference in scores arises, discuss it until there is some consensus
6. Continue with the next item until all items are scored

> [!TIP] Keep things on track
> It can be easy for the team to get into the weeds on these items.
> 
> Make it clear before the meeting starts that you intend to use a timer to keep everyone focused and that you can revisit items later that need more discussion.
> 
> **~5m per item should be enough for initial triage**.
> 
> Asking folks to review items *before* the meeting can also help you power through a long backlog, quickly.

### Resources

- [Backlog Template - Google Sheets](https://docs.google.com/spreadsheets/d/1Ttr0hH_P4UGtsj0e338hewYAURizzX1HOp1oS2KfCHk/edit?usp=drive_web&ouid=106394523405700250728)