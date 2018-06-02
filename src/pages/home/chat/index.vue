<template>
  <div class="chat">
      <div class="chat-wrapper">
        <ul class="converstion-list">
          <li v-for="(item,index) in list" :key="index" :class="[item.isFriend ? friend : user]">
            <div class="avatar-wrapper">
              <img src="/static/login-bg.png" alt="">
            </div>
            <div class="arrow"></div>
            <p>{{ item.content }}</p>
          </li>
        </ul>
        <div class="input">
          <input type="text" :confirm-hold="true" v-model.lazy="content">
        </div>
      </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      list: [
        {isFriend: true, content: 'asdasdasdasasdasdasdasasdasdas'},
        {isFriend: false, content: 'asdasdasdsdasasdasdas'}
      ],
      friend: 'friend',
      user: 'user',
      content: ''
    }
  },
  config: {
    navigationBarTitleText: 'name'
  }
}
</script>

<style lang="less" scoped>
  .chat{
    .chat-wrapper{
      display: flex;
      .converstion-list{
        width: 100%;
        li{
          margin:30rpx 10rpx;

        }
        .friend{
          position: relative;
          display: flex;
          .avatar-wrapper{
            width: 80rpx;
            height: 80rpx;
            img{
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
          .arrow{
            position: absolute;
            width: 10rpx;
            height: 0rpx;
            border-color: transparent greenyellow transparent transparent;
            border-width: 10rpx;
            border-style: solid;
            left:65rpx;
            top:28rpx;
          }
          p{
            overflow: hidden;
            word-wrap: break-word;
            margin-left: 15rpx;
            padding: 10rpx;
            max-width: 70%;

            color: #000;
            background: navajowhite;
            border-radius: 15rpx;
            font-size: 30rpx;
          }
        }
        .user{
          width: 100%;
          position: relative;
          display: flex;
          .avatar-wrapper{
            position: absolute;
            right: 20rpx;
            width: 80rpx;
            height: 80rpx;
            img{
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
          .arrow{
            position: absolute;
            width: 10rpx;
            height: 0rpx;
            border-color: transparent transparent transparent greenyellow ;
            border-width: 10rpx;
            border-style: solid;
            right: 90rpx;
            top:28rpx;
          }
          p{
            min-height: 60rpx;
            overflow: hidden;
            word-wrap: break-word;
            margin-left: 15rpx;
            padding: 10rpx;
            max-width: 70%;
            color: #20258b;
            background: greenyellow;
            border-radius: 15rpx;
            font-size: 30rpx;
            position:absolute;
            right:120rpx;
            text-align: right;
          }
        }
      }
      .input{
        display: flex;
        align-items: center;
        background: wheat;
        position: fixed;
        bottom: 0;
        width: 100%;
        height:80rpx;
        input{
          width: 600rpx;
          margin-left: 30rpx;
          display: table-cell;
          background: white;
          font-size: 30rpx;
        }
      }
    }
  }

</style>
