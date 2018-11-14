//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentTab: 0,
    colortop:'#f5c243'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: this.data.colortop,
        animation: {
          duration: 30,
          timingFunc: 'linear'
        }
      });
    //设置标题文字
    wx.setNavigationBarTitle({
      title: '商城'
    });
  },




})
