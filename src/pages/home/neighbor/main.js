import Vue from 'vue'
import App from './index2'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '查看启动日志'
  }
}
