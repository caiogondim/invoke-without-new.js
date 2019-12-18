# invoke-without-new

Add capability to invoke constructors without `new`.

## Install

```bash
npm install --save invoke-without-new
```

## Usage

### As a function

```js
// foo.js
const invokeWithoutNew = require('invoke-without-new')

class Foo {
  constructor() {
    this.bar = 1
  }
}

module.exports = invokeWithoutNew(Foo)

// index.js
const Foo = require('foo')
const foo1 = Foo() // works
const foo2 = new Foo() // works
```

### As a decorator

```js
// foo.js
const invokeWithoutNew = require('invoke-without-new')

@invokeWithoutNew
class Foo {
  constructor() {
    this.bar = 1
  }
}

module.exports = Foo

// index.js
const Foo = require('foo')
const foo1 = Foo() // works
const foo2 = new Foo() // works
```

---

[caiogondim.com](https://caiogondim.com) &nbsp;&middot;&nbsp;
GitHub [@caiogondim](https://github.com/caiogondim) &nbsp;&middot;&nbsp;
Twitter [@caio_gondim](https://twitter.com/caio_gondim)
