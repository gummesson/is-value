# is-value

[![NPM version][npm-img]][npm-url]
[![License][license-img]][license-url]
[![Build status][travis-img]][travis-url]

Check if a value exists.

## Installation

```
npm install is-value
```

## Usage

``` javascript
var isValue = require('is-value')

isValue(true)      //=> true
isValue(false)     //=> true
isValue(null)      //=> false
isValue(undefined) //=> false
```

## API

### isValue(value) -> Boolean

Check if a value exists.

## License

[MIT][license-url]

[npm-img]: https://img.shields.io/npm/v/is-value.svg?style=flat-square
[npm-url]: https://npmjs.com/package/is-value
[license-img]: http://img.shields.io/npm/l/is-value.svg?style=flat-square
[license-url]: LICENSE
[travis-img]: https://img.shields.io/travis/gummesson/is-value.svg?style=flat-square
[travis-url]: https://travis-ci.org/gummesson/is-value
