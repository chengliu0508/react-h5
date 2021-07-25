// admin/home/home.js
Component({
  properties: {
    userinfo:{
      type:Object,
      default:{nickName:'xiaoming'}
    }
  },

  data: {
    qrcode:'',
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
