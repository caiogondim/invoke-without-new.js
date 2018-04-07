function enforceNew(Target) {
  return new Proxy(Target, {
    apply(Target, ctx, args) {
      return new Target(...args)
    }
  })
}

module.exports = enforceNew
