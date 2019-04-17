"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
    // Node, CommonJS-like
    module.exports = factory();
  } else {
    window.tag = factory();
  }
})(function () {
  var jstags = {
    _createElement: function _createElement(tag, attributes, content, events) {
      var element = document.createElement(tag);

      this._setElementAttributes(attributes, element);

      this._setElementContents(content, element);

      this._setElementEvents(events, element);

      return element;
    },
    _setElementAttributes: function _setElementAttributes(attributes, element) {
      var _this = this;

      var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      if (_typeof(attributes) !== 'object') return;
      Object.keys(attributes).forEach(function (key) {
        var value = attributes[key];

        if (_typeof(value) === 'object') {
          var _prefix = "".concat(key, "-");

          _this._setElementAttributes(value, element, _prefix);
        } else {
          element.setAttribute("".concat(prefix).concat(key), attributes[key]);
        }
      });
    },
    _setElementContents: function _setElementContents(content, element) {
      var _this2 = this;

      if (!content) return;

      if (typeof content === 'function') {
        content = content();
      }

      if (typeof content === 'string') {
        element.innerHTML = content;
      } else if (_typeof(content) === 'object') {
        if (Array.isArray(content)) {
          content.forEach(function (c) {
            return _this2._setElementContents(c, element);
          });
        } else {
          element.appendChild(content);
        }
      }
    },
    _setElementEvents: function _setElementEvents(events, element) {
      if (!events) return;
      Object.keys(events).forEach(function (name) {
        element.addEventListener(name, events[name]);
      });
    }
  };
  var AVAILABLE_TAGS = ['a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'meta', 'meter', 'nav', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr'];
  AVAILABLE_TAGS.forEach(function (tag) {
    jstags[tag] = function (attributes, content, events) {
      if (typeof content === 'undefined') {
        // when calling with a single argument
        content = attributes;
        attributes = undefined;
      }

      return this._createElement(tag, attributes, content, events);
    };
  });
  return jstags;
});