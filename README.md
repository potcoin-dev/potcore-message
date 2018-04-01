<img src="http://potcore.io/css/images/module-message.png" alt="potcore message" height="35">
# Potcoin Message Verification and Signing for Potcore


[![NPM Package](https://img.shields.io/npm/v/potcore-message.svg?style=flat-square)](https://www.npmjs.org/package/potcore-message)
[![Build Status](https://img.shields.io/travis/potcoin-dev/potcore-message.svg?branch=master&style=flat-square)](https://travis-ci.org/potcoin-dev/potcore-message)
[![Coverage Status](https://img.shields.io/coveralls/potcoin-dev/potcore-message.svg?style=flat-square)](https://coveralls.io/r/potcoin-dev/potcore-message?branch=master)

potcore-message adds support for verifying and signing potcoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main potcore repo](https://github.com/potcoin-dev/potcore) for more information.

## Getting Started

```sh
npm install potcore-message
```

```sh
bower install potcore-message
```

To sign a message:

```javascript
var potcore = require('potcore-lib');
var Message = require('potcore-message');

var privateKey = potcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/potcoin-dev/potcore/blob/master/CONTRIBUTING.md) on the main potcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/potcoin-dev/potcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

