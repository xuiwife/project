# 箭头函数

##### 函数的声明
```js
() => {
	
}
```
这么写的好处
* 写法上省去了function，写法更简单
* this的指向有了新的意义

#####  this的绑定
```js
{
	//es3 es5
	var factory = function (){
		this.a = 'a'
		this.b = 'b'
		this.c = {
			a:'a+',
			b:function(){
				return this.a
			}
		}
	}
	console.log(new factory().c.b()) // a+
}

{
	//es6
	var factory = function(){
		this.a ='a'
		this.b ='b'
		this.c = {
			a:'a+',
			b:()=>{
				return this.a
			}
		}
	}
	console.log(new factory().c.b()) // a
}
```
* 针对于es3和es5的写法，this指向于被调用的对象，即属于c，那么this.即为a+
* 针对于es6的写法，this指向于定义时的this，为factory函数体中的this。即为new factory得到的实例对象。this.a即为函数体里面this.a的值a