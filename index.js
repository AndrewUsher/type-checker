const typeChecker = {}

const types = [
  'Array',
  'Object',
  'String',
  'Date',
  'RegExp',
  'Function',
  'Boolean',
  'Number',
  'Null',
  'Undefined'
]

function getType() {
  return Object.prototype.toString.call(this).slice(8, -1)
}

for (let i = types.length; i--; ) {
  typeChecker[`is${types[i]}`] = (function(self) {
    return function(elem) {
      if (self === 'Undefined') {
        return typeof elem === self.toLowerCase()
      }

      if (self === 'Null') {
        console.log(elem)
        try {
          if (Array.isArray(Object.keys(elem))) {
            return false
          }
        } catch (err) {
          return true
        }
      }
      return getType.call(elem) === self
    }
  })(types[i])
}

let e = undefined

console.log(typeChecker.isArray([]))
console.log(typeChecker.isArray({}))
console.log(typeChecker.isNull({}))
console.log(typeChecker.isUndefined(e))
