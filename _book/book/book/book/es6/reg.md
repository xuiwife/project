# 正则表达式

##### `es6`中正则表达式的特点

`es6`中，正则表达式方法允许接收两个参数，第一个参数为表达式，第二个参数为修饰符。第二个参数的修饰符可以覆盖第一个参数的修饰符。并且通过`reg.flags`来获取此修饰符

```js
let str = 'xyz123'
let regex = new RegExp('xyz','i')
let regex2 = new RegExp(/xyz/ig,'i')
console.log(regex.test(str) , regex2.test(str))  // true  treu
let regex3 = new RegExp(/xyz/ig,'i')
console.log(regex3.test(str), regex3.flags) // true "i"
```

##### es6中的y修饰符

`y`修饰符和`g`修饰符类似，都是用来做全局匹配的。区别在于，`g`修饰符，下次匹配的时候，会接着上次的位置继续寻找，直到找到匹配到的为止。而`y`修饰符，会接着匹配上次的位置后面第一个位置。
```js
let s = 'bbb_bb_b';
let a1 = /b+/g;
let a2 = /b+/y;
console.log(a1.exec(s), a2.exec(s)); 
// ["bbb", index: 0, input: "bbb_bb_b", groups: undefined]
// ["bbb", index: 0, input: "bbb_bb_b", groups: undefined]
console.log('two', a1.exec(s), 'two', a2.exec(s));
// two ["bb", index: 4, input: "bbb_bb_b", groups: undefined] two null
```
> 解析：`a1`和`a2`第一次匹配后，匹配的都是`bbb`。第二次匹配的时候，`a1`是从`_bb_b`\_的位置开始继续匹配，直到匹配到了，返回`bb`。而`a2`也是从`_bb_b`开始匹配，但是发现第一个是_，不匹配`/b+/`这个正则表达式，所以，返回了`null`

##### 检测正则是否开启了带`y`的修饰符

用`sticky`来检测是否开启了`y`修饰符
```js
let a1 = /b+/g
let a2 = /b+/y
console.log(a1.sticky, a2.sticky) //false true
```

##### es6中的u修饰符

如果你的正则表达式需要识别`Unicode`的话，那么你需要用到`u`修饰符，如果你的字符大于2个字节，那么你也需要用到`u`修饰符。

```js
console.log(/\u{61}/.test('a'))  // false
console.log(/\u{61}/u.test('a')) // true

console.log(/^\uD83D/.test('\uD83D\uDC2A')) 
 // true  因为test里面的内容，会被当做一个字符串去匹配
console.log(/^\uD83D/u.test('\uD83D\uDC2A'))
// false  因为表达式里面 会被解析成一个Unicode对应的值，而test里面，对应的是一串字符串
```