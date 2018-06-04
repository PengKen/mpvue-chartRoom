<template>
    <div id="neighbor"   >
      <ul>
        <li v-for="item in neighbors" v-bind:key="item._id" @tap="detail(item)">
          <div class="img-wrapper">
            <img :src="item.avatar" alt="">
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: 'index2',
      data () {
        return {
        }
      },
      computed:{
        neighbors(){
          return this.$store.state.neighbors
        }

      },
      methods: {
        show (event) {
          console.log(event)
        },
        handleProxy () {
          console.log(1111)
        },
        detail(item){
          wx.redirectTo({url: '/pages/detail/main'})
        }
      },

    }
</script>

<style scoped lang="less">
  page{
    overflow-y: auto;
  }

  #neighbor{
    display: flex;
    ul{
        display: flex;
        flex-wrap: wrap;

        justify-content: center;
        li{
          &:active{
            background: grey;
          }
          padding: 10rpx;
          width: 160rpx;
          height: 160rpx;
          .img-wrapper{
            width: 160rpx;
            height: 160rpx;
            img{
              width: 100%;
              height: 100%;
              border-radius: 10rpx;
            }
          }
        }
    }

  }
</style>
