# 数据类型

##### 10种数据类型
1.  `undefined`
2.  `number`
3.  `string`
4.  `boolean`
5.  `array`
6.  `null`
7.  `void`：空类型
8.  `any`：任意类型
9.  `enum`：枚举类型
10.  `tuple`：元类型

##### 枚举类型的声明
建议用大写字母表示声明的枚举型变量，看起来更专业。
![avatar](./images/03.png)<br>
![avatar](./images/04.png)<br>

##### any类型的声明
在写js的时候，我们会有这样的情况：在最开始的时候，声明一个变量，值为字符串，在某些条件下，修改这个变量，变成了`number`型，再在某种情况下修改，改为`boolean`型。那么在`ts`里面，改怎么处理呢<br>
![avatar](./images/05.png)
