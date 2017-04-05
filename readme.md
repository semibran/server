# server
> Boilerplate for creating simple Express servers

```javascript
const server = require('server')('../client').listen(8080)
```

## rationale
rewriting/copying low-level server boilerplate for every single project is a pain.

## usage
this module exports the function `createServer(path)`, which returns a simple `http.Server` instance that serves static content from the given directory `path`.

## install
```sh
npm install semibran/server
```

## license
MIT
