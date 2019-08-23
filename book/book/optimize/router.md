# 前端路由跳转基本原理
<style>
.router-wrapper{
	width:500px;
	padding:30px;
	background:orange;
	margin-bottom:.85em;
}
.router-wrapper button {
	display:block;
	margin-bottom:10px;
}
</style>

##### 1. Hash

实现原理：

改变#不会触发网页重载，但是会改变浏览器的访问历史。每一次改变#后的部分，都会在浏览器的访问历史中增加一个记录，使用“后退”按钮，就可以回到上一个位置。

实现：
<div class="router-wrapper">
	<button onclick="link('/a')">to /a</button>
	<button onclick="link('/b')">to /b</button>
	<p>当前url值是：<span id="url"></span></p>
	<p>当前hash值是：<span id="hash"></span></p>
</div>

<script type="text/javascript">
var oHashVal = document.querySelector('#hash');
var oUrlVal = document.querySelector('#url');
function link(url) {
	window.location = '#' + url
	oUrlVal.innerHTML = window.location
}

window.addEventListener('hashchange',()=>{
	var hash = window.location.hash;
	oHashVal.innerHTML = hash
},false)
</script>

```html
<button onclick="link('/a')">to /a</button>
<button onclick="link('/b')">to /b</button>
```

```js
function link(url) {
  console.log('link to: ' + url);
  window.location = '#' + url;
}

window.addEventListener("hashchange", function() {
  var hash = window.location.hash;
  console.log('current hash: ' + hash);
}, false);
```

缺点：
页面都变成了全js生成，搜索引擎及第三方统计无法进行抓起

解决：
- Google抓取Ajax方案
- 再做一个服务端生成内容的镜像网站
- HTML5 history中的pushState（另一种路由模式）

##### 2. HTML5 history
这种路由模式下，没有难看的#号，url与后台路由看起来没有差别，vue-router，react-router都支持该模式

实现原理：

HTML5新增的历史记录API可以实现无刷新更改地址栏链接，配合Ajax可以做到无刷新跳转。
