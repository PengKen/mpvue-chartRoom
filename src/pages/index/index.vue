<template>
  <div ref="container" class="container">
    <!--设置背景图片-->
    <div class="bg-wrapper">
      <div class="bg-image">
        <img src="/static/login-bg.png" alt="" width="100%" height="100%">
      </div>
    </div>


    <!--登陆LOGO-->
    <div class="login-logo">
      <img src="/static/logo.png" alt="">
    </div>

    <form class="form">
      <div class="name">
        <i class="iconfont login-icon">&#xe618;</i>
        <div class="input-form">
          <input id="name" type="text" v-model="name" >
          <i class="iconfont delete-icon" @tap="deleteName" v-show="showNameDelete">&#xe609;</i>
        </div>
      </div>
      <div class="password">
        <i class="iconfont login-icon">&#xe679;</i>
        <div class="input-form">
          <input id="password" type="password" v-model="password">
          <i class="iconfont delete-icon" @tap="deletePassword" v-show="showPasswordDelete">&#xe609;</i>
        </div>
      </div>
      <button  :loading="showLoading" class="login-button">Login</button>
    </form>


    <!--<a  class="counter">去往Vuex示例页面</a>-->
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      name: '',
      password: '',
      showNameDelete: false,
      showPasswordDelete: false,
      showLoading: false
    }
  },

  components: {
    card
  },
  watch: {
    name (newVal) {
      this.showNameDelete = newVal !== '' ? true : false
    },
    password (newVal) {
      this.showPasswordDelete = newVal !== '' ? true : false
    }

  },
  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    go () {
      wx.redirectTo({url: '/pages/counter/main'})
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
              console.log(this.userInfo)
            }
          })
        }
      })
    },
    deleteName () {
      this.name = ''
    },
    deletePassword () {
      this.password = ''
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  },
  mounted () {
    console.log(wx)
  }
}
</script>

<style lang="less" scoped>
  *{
    margin: 0;
    padding: 0;
  }

  .container{
    width: 100%;
    height: 100%;
    position: relative;
    .bg-wrapper{
      width: 100%;
      height: 100%;
      position: absolute;
      filter:blur(2px);
      .bg-image{
        width: 100%;
        height: 100%;
        position:relative;
        z-index:-1;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }

    .login-logo{
      position: absolute;
      z-index: 998;
      top:300rpx;
      width:250rpx;
      height: 100rpx;
      left: 50%;
      margin-left: -125rpx;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .form{
        position: absolute;
        z-index: 997;
        top:250px ;
        width: 100%;
        color: wheat;
        .name,.password{
          font-size: 0.3rem;
          display: flex;
          margin-top: 0.3rem;
          margin-left: 50rpx;
          margin-right: 10rpx;
          .login-icon{
            line-height: 80rpx;
          }
          .input-form{
            padding: 0 80rpx 0 20rpx;
            width: 500rpx;
            border-bottom: 1rpx solid wheat;
            position: relative;
            left: 10rpx;
            input{
              position: absolute;
              top: 20rpx;
              left: 20rpx;
              width: 90%;
            }
            .delete-icon{
              line-height: 80rpx;
              font-size: 25rpx;
              position: absolute;
              right: 30rpx;
              top:10rpx
            }
          }
        }
      .login-button{
        width: 550rpx;
        background: orange;
        color: antiquewhite;
        height: 100prx;
        margin: 50rpx auto;
        border-radius: 50rpx;
      }

    }
  }

</style>
