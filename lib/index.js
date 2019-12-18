function enforceNew(Target) {
  const Target_ = (...args) => new Target(...args)
  Target_.prototype = Target.prototype
  return Target_
}

module.exports = enforceNew
