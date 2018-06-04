import store from '@/vuex'
const API = (url, data = {}, method = 'GET') => {
  if(url === '/neighbors')
  console.log(store.state)
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'http://localhost:3000' + url, // 仅为示例，并非真实的接口地址
      data: data,
      header: {
        'content-type': 'application/json',
        'x-authorization-token': store.state.token
      },
      method: method,
      success: function (res) {
        console.log("sucess")
        resolve(res.data)
      },
      fail: function (err) {
        console.log(err)
      },
      complete: function () {
        console.log("complete")
      }
    })
  })
}

export default API
