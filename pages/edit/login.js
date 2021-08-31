Page({
  data: {
    formData: {
    },
    rules: [{
      name: 'salerName',
      rules: {
        required: true,
        message: '名字是必选项'
      },
    }],
    accountIndex:0,
    companylistoptions:[],
    companylist:[]
  },
  onLoad() {
     this.setNavTitle()  
     this.requestCompany()
  },
  setNavTitle(){
    let currenturl = getApp().getCurrentPages()
    let register = currenturl.type ==='register'
    wx.setNavigationBarTitle({
      title: register?'注册':"修改信息"
    })
  },
  requestCompany (){
    let _this = this
    wx.request({
      url: 'https://www.ydvr.xyz/api/saler/getCompany', //仅为示例，并非真实的接口地址
      data: {
      },
      success (res) {
        console.log(res.data)
        if(res.data.data){
          _this.setData({
            companylistoptions:res.data.data.map(item=>item.companyName),
            companylist:res.data.data
          })
        }
      }
    })
  },
  getUserProfile(e) {
    let _this = this
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        if(res.userInfo){
          getApp().globalData.userInfo = res.userInfo
          _this.setData({
            [`formData.salerName`]: res.userInfo.nickName
          })
        }
      }
    })
  },
  bindAccountChange(e){
    this.setData({
      accountIndex: e.detail.value
    })
  },
  formInputChange(e) {
    const {
      field
    } = e.currentTarget.dataset
    this.setData({
      [`formData.${field}`]: e.detail.value
    })
  },
  submitForm() {
    this.selectComponent('#form').validate((valid, errors) => {
      if (!valid) {
        const firstError = Object.keys(errors)
        if (firstError.length) {
          this.setData({
            error: errors[firstError[0]].message
          })
        }
      } else {
        wx.request({
          method:'POST',
          url: 'https://www.ydvr.xyz/api/saler/register',
          header:{
            'content-type' : 	'application/x-www-form-urlencoded'
          },
          data:{
            openId:getApp().globalData.openId,
            salerName:this.data.formData.salerName,
            salerCompany:this.data.companylistoptions[this.data.accountIndex]
          },
          success(res) {
            console.log('销售端注册成功，返回信息：',res,getApp().globalData)
            if (res.data && res.data.code === 0) {
              getApp().globalData.qrcode = res.data.qrcode
                wx.reLaunch({
                  url: '/pages/admin/admin',
                })
            } 
          },
          fail(res) {
            wx.showToast({
              icon:'error',
              title: '接口失败！'
            })
          }
        })
      }
    })
  }
})