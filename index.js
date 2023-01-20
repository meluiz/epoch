"use strict"
var e = Object.defineProperty
var n = Object.getOwnPropertyDescriptor
var p = Object.getOwnPropertyNames
var d = Object.prototype.hasOwnProperty
var i = (r, o) => {
    for (var f in o) e(r, f, { get: o[f], enumerable: !0 })
  },
  l = (r, o, f, a) => {
    if ((o && typeof o == "object") || typeof o == "function")
      for (let t of p(o))
        !d.call(r, t) &&
          t !== f &&
          e(r, t, {
            get: () => o[t],
            enumerable: !(a = n(o, t)) || a.enumerable
          })
    return r
  }
var m = r => l(e({}, "__esModule", { value: !0 }), r)
var b = {}
i(b, { default: () => x })
module.exports = m(b)
function u() {
  return "bar"
}
var x = u
0 && (module.exports = {})
