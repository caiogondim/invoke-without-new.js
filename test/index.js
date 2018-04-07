const invokeWithoutNew = require('../lib')

describe('function API', () => {
  it('allows class to be called without new', () => {
    class Foo {
      constructor() {
        this.a = 1
        this.b = 2
      }
    }
    const FooDecorated = invokeWithoutNew(Foo)
    const foo = FooDecorated()
    expect(foo.a).toEqual(1)
    expect(foo.b).toEqual(2)
  })
})

describe('decorator API', () => {
  it('allows class to be called without new', () => {
    @invokeWithoutNew
    class Foo {
      constructor() {
        this.a = 1
        this.b = 2
      }
    }
    const foo = Foo()
    expect(foo.a).toEqual(1)
    expect(foo.b).toEqual(2)
  })
})
