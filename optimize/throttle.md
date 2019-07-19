<link rel="stylesheet"  href="../assets/common.css">
# n.2 throttle

##### n.2.1 什么是节流
单位时间内，事件触发后，只有一次回调函数会被执行，如果同一单位时间内多次触发事件，只有一次生效

##### n.2.2 应用场景

（1）鼠标连续不断的触发某件事（如点击），只在单位时间内触发一次

（2）在页面的无限加载场景下，需要用户在滚动页面时，每隔一段时间，发一次ajax请求，而不是在用户停下滚动页面操作时才去请求数据,监听滚轮事件，比如是否滑到底部自动加载更多，用throttle来判断

##### n.2.3 实例
<div class="wrapper">
  <div class="item">
    <input placeholder="请输入内容" id="throttle">
    <p class="line"></p>
  </div>
  <div class="result" id="throttleResult"></div>
</div>

<script type="text/javascript">
  var OThrottle = document.getElementById('throttle');
  var OThrottleResult = document.getElementById('throttleResult');
  var delay=100,last,now,timer=null;
  function throttleAjax(){
    console.log('throttle')
  }

  function throttle(){
    now = new Date().getTime();
    console.log(now-last)
    if(now - last < delay) {
      clearTimeout (timer);
      timer = setTimeout(()=>{
        last = now
        console.log(1)
        throttleAjax()
      },delay)
      // console.log(1)
    } else {
      last = now
      console.log(2)
      throttleAjax()
    }
    
  }

  OThrottle.addEventListener('keydown',()=>{
    throttle()
  })
</script>