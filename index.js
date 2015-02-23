/*!
 * html-tag <https://github.com/jonschlinkert/html-tag>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/**
 * Expose `tag`
 */

module.exports = tag;

/**
 * ## tag( name, attrs, text )
 *
 * Create a snippet of HTML.
 *
 * **Examples:**
 *
 * ```js
 * tag('a', {href: 'http://www.google.com'}, 'Google');
 * tag('img', {src: 'foo.jpg'});
 * ```
 *
 * yields:
 *
 * ```html
 * <a href="http://www.google.com">Google</a>
 * <img src="foo.jpg">
 * ```
 *
 * @param {String} `tag` The tag to create.
 * @param {Object} `attrs` Optional attributes
 * @param {String} `text` Optional text
 * @return {String} HTML
 * @api public
 */

function tag(tag, attrs, text) {
  var html = '<' + tag;

  for (var i in attrs) {
    if (attrs[i]) html += ' ' + i + '="' + attrs[i] + '"';
  }

  if (typeof text === 'boolean' && text === true) {
    html += '></' + tag + '>';
    return html;
  }

  html += text ? '>' + text + '</' + tag + '>' : '>';
  return html;
}