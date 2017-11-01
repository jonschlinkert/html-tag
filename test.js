/*!
 * html-tag <https://github.com/jonschlinkert/html-tag>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

require('mocha');
var assert = require('assert');
var tag = require('./');

describe('html tag', function() {
  it('should create an element with a closing tag', function() {
    assert.equal(tag('strong', 'Hello world!'), '<strong>Hello world!</strong>');
  });

  it('should create an element with a closing tag and no text', function() {
    assert.equal(tag('a', {id: 'anchor'}), '<a id="anchor"></a>');
  });

  it('should create an element with a closing tag and no text or attributes', function() {
    assert.equal(tag('a'), '<a></a>');
  });

  it('should create an element with a closing tag and attributes', function() {
    var actual = tag('a', {href: 'https://sellside.com'}, 'Sellside');
    assert.equal(actual, '<a href="https://sellside.com">Sellside</a>');
  });

  it('should create an element with a closing tag and multiple attributes', function() {
    var actual = tag('a', {href: 'https://sellside.com', title: 'Sellside'}, 'Sellside');
    assert.equal(actual, '<a href="https://sellside.com" title="Sellside">Sellside</a>');
  });

  it('should support boolean attrubues', function() {
    assert.equal(tag('details', {open: true}), '<details open></details>');
    assert.equal(tag('details', {open: false}), '<details></details>');
  });

  it('should create a void element with no attributes', function() {
    assert.equal(tag('br'), '<br>');
    assert.equal(tag('hr'), '<hr>');
  });

  it('should add text after a void element', function() {
    assert.equal(tag('br', 'foo'), '<br>foo');
  });

  it('should create a void element with attributes', function() {
    assert.equal(tag('img', {src: 'foo.jpg'}), '<img src="foo.jpg">');
  });

  it('should create a void element with multiple attributes', function() {
    assert.equal(tag('link', {rel: 'stylesheet', href: 'styles.css'}), '<link rel="stylesheet" href="styles.css">');
  });

  it('should force a custom void element', function() {
    assert.equal(tag('P', 'This is random text...', false), '<P>This is random text...');
    assert.equal(tag('P', false), '<P>');
  });

  it('should create an empty text node and a closing tag', function() {
    assert.equal(tag('a', {href: 'foo.html'}), '<a href="foo.html"></a>');
  });

  it('should throw an error when text is defined but not a string', function() {
    assert.throws(function() {
      tag('a', {href: 'foo.html'}, []);
    });

    assert.throws(function() {
      tag('a', {href: 'foo.html'}, {});
    });

    assert.throws(function() {
      tag('a', {href: 'foo.html'}, true);
    });
  });
});
