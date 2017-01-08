/*!
 * html-tag <https://github.com/jonschlinkert/html-tag>
 *
 * Copyright (c) 2014-2015, 2017, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isObject = require('isobject');
var voidElements = require('void-elements');

module.exports = function(tag, attribs, text) {
  if (!isObject(attribs)) {
    text = attribs;
    attribs = {};
  }

  if (typeof text === 'undefined') {
    text = '';
  }

  if (typeof text !== 'string') {
    throw new TypeError('expected text to be a string');
  }

  var html = '<' + tag;
  for (var key in attribs) {
    var val = attribs[key];
    if (val === true) {
      html += ' ' + key;
    }
    if (typeof val === 'string') {
      html += ' ' + key + '="' + val + '"';
    }
  }

  if (voidElements.hasOwnProperty(tag)) {
    return html + '>' + text;
  }

  return html + '>' + text + '</' + tag + '>';
};
