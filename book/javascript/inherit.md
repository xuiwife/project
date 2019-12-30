# 继承

##### 对象冒充的方式实现继承
弊端：只能继承构造函数里面的属性/方法。原型链上的无法继承<br>
![avatar](./images/01.png)

##### 原型链的方式实现继承
弊端：实例化子类的时候，无法给父类传参<br>
![avatar](./images/02.png)<br>
![avatar](./images/03.png)<br>

##### 原型链+对象冒充实现继承
方法一：<br>
![avatar](./images/04.png)<br>
方法二：<br>
![avatar](./images/05.png)<br>