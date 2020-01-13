<link href="../../assets/common.css" rel="stylesheet">

# 2.1 自定义文字背景水印

<style>
    .bgwrapper{
      position:fixed;
      top:0;
      right:0;
      bottom:0;
      left:0;
      z-index:2;
      pointer-events:none;
    }

    input {
      background: #fff;
    }

    .search {
      margin: 0 auto;
      position: absolute;
      /* top: 50%; */
      left: 50%;
      transform: translateX(-50%);
      display: flex;
    }

    button {
      background: none;
      border: none;
      border-radius: 3px;
      background: #2da4d9;
      color: #fff;
      font-size: 14px;
      padding: 12px 20px;
      outline: none;
      cursor: pointer;
      margin-left: 5px;
    }

    button:active,
    button:focus,
    button:hover {
      background: #1d9cd6
    }
  </style>

  <div class="bgwrapper"></div>
  <div class="wrapper">
    <div class="search">
      <div class="item">
        <input placeholder="请输入内容" id="content">
        <p class="line"></p>
      </div>
      <button id="change">change</button>
    </div>
  </div>

  <script type="text/javascript">
    /*
    str:'（づ￣3￣）づ╭❤～'水印的内容
    width:canvas的宽度
    height:canvas的高度
    rotate:旋转角度
    eg:
    addWaterMark({
    str: "❥(^_-)",
    width: 400,
    height: 200,
    rotate: 30
    })
  */
    var arr = ["傻", "猪", "蠢"];
    var arr2 = ["厉害", "666", "牛", "赞"];

    function checkWords(str) {
      var b = true
      if (str.trim().length === 0) {
        alert('输入点啥吧，不要输入太多空格啦');
        b = false;
      }
      if (str.indexOf('love') !== -1 || str.indexOf('爱') !== -1) {
        alert("原来你对我爱意满满呀")
      }
      if (str.indexOf('会') !== -1) {
        alert("你怎么知道我的名字包含会")
      }

      if (arr.findIndex(item => str.indexOf(item) !== -1) !== -1) {
        alert("不许说脏话骂你自己，注意素质");
        b = false
      }
      if (arr2.findIndex(item => str.indexOf(item) !== -1) !== -1) {
        alert("谢谢赞赏，你真识货");
      }
      return b
    }

    function addWaterMark(options) {
      if (!options) options = {}
      if (!checkWords(options.str)) return false;
      var cans = document.createElement('canvas');
      var rotate = options.rotate === undefined ? -30 : options.rotate
      cans.width = options.width === undefined ? 200 : options.width;
      cans.height = options.height === undefined ? 200 : options.height;
      // var body = document.body;
      var ctx = cans.getContext("2d");
      ctx.rotate(rotate * Math.PI / 180)
      ctx.font = "16px Microsoft JhengHei";
      var grd = ctx.createLinearGradient(0, 0, 200, 0);
      grd.addColorStop(0, "red");
      grd.addColorStop(0.2, "orange");
      grd.addColorStop(0.4, "yellow");
      grd.addColorStop(0.6, "green");
      grd.addColorStop(0.8, "blue");
      grd.addColorStop(1, "purple");
      ctx.fillStyle = grd;
      // ctx.fillStyle = "rgba(17, 17, 17, 0.50)";
      ctx.textBaseline = 'Middle';
      ctx.fillText(options.str, 10, 50);
      var imageSrc = cans.toDataURL();
      var oDiv = document.querySelector('.bgwrapper');
      oDiv.style.backgroundImage = 'url(' + imageSrc + ')';
    }

    var oBtn = document.querySelector('button');
    oBtn.onclick = function () {
      var val = document.querySelector('#content').value;
      addWaterMark({
        str: val
      })
    }

    addWaterMark({
      str: "❥(^_-)"
    })
  </script>
