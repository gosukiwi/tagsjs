# jstags
Human-friendly API for building DOM elements in JavaScript.

Usage:

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
