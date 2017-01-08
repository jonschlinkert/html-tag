/*!
 * html-tag <https://github.com/jonschlinkert/html-tag>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

require('mocha');
var assert = require('assert');
var toHtml = require('./');

describe('html tag', function() {
  it('should create an element with a closing tag', function() {
    assert.equal(toHtml('strong', 'Hello world!'), '<strong>Hello world!</strong>');
  });

  it('should create an element with a closing tag and no text', function() {
    assert.equal(toHtml('a', {id: 'anchor'}), '<a id="anchor"></a>');
  });

  it('should create an element with a closing tag and no text or attributes', function() {
    assert.equal(toHtml('a'), '<a></a>');
  });

  it('should create an element with a closing tag and attributes', function() {
    var actual = toHtml('a', {href: 'https://sellside.com'}, 'Sellside');
    assert.equal(actual, '<a href="https://sellside.com">Sellside</a>');
  });

  it('should create an element with a closing tag and multiple attributes', function() {
    var actual = toHtml('a', {href: 'https://sellside.com', title: 'Sellside'}, 'Sellside');
    assert.equal(actual, '<a href="https://sellside.com" title="Sellside">Sellside</a>');
  });

  it('should support boolean attrubues', function() {
    assert.equal(toHtml('details', {open: true}), '<details open></details>');
    assert.equal(toHtml('details', {open: false}), '<details></details>');
  });

  it('should create a void element with no attributes', function() {
    assert.equal(toHtml('br'), '<br>');
    assert.equal(toHtml('hr'), '<hr>');
  });

  it('should add text after a void element', function() {
    assert.equal(toHtml('br', 'foo'), '<br>foo');
  });

  it('should create a void element with attributes', function() {
    assert.equal(toHtml('img', {src: 'foo.jpg'}), '<img src="foo.jpg">');
  });

  it('should create a void element with multiple attributes', function() {
    assert.equal(toHtml('link', {rel: 'stylesheet', href: 'styles.css'}), '<link rel="stylesheet" href="styles.css">');
  });

  it('should create an empty text node and a closing tag', function() {
    assert.equal(toHtml('a', {href: 'foo.html'}), '<a href="foo.html"></a>');
  });

  it('should throw an error when text is defined but not a string', function() {
    assert.throws(function() {
      toHtml('a', {href: 'foo.html'}, []);
    }, /expected text to be a string/);

    assert.throws(function() {
      toHtml('a', {href: 'foo.html'}, {});
    }, /expected text to be a string/);

    assert.throws(function() {
      toHtml('a', {href: 'foo.html'}, true);
    }, /expected text to be a string/);
  });
});
