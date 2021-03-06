# react-router-strong
自己造轮子，写的react-router，api模仿的react-router

**目前为止，只支持BrowserRouter.**

## html5 history 学习笔记

html5的history API是操作浏览器历史的标准接口。这样就可以在地址栏改变url但是不刷新页面。当用户按下回退按钮的时候就会有事件被触发。也就是说地址栏的url依然可以作为当前资源的唯一标识符

### 操纵浏览器地址栏的原因：

一个简单的链接可以导向一个新的url，这是网页运行20多年的一个基本的规则。history API并没有颠覆这一点。唯一的url指向唯一的资源。但是浏览器本身对于url也有很多的限制，当你改变url或者刷新页面的时候，就会从远方的服务器重新请求资源。这是相当浪费资源的，尤其是新的页面和旧的页面相差不多的时候。

history API就是一个你可以通过javascript脚本，改变url地址而不下载整个页面的API。

history API的核心方法就是：

```

history.pushState(null, null, link.href);

```

### 支持浏览器前进或后退

onpopstate事件支持检测浏览器的前进和后退按钮，但是history.pushState或history.replaceState并不会触发onpopstate事件。需要做特殊处理。


### 后台支持

为了支持刷新浏览器还停留在之前的页面要通过后台配合。比如在package文件的webpack-dev-server中要添加以下命令行：

```
"start": "webpack-dev-server --history-api-fallback",

```

我对于 --history-api-fallback的理解就是为了支持单页面应用。当pathname改变的时候，后端不改变获得资源文件的路径。避免单页面应用出现404现象。


### 自己仿写一个react-router

原理以及基本的知识在上面应讲好了。
实现react-router的第一步就是先实现一个json对象，对路由的path进行存储以及监听。