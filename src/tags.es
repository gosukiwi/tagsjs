(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory)
  } else if (typeof exports === 'object') {
    // Node, CommonJS-like
    module.exports = factory()
  } else {
    window.tag = factory()
  }
}(function () {
  const jstags = {
    _createElement: function (tag, attributes, content) {
      if (typeof attributes === 'string') {
        content = attributes
      }

      const element = document.createElement(tag)
      this._setElementContents(content, element)
      this._setElementAttributes(attributes, element)
      return element
    },

    _setElementAttributes: function (attributes, element, prefix = '') {
      if (typeof attributes !== 'object') return

      Object.keys(attributes).forEach((key) => {
        const value = attributes[key]
        if (typeof value === 'object') {
          const prefix = `${key}-`
          this._setElementAttributes(value, element, prefix)
        } else {
          element.setAttribute(`${prefix}${key}`, attributes[key])
        }
      })
    },

    _setElementContents: function (content, element) {
      if (!content) return

      if (typeof content === 'function') {
        content = content()
      }

      if (typeof content === 'string') {
        element.textContent = content
      } else if (typeof content === 'object') {
        if (Array.isArray(content)) {
          content.forEach((c) => this._setElementContents(c, element))
        } else {
          element.appendChild(content)
        }
      }
    }
  }

  const AVAILABLE_TAGS = [
    'a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside',
    'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'big', 'blockquote', 'body',
    'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col',
    'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog',
    'dir', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure',
    'font', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5',
    'h6', 'head', 'header', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins',
    'kbd', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'meta',
    'meter', 'nav', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option',
    'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby',
    's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span',
    'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody',
    'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr',
    'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr'
  ]

  AVAILABLE_TAGS.forEach((tag) => {
    jstags[tag] = function (attributes, content) {
      return this._createElement(tag, attributes, content)
    }
  })

  return jstags
}))
