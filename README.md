# chatroom

关于rpx:
（1）、rpx是一个相对的单位，所有设备都是750rpx
（2）、在 iPhone6 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，
即1rpx = 0.5px = 1物理像素（其他不同手机的dpr不同可能会有所不同
（3）、可以采用rpx，参照iphone6设计稿直接布局
（4）、所有设备的宽度都被设为20rem

关于图片：
（1）、只能使用base64格式或者链接图片，或者使用image
（2）、不支持使用backgorund-image加载本地图片

> A Mpvue project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
