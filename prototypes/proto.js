> const blank = {};
< undefined
> blank.__proto__
< {}
> let newObject = Object.create(blank);
< undefined
> newObject.__proto__
< {}
> const up = {one: 1, two: 2, three: 3}
< undefined
> const up2 = Object.create(up)
< undefined
> up2.__proto__
< {one: 1, two: 2, three: 3}
> up2.one = 'none'
< "none"
> up2
< {one: "none", two: 2, three: 3}
> up
< {one: 1, two: 2, three: 3}
> up2.prototype.two = 'for'
< TypeError: undefined is not an object (evaluating 'up2.prototype.two = 'for'')
> up2.__proto__.two = 'for'
< "for"
> up2
< {one: "none", two: "for", three: 3}
> up
< {one: 1, two: "for", three: 3}