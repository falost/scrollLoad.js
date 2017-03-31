# scrollLoad.js

scrollLoad.js是一款jQuery滚动响应加载图片的插件。

现在很多网页上都是有很多图片资源需要进行请求加载，如果页面图片内容太多，那么网页加载的速度就会变慢，不能达到理想的秒开效果，特此，scrollLoad.js可以延迟加载图片，当浏览器滚动到这个可视区域后，在进行图片的加载。

### 使用方法

在页面中引入scrollLoad.js文件。
```
<script src='js/jquery.scrollLoad.js'></script>
```
### HTML结构

使用一个**`<div id="warp">`**作为目标点，需要加载图片的区域的位置。

```
<!--图片容器-->
<div id = "warp">
		<img src="loaddig.jpg" data-src="/image/meilideguniang.jpg">
</div>  
```
插件会自动查找 图片容器内的所有图片，id为warp标签下的所有img的标签，其中 img 的 src 为占位图片，data-src 为需要展示的图片的真实地址，它会自动替换图片的地址进行展示。

### 初始化插件

在页面DOM元素加载完毕之后，可以通过下面的方法来初始化插件。

```
$("#warp").scrollLoad()
```
### 配置参数

| 参数  | 默认值| 描述 | 类型
| -------- | -------- | -------- |----
|  src  | data-src     | 存放图片真实路径的属性     | string
| tiem | 300 |切换时间 |number


最后 求star

