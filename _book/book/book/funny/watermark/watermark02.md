# 2.2 图片添加文字水印

  <style>
    .addWatermark {
      margin: 0 auto;
      text-align: center;
      padding-top: 10%;
    }
  </style>

  <div class="addWatermark">
    <canvas id="canvas" width="500px" height="500px"></canvas>
  </div>

  <script type="text/javascript">
    var img = new Image();
    img.src = "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1048133323,2809009831&fm=26&gp=0.jpg";
    var oCanvas = document.getElementById('canvas');
    var ctx = oCanvas.getContext('2d');
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
      ctx.font = "20px microsoft yahei";
      ctx.fillStyle = "#ffffff";
      ctx.fillText("力宏力宏我爱你", 350, 280);
    }
  </script>