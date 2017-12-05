# components

[WIP]Lightweight style guide and component collection for building complex, responsive React components.

## Table of Contents
- [Why?](#why)
- [TODO](#todo)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Examples](#examples)
- [Other Solutions](#other-solutions)
- [Inspiration](#inspiration)
- [LICENSE](#license)

## Why?

**NOTE: Do not use this in production.  It is primarily intended for my personal use in demos and prototypes.  Perhaps in the future tests will be added to make it production ready.**

Over the past few months I've come to appreciate using a design/style guide in my projects and have spent considerable time evaluating modern CSS solutions and for now, have settled on [`glamorous`](https://github.com/paypal/glamorous).  With this in mind, my goals for this repo are:

- enable the consumer to build **complex**, **responsive** views by composing together these primitive components
- make it easy to have **consistant** UI components
- **reduce repetition and code duplication** by making these components reusable and able to be styled dynamically **during usage**
- a single page style/design guide, for quick, distraction-free reference (a minimal [`storybook`](https://github.com/storybooks/storybook))

As a quick aside, [Mars Julian](https://twitter.com/marsjosephine) gave a fantastic talk on [reusable UI components](https://www.youtube.com/watch?v=rMFI1HtuFv4) which helped clarify some of the ideas here.  Reusable UI components should satisfy the following high level requirements:

- self-sufficiency
  - data-agnostic: let the parent handle the validation of the shape of our data
  - enough state to be useful
  - state initialization: allow parent to programmatically initialize child component in specific state (controled vs. uncontrolled).
- easy to integrate with or into other components
  - self-documenting: use `prop-types`, `flow`,  whatever. **Specify what prop types the component expects.** The point is to make the consumer's job of integrating as seamless and easy as possible.
  - **fill the container element**
  - **be explicit** about which props are required to have the component work as expected.
  - remove backdoors into the reusable component
## Dependencies

- [`glamor`](https://github.com/threepointone/glamor)
- [`glamorous`](https://github.com/paypal/glamorous)

## Installation

**NOTE: this package has not yet been published to NPM.**
This module is distributed via [npm](https://npm.com) and should be installed as a `dependency`:

```
yarn add components
```

## Usage

// TODO

## Examples

In this section there are a few recipes to compose components provided in this module.

// TODO -->

## TODO

- [ ] Complete `Avatar` + `Presence`
- [ ] figure out how to properly use a higher order component | render prop component to reduce 'song and dance'
- [x] **PRIORITY** Build simple container to render a component so that we can show usage examples
- [x] Decide on API for passing style props
- [x] release `propStyles` utility as a separate package

## Inspiration

- [James Long's](https://github.com/jlongster) recent livestreams
- [Mars Julian's](https://speakerd.s3.amazonaws.com/presentations/91fb936361b14e0391d5098cc2e2a7ab/2017.09.07_React_plus_X_.pdf) NordicJS talk 'Best Practices for Reusable UI Components'
- [Brent Jackson](https://twitter.com/jxnblk)
- [Tachyons](http://github.com/tachyons-css/tachyons/)

## Other Solutions

- [storybook](https://github.com/storybooks/storybook)
- [react-styleguidist](https://github.com/styleguidist/react-styleguidist)
- [react-cosmos](https://github.com/react-cosmos/react-cosmos)

## LICENSE

AGPLv3
