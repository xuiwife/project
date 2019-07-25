<link rel="stylesheet"  href="../assets/common.css">
# n.2 throttle

##### n.2.1 什么是节流
持续触发事件，每隔一段时间，只执行一次事件

##### n.2.2 应用场景

（1）鼠标连续不断的触发某件事（如点击），只在单位时间内触发一次

（2）在页面的无限加载场景下，需要用户在滚动页面时，每隔一段时间，发一次ajax请求，而不是在用户停下滚动页面操作时才去请求数据,监听滚轮事件，比如是否滑到底部自动加载更多，用throttle来判断

##### n.2.3 实例
>没有加节流的时候

<div class="mb">
  <div id="throttleResult" style="color:red"></div>
  <div class="throttle" id="throttle">
    <div>滚动一下试试看</div>
  </div>
</div>

<script type="text/javascript">
var Othrottle = document.getElementById('throttle');
var OThrottleResult = document.getElementById('throttleResult');
var num = 0;
function ajax(){
  num ++ ;
  OThrottleResult.innerHTML = `执行了${num}次`
}
Othrottle.addEventListener('scroll',()=>{
  ajax()
})
</script>

```js
var Othrottle = document.getElementById('throttle');
var OThrottleResult = document.getElementById('throttleResult');
var num = 0;
function ajax(){
  num ++ ;
  OThrottleResult.innerHTML = `执行了${num}次`
}
Othrottle.addEventListener('scroll',()=>{
  ajax()
})
```

>添加节流后

<div class="mb">
  <div id="throttleResult1" style="color:red"></div>
  <div class="throttle" id="throttle1">
    <div>滚动一下试试看</div>
  </div>
</div>

<script type="text/javascript">
var Othrottle1 = document.getElementById('throttle1');
var OThrottleResult1 = document.getElementById('throttleResult1');
var num1 = 0; 
var startTime,currentTime,timer;
function ajax1(){
  num1++;
  OThrottleResult1.innerHTML = `执行了${num1}次`
}
function throttle(delay){
  currentTime = new Date().getTime();
  var remaning = delay - (currentTime - startTime);
  clearTimeout(timer)
  if(remaning<=0){
    ajax1();
    startTime = currentTime
  } else {
    timer = setTimeout(()=>{
      ajax1();
      startTime = currentTime
    },remaning)
  }

}
Othrottle1.addEventListener('scroll',()=>{
  throttle(1000)
})
</script>

```js
var Othrottle1 = document.getElementById('throttle1');
var OThrottleResult1 = document.getElementById('throttleResult1');
var num1 = 0; 
var startTime=new Date().getTime(),currentTime,timer;
function ajax1(){
  num1++;
  OThrottleResult1.innerHTML = `执行了${num1}次`
}
function throttle(delay){
  currentTime = new Date().getTime();
  var remaning = delay - (currentTime - startTime);
  clearTimeout(timer)
  if(remaning<=0){
    ajax1();
    startTime = currentTime
  } else {
    timer = setTimeout(()=>{
      ajax1();
      startTime = currentTime
    },remaning)
  }

}
Othrottle1.addEventListener('scroll',()=>{
  throttle(1000)
})
```

