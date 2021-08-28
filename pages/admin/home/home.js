// admin/home/home.js
Component({
  properties: {
    userinfo:{
      type:Object,
      default:{
        company: "公司伊",
        id: 1,
        name: "张三",
        qrcode: ""
      }
    }
  },
  observers: {
    'userinfo': function() {
      console.log('userinfo changed',getApp().globalData,this.data.userinfo)
      this.setData({
        qrcode: this.data.userinfo.qrcode
      })
    }
  },

  data: {
    qrcode:'',
  },
  pageLifetimes:{
    show(){
      console.log('getApp().globalData',getApp().globalData,this.data.userinfo)
      this.setData({
        qrcode:getApp().globalData.qrcode || this.data.userinfo.qrcode
      })
    },
  },
  attached(){

  },
  methods: {
    edit(){
      wx.navigateTo({
        url: '/pages/edit/login',
      })
    }
  }
})
