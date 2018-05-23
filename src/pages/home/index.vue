<template>
  <div id="friends">
    <ul>
      <li>
        <a href="chat/main">
          <div class="friend">
          <div class="avatar-wrapper">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527079654278&di=103879dac0d0d7eabaecbf40b02c42e2&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F92%2F42%2F47958PICSKe_1024.jpg" alt="">
          </div>
          <div class="info">
            <p>Cici</p>
            <p class="message">woshixiaoxixiixxiwoshixiaoxixiixxiwoshixiaoxixiixxiwoshixiaoxixiixxiwoshixiaoxixiixxi</p>
          </div>
          <div class="time">
            <span>{{ time }}</span>
          </div>
        </div></a>

      </li>
    </ul>
  </div>
</template>

<script>
    import {formatDate} from '../../utils'

export default {
      name: 'index',
      created () {

      },
      mounted () {
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
        wx.showActionSheet({
          itemList: ['A', 'B', 'C'],
          success: function (res) {
            console.log(res.tapIndex)
          },
          fail: function (res) {
            console.log(res.errMsg)
          }
        })
      },
      computed: {
        time () {
          return formatDate(new Date())
        }
      }
    }
</script>

<style scoped lang="less">
  #friends{
    li:first-child{
      margin: 10rpx 0;
    }
    li{
      a{
        &:active{
          background: rgba(128,128,128,0.3);
        }
        background: wheat;
        padding: 10rpx;
        .friend{
          display: flex;
          align-items: center;
          .avatar-wrapper{
            width: 100rpx;
            height: 100rpx;
            img{
              border-radius: 10rpx;
              width:100%;
              height: 100%;
            }
          }
          .info{
            width: 500rpx;
            margin-left: 10rpx;
            .message{
              font-weight:200;
              font-size:30rpx;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
          .time{
            position: relative;
            height: 120rpx;
            width: 120rpx;
            font-size: 23rpx;

            span{
              position: absolute;
              top: 10rpx;
              right: 20rpx;
            }
          }

        }
      }
      }


  }
</style>
