// pages/dz_7/dz_7.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkhomeinfo:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options);return;
    wx.showLoading({
      title: '获取中...',
      mask:true,
    })
    var _this = this;
   wx.request({
     url: 'https://www.yanyufanchen.com/api/wxapi/getCheckHomeInfo',
     data:{
       sid: options.sid,
       weeks: options.weeks,
     },
     success:res => {
       console.log(res);
       wx.hideLoading();
        _this.setData({
          checkhomeinfo:res.data,
        })
     },
     fail:err => {
       wx.hideLoading();
       console.log(err);
       if (err.errMsg.indexOf('request:fail') >= 0) {
         wx.hideLoading();
         wx.showModal({
           title: '提示',
           content: '网络不畅通哦',
           showCancel: false,
           success: function () {
             wx.navigateBack({
               delta: 1,
             })
           }
         })
       }
      
     }
   })
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
  
  }
})