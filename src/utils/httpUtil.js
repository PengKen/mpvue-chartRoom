export  const  post = (data)=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      url: 'http://localhost:3000/abc/login', //仅为示例，并非真实的接口地址
      data: data,
      header: {
        'content-type': 'application/json'
      },
      method:'POST',
      success: function(res) {
        resolve(res)
      },
      fail:function () {
        console.log("somthing error")
      }
    })
  })
}



