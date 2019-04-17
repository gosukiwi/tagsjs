# tagsjs
Human-friendly API for building DOM elements in JavaScript.

# Usage

```javascript
const title = tag.h1("I'm a title!")
document.body.appendChild(title)

// or with jQuery
$('body').append(title)
// or
$(title).appendTo(document.body)

// you can pass a hash as first parameter with the attributes you want
tag.div({ class: "demo" }, function () {
  return tag.p("I'm inside a div!")
})

// data-attributes can be defined as such
tag.div({
  class: "some-class",
  data: {
    name: "a data attribute" 
  } 
}, "I have a class and a data-attribute!")


// you can give it another element
tag.div(tag.span("Hi!"))

// or an array of elements
tag.div([
  tag.span("Hello,"),
  tag.span("World!")
])

// you can also give it a function for more complex logic, whatever the
// function returns will be added to the element, be it a string, another DOM
// element, or an array
tag.div({ class: "another-demo" }, function () {
  return [
    tag.p("I'm inside a div!"),
    tag.p("Me too!"),
  ]
})

// or using modern JavaScript
tag.div({ class: "demo"}, () => {
  [1, 2, 3, 4, 5, 6].map((num) => tag.span(num))
})

// you can also define events by giving it a third argument
tag.button({ class: "button" }, "click me", {
  click: () => alert('clicked!')
})
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
