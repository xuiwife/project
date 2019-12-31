# pointer-events
#####  作用
- 阻止用户的点击动作产生任何效果
- 阻止缺省鼠标指针的显示
- 阻止`css`里面的`hover`和`active`状态变化触发事件
- 阻止`JavaScript`点击动作触发的事件

#####  常用的值
- `auto`：效果和没有定义pointer-events属性相同，鼠标不会穿透当前层。
- `none`：元素不再是鼠标事件的目标，鼠标不再监听当前层而去监听下面的层中的元素。但是如果他的子元素设置了`pointer-events`为其他值，比如`auto`，鼠标还是会监听这个子元素的

#####  实例
>example.com加上pointer-events点击后，元素不再是鼠标的事件目标，所以不会跳转

<ul>
<li><a href="https://developer.mozilla.org/">MDN</li>
<li><a href="http://example.com">example.com</a></li>
</ul>

<style>
a[href="http://example.com"] {
  pointer-events:none;
}
</style>

```html
<ul>
<li><a href="https://developer.mozilla.org/">MDN</li>
<li><a href="http://example.com">example.com</a></li>
</ul>
```

```css
a[href="http://example.com"] {
  pointer-events:none;
}
```