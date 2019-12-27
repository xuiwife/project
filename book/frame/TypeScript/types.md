# 数据类型

##### 11种数据类型
1.  `undefined`
2.  `number`
3.  `string`
4.  `boolean`
5.  `array`
6.  `null`
7.  `void`：空类型，一般用于方法没有返回值
8.  `any`：任意类型
9.  `enum`：枚举类型
10.  `tuple`：元类型
11.  `never`：其它类型

##### 枚举类型的声明
建议用大写字母表示声明的枚举型变量，看起来更专业。
![avatar](./images/03.png)<br>
![avatar](./images/04.png)<br>

##### any类型的声明
![avatar](./images/05.png)<br>
用处：<br>
比如，我们获取一个dom元素后，给它设置style，在js里面是不会报错的，但是在js里面，会报错。所以any类型提现了它的作用了<br>
![avatar](./images/09.png)

##### 数组类型的声明
声明一个数组，数组中的每一个元素，都是number型：<br>
方法一：<br>
![avatar](./images/06.png)<br>
方法二：<br>
![avatar](./images/07.png)<br>
方法三：<br>
![avatar](./images/10.png)<br>

##### 元组类型的声明
元组属于数组的一种。如果你想给数组中的元素指定不同的类型，那么可以用元组类型声明<br>
![avatar](./images/08.png)

##### undefined类型的声明
声明是undefined类型的时候，赋值的时候，只能赋值为undefined。否则编辑器会给出错误提示<br>
![avatar](./images/11.png)


##### 声明一个变量是多种类型
![avatar](./images/12.png)

##### void类型的声明
void类型，一般用于方法没有返回任意值的情况。<br>
![avatar](./images/13.png)

##### never类型的声明
never类型包括null和undefined类型，代表着不会出现的值。很少用到<br>
![avatar](./images/14.png)<br>
感兴趣的可以参考[TypeScript](https://www.tslang.cn/docs/handbook/basic-types.html)文档