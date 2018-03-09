// projects/warn/warn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bikeValue:{
      num:0,
      des:''
    },
    text:"拍照/相册",
    color:'#f2f2f2',
    checkboxValue: [{
      title: "私索私用",
      checked: false
    }, {
      title: "车牌缺损",
      checked: false
    }, {
      title: "轮胎坏了",
      checked: false
    }, {
      title: "车锁坏了",
      checked: false
    }, {
      title: "违规乱停",
      checked: false
    }, {
      title: "密码不对",
      checked: false
    }, {
      title: "刹车坏了",
      checked: false
    }, {
      title: "其他故障",
      checked: false
    }],
    imgsUrl:[]
  },
  //函数
  submit:function(){
    if (this.data.imgsUrl.length == 0 || this.data.checkboxList.length==0){
      wx.showModal({
        title: '警告',
        content: '请您填写信息',
        confirmText:'继续填写',
        cancelText:"孙子不填",
        success:(res)=>{
          if(res.confirm){
          }else{
            wx.redirectTo({
              url: '../index/index'
            })
          }
        }
      })
    }else{
      wx.request({
        url:'https://www.easy-mock.com/mock/5a2546bc97716c2a747762b9/wxofo/trouble#!method=get',
        success:(res)=>{
          wx.showToast({
            title: '提交成功',
          })
          wx.redirectTo({
            url: '../index/index',
          })
        }
      })
    }
  },
  changeDes:function(e){
    this.data.bickValue ={
      num:this.data.bikeValue.num,
      des:e.detail.value
    }
  },
  changenum:function(e){
    this.data.bickValue = {
      num:e.detail.value,
      des:this.data.bikeValue.des
    }
  },
  del:function(e){
    var index = e.target.dataset.id;
    var curUrls = this.data.imgsUrl;
    curUrls.splice(index,1);
    if(curUrls.length==0){
      this.setData({
        text:"拍照/相册"
      })
    }
    this.setData({
      imgsUrl:curUrls
    })
  },
  takePhoto:function(){
    wx.chooseImage({
      success: (res)=> {
        console.log(this)
        var _picUrls = this.data.imgsUrl;
        var currentPic = _picUrls.concat(res.tempFilePaths);
        this.setData({
          imgsUrl:currentPic,
          text:'+'
        })
      }
    })
  },
  bindchange:function(e){
    this.checkboxList = e.detail.value;
    if(this.ckeckboxList.length){
      this.setData({
        color: '#b9dd08'
      })
    }else{
       this.setData({
        color: '#f2f2f2'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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