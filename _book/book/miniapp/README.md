# 小程序相关

#### sitmap配置
小程序根目录下的sitemap.json文件用来配置小程序及其页面是否允许被微信索引

例1： 所有的页面，都会被微信索引（默认情况）
```js
{
  "rules":[{
    "action": "allow",
    "page": "*"
  }]
}
```

例2:指定页面不被索引，其余页面允许被索引
```js
{
  "rules":[{
    "action": "disallow",
    "page": "path/to/page"
  }]
}
```
