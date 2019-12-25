# 作用域
##### 什么是作用域
简单来说，作用域就是变量和函数的可以访问范围

##### let vs var  作用域有何不一样
下面，我们用一个例子来展示一下
```js
var arr = []
for(var i =0; i<=3; i++) {
	arr[i] = function (){
		return i*2
	}
}
console.log(arr[1])   // 8
console.log(arr[2])   // 8
console.log(arr[3])   // 8
```
>` var`声明了一个全局变量`i`；可以转换成此种写法：`var i =0；for(; i<=3; i++){}`。循环体内，每次循环都定义了一个`function`，每次循环万后，`i++`。这样当整个循环接受后，变量`i`已经变为`4`了，所以再调用，`arr[1]()，arr[2]()，arr[3]()`的时候，表达式`i*2`即为 `4*2`， 结果为`8`。

```js
var arr = []
for(let i =0; i<=3; i++) {
	arr[i] = function (){
		return i*2
	}
}
console.log(arr[1]())   // 2
console.log(arr[2]())   // 4
console.log(arr[3]())   // 6
```
>为什么此种写法会和上面的不一样呢。因为let声明的变量，会有一个块级作用域的概念。此时的闭包中的变量，取决于当前的块级作用域，会将当前块级作用域的变量保存下来，供闭包使用。每循环一次，重新生成一个新的作用域。

##### es3，es5中是如何对作用域进行隔离的
在es6之前，隔离作用域，都是通过立即执行的函数来实现的

```js
    (function () {
      var i = 1;
      (function () {
        var i = 2;
        console.log(i)  // 2
      })()
      console.log(i)   // 1
    })()
```
##### es6中是如何对作用域进行隔离的
es6中 通过{}，添加块级作用域就可以实现。

```js
    {
      const i = 1; 
      {
        const i = 2
        console.log(i) // 2
      }
      console.log(i) // 1
    }
```