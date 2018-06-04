<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>

/* this rule will be remove */
/** {*/
  /*transition: width 2s;*/
  /*-moz-transition: width 2s;*/
  /*-webkit-transition: width 2s;*/
  /*-o-transition: width 2s;*/
/*}*/

@font-face {
  font-family: 'iconfont';  /* project id 677093 */
  src: url('//at.alicdn.com/t/font_677093_i5kh6sun7ezjv2t9.eot');
  src: url('//at.alicdn.com/t/font_677093_i5kh6sun7ezjv2t9.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_677093_i5kh6sun7ezjv2t9.woff') format('woff'),
  url('//at.alicdn.com/t/font_677093_i5kh6sun7ezjv2t9.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_677093_i5kh6sun7ezjv2t9.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

page{
  height: 100%;
  /*overflow-y: hidden;*/

}

</style>
