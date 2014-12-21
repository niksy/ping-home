# ping-home

Sham-like alternative to [Beacon API](https://developer.mozilla.org/en-US/docs/Web/API/navigator.sendBeacon) ([more information](http://updates.html5rocks.com/2014/10/Send-beacon-data-in-Chrome-39)).

It doesn’t try to emulate `navigator.sendBeacon` (hence the sham-like), but normalizes approach: if browser supports the API, it will use it (and send data via `FormData` object), otherwise it uses standard XHR `POST` request and sends form encoded data.

## Installation

```sh
npm install ping-home --save

bower install ping-home --save
```

## API

### `pinghome(url, data, useSync)`

#### url

Type: `String`

URL where the sent data will be logged. It expects URL to be on same domain, so plan accordingly.

#### data

Type: `Object`

Data which will be sent to the server.

#### useSync

Type: `Boolean`

By default, XHR request will be sent in async mode, but with this argument you have option to use sync mode.

## Examples

```js
var pinghome = require('ping-home');

pinghome('/log', {
	foo: 1,
	bar: 2,
	baz: false
});
```

### AMD and global

```js
define(['ping-home'], cb);

window.pinghome;
```

## Browser support

Tested in IE8+ and all modern browsers.

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)
