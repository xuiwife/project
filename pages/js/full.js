;(function(w){
	const defaults = {
		current:0
	}
	
	const wrapper = document.querySelector('.full');
	const children = wrapper.children;
	const cur = children[0]
	const pre = cur.previousElementSibling;
	const next = cur.nextElementSibling;
	cur.style.transform='translateY(0)';
	
	function move(tar,dir) {
		const prev = tar.previousElementSibling;
		const next = tar.nextElementSibling;
		console.log('next',next)
		let cur = null
		cur = dir > 0? next : prev,
		console.log('cur',cur)
		cur.style.transform="translateY(0)"
		tar.style.transform="translateY(-100%)"
	}
	
	window.onwheel = function(e) {
		const dir = e.deltaY > 0 ? 1 : -1;
		move(cur,dir)
	}

})(window)