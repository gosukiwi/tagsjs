# tagsjs
Human-friendly API for building DOM elements in JavaScript.

# Usage

```javascript
const title = tag.h1("I'm a title!")

const someDiv = tag.div({ class: "some-class", data: { name: "a data attribute" } }, "I have a class and a data-attribute!")

tag.div({ class: "demo"}, function () {
  return tag.p("I'm inside a div!")
})

tag.div({ class: "another-demo"}, function () {
  return [
    tag.p("I'm inside a div!"),
    tag.p("Me too!"),
  ]
})

// Or using modern JavaScript

tag.div({ class: "demo"}, () => [
    tag.p("I'm inside a div!"),
    tag.p("Me too!")
])
```

# Installation
With npm:

    npm install tagsjs

With yarn:

    yarn add tagsjs

Rails:

    TODO

Manual:

Just drop the `dist/tags.js` file somewhere in your project's `vendor` folder
and include it in your page like any other file.

`tags.js` uses
[UMD](https://www.davidbcalhoun.com/2014/what-is-amd-commonjs-and-umd/), so you
can use it  with AMD module definitions as well as CommonJS. If none is
available it defaults  to browser globals.

# Developing
Use `npm run build` for compiling `src/tags.es` into `dist/tags.js`. You'll need
to run `npm install` first.
