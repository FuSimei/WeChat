// projects/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,
    btntype: "primary",
    text: "登录",
    userInfo: {
      avatarUrl: '',
      nickName: '未登录'
    }
  },
  submit: function () {
    if (this.data.text == "登录") {
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              console.log(res)
              this.setData({
                userInfo: {
                  nickName: res.userInfo.nickName,
                  avatarUrl: res.userInfo.avatarUrl
                },
                isShow: true,
                text: '退出登录',
                btntype: "warn"
              })
              wx.setStorage({
                key: 'userInfo',
                data: {
                  userInfo: {
                    nickName: res.userInfo.nickName,
                    avatarUrl: res.userInfo.avatarUrl
                  },
                  isShow: true,
                  text: '退出登录',
                  btntype: "warn"
                },
              })
            }
          })
        }
      })
    }else{
      this.setData({
        isShow: false,
        btntype: "primary",
        text: "登录",
        userInfo: {
          avatarUrl: '',
          nickName: '未登录'
        }
      })
      wx.removeStorage({
        key: 'userInfo',
        success: function(res) {},
      })
    }
  },
  moveToWallet:function(){
    wx.redirectTo({
      url: '../wallet/wallet',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'userInfo',
      success:(res)=> {
        this.setData(res.data)
      },
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