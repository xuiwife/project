<link rel="stylesheet"  href="../assets/common.css">

# n.1 debounce

##### n.1.1 什么是防抖
事件被触发n秒后，再执行回调函数，如果n秒内被触发了，则重新计时

##### n.1.2 应用场景

（1）输入框的校验，只在输入完成后，去执行查询请求，这样可以有效减少请求次数，节约请求资源

（2）window的scroll，resize事件，这样频繁触发的事件，防抖可以让其只触发一次

##### n.1.3 实例
>模拟在输入框输入后，进行ajax查询，没有添加防抖的时候

<div class="wrapper">
  <div class="item">
    <input placeholder="请输入内容" id="debounce">
    <p class="line"></p>
  </div>
  <div class="result" id="debounceResult"></div>
</div>

<script type="text/javascript">
 var OInput = document.getElementById('debounce');
 var OResult = document.getElementById('debounceResult');
 var num = 0;
 function Ajax(content,num){
  OResult.innerHTML = `查询了${num}次`
 }

 OInput.addEventListener('keyup',(e) => {
   num ++ ;
   Ajax(e.target.value,num)
 },false)
</script>

```html
<div class="wrapper">
  <div class="item">
    <input placeholder="请输入内容" id="debounce">
    <p class="line"></p>
  </div>
  <div class="result" id="debounceResult"></div>
</div>
```
```js
 var OInput = document.getElementById('debounce');
 var OResult = document.getElementById('debounceResult');
 var num = 0;
 function Ajax(content,num){
  OResult.innerHTML = `查询了${num}次`
 }

 OInput.addEventListener('keyup',(e) => {
   num ++ ;
   Ajax(e.target.value,num)
 },false)
```

>添加防抖后的效果

<div class="wrapper">
  <div class="item">
    <input placeholder="请输入内容" id="debounce1">
    <p class="line"></p>
  </div>
  <div class="result" id="debounceResult1"></div>
</div>

<script type="text/javascript">
 var OInput1 = document.getElementById("debounce1");
 var OResult1 = document.getElementById('debounceResult1');
 var nums = 0,timer = null;
 function Ajax1(){
   nums ++;
   OResult1.innerHTML=`查询了${nums}次`
 }
 OInput1.addEventListener('keydown',()=>{
   clearTimeout(timer);
   timer = setTimeout(()=>{
     Ajax1()
   },500)
 })
</script>

```js
 var OInput1 = document.getElementById('debounce1');
 var OResult1 = document.getElementById('debounceResult1');
 var nums = 0,timer = null;
 function Ajax1(){
   nums ++;
   OResult1.innerHTML=`查询了${nums}次`
 }
 OInput1.addEventListener('keydown',()=>{
   clearTimeout(timer);
   timer = setTimeout(()=>{
     Ajax1()
   },500)
 })
```