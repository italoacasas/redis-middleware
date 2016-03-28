# Redis Express Middleware

[![npm version](https://badge.fury.io/js/redis-middleware.svg)](https://badge.fury.io/js/redis-middleware)
[![Dependency Status](https://david-dm.org/italoacasas/redis-middleware.svg)](https://david-dm.org/italoacasas/redis-middleware)
[![devDependency Status](https://david-dm.org/italoacasas/redis-middleware/dev-status.svg?theme=shields.io)](https://david-dm.org/italoacasas/redis-middleware#info=devDependencies)
[![Build Status](https://travis-ci.org/italoacasas/redis-middleware.svg?branch=master)](https://travis-ci.org/italoacasas/redis-middleware)

Express Middleware to handle Redis connections

## Installation
`npm install --save redis-middleware`

## Example
```javascript
const app = require('express')();
const redisMiddleware = require('redis-middleware');

app.use(redisMiddleware())

app.post('/', (req, res) => {
    req.redis.set(key, value);  
}
```

## Options
- port
- host
- options

## License
Copyright (c) 2016 Italo A. Casas <me@italoacasas.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.