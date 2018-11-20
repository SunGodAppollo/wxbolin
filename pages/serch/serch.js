// pages/serch/serch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodslis:[
      {title:'雅诗兰黛精华小棕瓶',price:'590.00',chun:'10'},
      {title:'雅诗兰黛精华小棕瓶',price:'590.00',chun:'10'},
      {title:'雅诗兰黛精华小棕瓶',price:'590.00',chun:'10'},
      {title:'雅诗兰黛精华小棕瓶',price:'590.00',chun:'10'},
      {title:'雅诗兰黛精华小棕瓶',price:'590.00',chun:'10'},
      {title:'雅诗兰黛精华小棕瓶',price:'590.00',chun:'10'},
      {title:'雅诗兰黛精华小棕瓶',price:'590.00',chun:'10'},
      {title:'雅诗兰黛精华小棕瓶',price:'590.00',chun:'10'},
      {title:'雅诗兰黛精华小棕瓶',price:'590.00',chun:'10'},
      {title:'雅诗兰黛精华小棕瓶',price:'590.00',chun:'10'},
      {title:'雅诗兰黛精华小棕瓶',price:'590.00',chun:'10'},
      {title:'雅诗兰黛精华小棕瓶',price:'590.00',chun:'10'},
      {title:'雅诗兰黛精华小棕瓶',price:'590.00',chun:'10'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置标题文字
    wx.setNavigationBarTitle({
      title: '搜索'
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //获取当前滑块的index
  bindchange:function(e){
    const that  = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent:function(e){
    const that = this;

    if (that.data.currentData === e.target.dataset.current){
        return false;
    }else{

      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },
  showInfo:function(){
    wx.redirectTo({
      url: '/pages/goodsInfo/goodsInfo'
  });
  }
})
