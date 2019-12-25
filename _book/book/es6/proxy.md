# 对象代理

##### 为什么需要对象代理

假如声明了一个对象`var obj={a:1}`,`a`是可读可写的，保护不了。为了实现数据的保护，我们需要对象代理
```js
var proxy = {
	a:1
}

var proxyer = {
	a:1
}
```
proxyer是一个中间代理层，可以对原始数据proxy进行操作，但是proxyer暴露给用户的时候，是不能直接操作proxy的。

##### es3中对数据进行保护
```js
// 对sex属性进行保护
 {
      // es3
      var Person = function () {
        var data = {
          name: 'es3',
          sex: 'male',
          age: 15
        }
        this.get = function (key) {
          return data[key]
        }
        this.set = function (key, value) {
          if (key !== 'sex') {
            data[key] = value
          }
        }
      }
      var person = new Person()
      person.set('name', 'es3-cname')
      person.set('sex', 'female')
      person.set('age', 20)
      console.table({
        name: person.get('name'), //es3-cname
        sex: person.get('sex'), //male
        age: person.get('age') //20
      })
    }
```

##### es5中对数据进行保护
```js
// 对sex属性进行保护
{
      // es5
      var person = {
        name: 'es5',
        age: 15
      }

      Object.defineProperty(person, 'sex', {
        value: 'male',
        writable: false
      })

      person.name = "es5-cname"
      person.sex = 'female'
      console.table({
        name: person.name, //es5-cname
        sex: person.sex, //male
        age: person.age //20
      })
    }
```

##### es6中对数据进行保护
```js
// 对sex属性进行保护
{
      // es6
      let person = {
        name: 'es6',
        age: 15,
        sex: 'male'
      }

      let personer = new Proxy(person, {
        get(target, key) {
          return target[key]
        },
        set(target, key, value) {
          if (key !== 'sex') {
            return target[key] = value
          }
        }
      })

      personer.name = 'es6-cname'
      personer.sex = 'female'
      console.table({
        name: personer.name, // es6-cname
        age: personer.age, // 15
        sex: personer.sex // male
      })

    }
```