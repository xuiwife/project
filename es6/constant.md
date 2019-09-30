# 常量
#####  什么是常量
广义的概念就是，不变化的量即为常量

#####  es5中是如何定义常量的
在es5中，常量的定义，主要是通过Object.defineProperty(对象，属性，描述)来定义的。描述字段为一个对象，包含value值和writable。value即为这个属性的value，writable设置为false，那么这个属性即只读，不可修改。即为常量

```js
Object.defineProperty(window,'a',{
	value:1,
	writable:false
})
a = 5
console.log(a) // 1
```

由上可知，虽然给a重新赋值了5，但是a的结果仍为1

##### es6中是如何定义常量的

es6中常量的定义特别的简单  const关键字即可

```js
const a = 1
```
