# 环境安装
##### 全局安装ts
<code>
npm install typescript -g
</code>

##### 查看ts版本
<code>
tsc --version
</code>

##### 生成package.json文件
<code>
npm init -y
</code>

##### ts配置文件生成（编译成js的规则）
<code>
tsc --init
</code>

##### types/node包生成(解决模块的声明文件问题)
<code>
npm i @types/node --save-dev
</code>

##### 编写helloWorld.ts
![avatar](./images/01.png)

##### 构建
vscode编辑器---->运行任务---->tsc：监听-tsconfig.js,会生成一个`helloworld.js`文件，并自动编译成js文件。

##### 运行
在html中引入的时候，引入编译后的js文件，就可以在浏览器中运行了。