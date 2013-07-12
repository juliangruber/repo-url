# repo-url

Get a npm package's repository url, with convenient cli.

## Usage

To clone [browserify](https://github.com/substack/node-browserify)'s repository from the terminal:

```bash
$ git clone $(repo-url browserify)
```

To get its url from JS:

```js
var repoUrl = require('repo-url');
repoUrl('browserify', function (err, url) {
  console.log(url);
});
```

## API

### CLI

```
$ repo-url [OPTIONS] [MODULE]

  --ssh   get module's private ssh url
  --https get module's private https url

```

### repoUrl(module, fn)

Calls `fn` with `module`'s public git url.

### repoUrl.ssh(module, fn)

Calls `fn` with `module`'s private ssh url.

### repoUrl.https(module, fn)

Calls `fn` with `module`'s private https url.

## Installation

With [npm](http://npmjs.org) do

```bash
$ npm install repo-url    # for lib
$ npm install repo-url -g # for cli
```

## License

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
