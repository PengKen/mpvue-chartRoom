<template>
    <div id="neighbor">
      <ul>
        <li>
          <div class="content">
            <div class="user">
              <div class="avatar-wrapper">
                <img src="http://p4jyexz3l.bkt.clouddn.com/207d1d00a5ec31a7622c4b4c8b66405a.jpg" alt="">
              </div>
              <p class="name">name</p>
            </div>
            <div class="img-wrapper">
              <img src="http://p4jyexz3l.bkt.clouddn.com/207d1d00a5ec31a7622c4b4c8b66405a.jpg" alt="">
            </div>
            <div class="footer">
              <div @tap="toggleLike">
                <i class="iconfont" :class="[likes ? like : unlike ]">&#xe621;</i>
                <span>888 people likes</span>
              </div>
              <div>

                <i class="iconfont">&#xe794;</i>
                <span>Start to chat</span>
              </div>

            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: 'index',
      data () {
        return {
          likes: false,
          like: 'like',
          unlike: 'unlike'
        }
      },
      methods: {
        toggleLike () {
          this.likes ? this.likes = false : this.likes = true
        }
      }
    }
</script>

<style scoped lang="less">
  *{
    padding: 0;
    margin: 0;
  }
  #neighbor{
    ul{
      margin-top: 15rpx;
      .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        .user{
          margin-bottom: 10rpx;
          width: 700rpx;
          display: flex;
          align-items: center;
          .avatar-wrapper{
            width: 100rpx;
            height: 100rpx;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .name{
            margin-left: 15rpx;
            color: #CC7832;
            font-weight: bold;
          }
        }
        .img-wrapper{
          display: flex;
          justify-content: center;
          width: 100%;
          height: 700rpx;
          img{

            width: 700rpx;
            height: 100%;
          }
        }
        .footer{
          display: flex;
          flex-direction: column;
          width:700rpx;
          margin-top:15rpx;
          div:nth-child(1){
            margin-bottom: 15rpx;
            display: flex;
            .like{
              color: red;
              line-height: 41rpx;
            }
            span{
              font-size: 30rpx;
              color: #CC7832;
              padding-left: 10rpx;
            }
            .unlike{
              color: grey;
              line-height: 41rpx;
            }
          }
          div:nth-child(2){
            display: flex;
            i{
              color:grey;
              line-height: 41rpx;
            }
            span{
              color: #CC7832;
              font-size: 30rpx;
              padding-left: 10rpx;
            }
          }

        }
      }

    }

  }

</style>
