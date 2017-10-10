# components

Generic set of responsive React components intended to provide a consistent starting point when using in an application.

## TL;DR

// TODO

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

Over the past few months I've come to appreciate using a design/style guide in my projects and have spent considerable time evaluating modern CSS solutions and for now, have settled on [`glamorous`](https://github.com/paypal/glamorous).  With this in mind, my goals for this repo are:

- enable the consumer of this module to build **complex**, **responsive** views by composing together the relatively simple components provided here
- **reduce repetition** by making these components reusable and able to be styled dynamically
- a single page to be used as a bare bones style guide, for quick, distraction-free reference (a minimal [`storybook`](https://github.com/storybooks/storybook))

## TODO

- [ ] Decide on API for passing style props
- [ ] release `propStyles` utility as a separate package
- [ ] figure out how to properly use a higher order component | render prop component to reduce 'song and dance'

## Dependencies

- [`glamor`](https://github.com/threepointone/glamor)
- [`glamorous`](https://github.com/paypal/glamorous)
- [`styled-system`](https://github.com/jxnblk/styled-system/)

## Installation

**NOTE: this package has not yet been puvblished to NPM.**
This module is distributed via [npm](https://npm.com) and should be installed as a `dependency`:

```
yarn add components
```

## Usage

// TODO

## Components

### Box

// TODO

### Button

// TODO

### Flex

// TODO

### Text

// TODO

### Modal

// TODO

### Sidebar

// TODO

### Loading

// TODO

### Nav

// TODO

### Error Boundary

// TODO

### Header

Looking at the example below (note that currently this snippet is HTML used to guide the implementation in React), a `Header` component is the composition of primitives:

```html
<!-- https://teamtreehouse.com/community/what-is-the-difference-between-header-and-h1 -->
<header>
  <img src="images/logo.png" alt="Logo">
  <nav>
    <ul>
      <li><a href="page-1.html">Page 1</a></li>
      <li><a href="page-2.html">Page 2</a></li>
      <li><a href="page-3.html">Page 3</a></li>
    </ul>
  </nav>
</header>
```

## Examples

In this section there are a few recipes to compose components provided in this module.

// TODO

## Other Solutions

- [storybook](https://github.com/storybooks/storybook)
- [react-styleguidist](https://github.com/styleguidist/react-styleguidist)
- [react-cosmos](https://github.com/react-cosmos/react-cosmos)

## Inspiration

- [James Long's](https://github.com/jlongster) recent livestreams
- [Tachyons](http://github.com/tachyons-css/tachyons/)

## LICENSE

AGPLv3
