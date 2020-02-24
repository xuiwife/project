# 静态方法/属性

##### 静态方法/属性的定义
静态方法的定义，请[查看前文](../javascript/function.md)。ts中，通过关键字static来定义静态方法和属性的。<br>
![avatar](./images/static/01.png)<br>
由上例可见，静态方法无法调用类中的属性。<br>
若想在静态方法中访问类中的属性，则可以将此属性，设置为静态属性<br>
![avatar](./images/static/02.png)<br>