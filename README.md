## 用传统的方式把修改过后的代码上传到github
1.git add .
2.git commit -m "提交信息"
3.git push    
## 制作首页APP组件
1. 完成Header区域，使用的是Mint-UI中的Header组件
2. 制作底部的Tabbar区域，使用的是 MUI 中的 Tabbar.html
	+ 在制作 购物车 小图标的时候，操作会相对多一些
	+ 先把扩展图标的 css 样式 拷贝到项目中
    + 拷贝 扩展字体库 ttf 文件，到项目中
	+ 为购物车小图标添加如下样式`mui-icon mui-icon-extra mui-icon-extra-cart`
3. 要在 中间区域放置一个router-view来展示路由匹配到的组件
## 改造tabbar为router-link
## 设置路由高亮
## 点击 tabbar 中的路由链接，展示对应的路由组件
## 制作首页轮播图布局
## 加载首页轮播图数据
1. 获取数据，如何获取呢，使用vue-resource
2. 使用 vue-resource 的 this.$http.get获取数据
3. 获取到的数据，要保存到 data 身上
4. 使用 v-for 循环渲染每一个 item 项目

## 改造九宫格区域的样式
