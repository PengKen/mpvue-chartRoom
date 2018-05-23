import Vue from 'vue'
import App from './App'
import store from '@/vuex/index'
import * as type from '@/vuex/type'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$type = type
Vue.prototype.$store = store
const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', '^pages/index/main', 'pages/home/main', 'pages/home/chat/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#1E0D32',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white'
    },
    'tabBar': {
      position: 'top',

      // 文档指出color是必填项，其实可为空，不重写color就是深灰，样式更统一
      'color': '#fff',

      // 同样，文档指出selectedColor是必填项，不过selectedColor有必要重写，区分当前项与普通项
      'selectedColor': '#DD9814',

      // 同样，文档指出color是必填项，其实可为空，不重写backgroundColor就是浅灰，样式更统一。
      'backgroundColor': '#1E0D32',

      // borderStyle，不写默认就是黑，那就黑好了，white的话，会少一条分隔线，跟页面混在一起了
      'borderStyle': 'black',
      'list': [{
        'pagePath': 'pages/logs/main',

        // iconPath图标是非必填，只是tab栏会变矮，自然selectedIconPath也可不写
        'iconPath': '/static/logo.png',
        'selectedIconPath': '/static/logo.png',
        'text': 'neighbor'
      }, {
        'pagePath': 'pages/home/main',
        'iconPath': '/static/logo.png',
        'selectedIconPath': '/static/logo.png',
        'text': 'friend'
      }]
    }
  }
}
