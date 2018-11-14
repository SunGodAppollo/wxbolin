//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentTab: 0,
    colortop:'#f5c243',
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
  //
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
