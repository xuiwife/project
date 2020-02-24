# 接口

##### 接口的作用
接口定义的是一种标准，在实现的时候，必须遵循此接口定义的标准。接口用interface关键字定义。
##### 接口的分类
1. [属性接口](#属性接口)
2. [函数接口](#函数接口)
3. [可索引接口](#可索引接口)
4. [类类型接口](#类类型接口)
5. [接口扩展](#接口扩展)

#### 属性接口
![avatar](./images/interface/01.png)<br>
调用的时候，参数写在括号内时，必须只有接口中定义的属性<br>
![avatar](./images/interface/02.png)<br>
参数定义在外面的时候，包含接口中定义的参数即可<br>
![avatar](./images/interface/03.png)<br>
可选属性接口<br>
![avatar](./images/interface/04.png)
##### 实例
![avatar](./images/interface/05.png)

#### 函数接口
##### 作用
 对方法传入的参数和返回值进行约束<br>
 ![avatar](./images/interface/06.png)
 
#### 可索引接口
主要是对数组和对象的约束，不常用<br>
![avatar](./images/interface/07.png)

#### 类类型接口
对类的约束，和抽象类有点类似<br>
![avatar](./images/interface/08.png)

#### 接口扩展
接口的扩展实质上就是接口的继承<br>
![avatar](./images/interface/09.png)<br>
![avatar](./images/interface/10.png)