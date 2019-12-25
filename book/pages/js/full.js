;
(function (w) {
  w.onwheel = function (e) {
    const dir = e.deltaY > 0 ? 'showNext' : 'showPrev';
    const tar = getParentEle(e);
    move(tar, dir)
  }

  function move(tar, dir) {
    const prev = tar.previousElementSibling;
    const next = tar.nextElementSibling;
    if (dir === 'showNext') {
      if (!next) return;
      next.style.display = "flex";
      setTimeout(e => {
        next.classList.add('show_animation')
      }, 0)
    } else {
      if (!prev) return;
      prev.style.display = "flex";
      setTimeout(e => {
        prev.classList.add('show_animation')
      }, 0)
    }
    tar.style.display = "none";
    tar.classList.remove('show_animation')
  }

  function getParentEle(e) {
    let parentEle = e.target;
    while (!parentEle.classList.contains('sub_wrapper')) {
      console.log(1)
      parentEle = parentEle.parentNode
    }
    return parentEle;
  }

  const divList = document.querySelector('.full').children;
  for (const item of divList) {
    item.classList.add('sub_wrapper')
    item.style.display = "none"
  }
  divList[0].style.display = 'flex';
  setTimeout(e => {
    divList[0].classList.add('show_animation')
  }, 0);

  /*为什么这么写会有问题*/
  // let i = 0;
  // const divList = document.querySelector('.full').children;
  // for (const item of divList) {
  // 	item.style.display = "none"
  // }
  // divList[0].style.display = 'flex'
  // window.onwheel = function() {
  // 	i++;
  // 	if (i > divList.length) return;
  // 	for (const item of divList) {
  // 		item.style.display = "none"
  // 	}
  // 	divList[i].style.display = "flex"

  // }
})(window)
