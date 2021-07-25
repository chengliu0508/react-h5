Page({
  data: {
    formData: {
    },
    rules: [{
      name: 'salerName',
      rules: {
        required: true,
        message: '昵称是必选项'
      },
    }, {
      name: 'salerCompany',
      rules: [{
        required: true,
        message: '公司必填'
      },
    }],
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
      url: 'https://www.szzxh.top/api/saler/getCompany', //仅为示例，并非真实的接口地址
      data: {
      },
      success (res) {
        console.log(res.data)
        if(res.data.data){
          _this.setData({
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
  getUserPhone(e){
    console.log('getUserPhone',e.detail)
    if(e.detail.errMsg && !e.detail.phoneNumber){
      wx.showToast({
        icon:'error',
        title: '请手动输入！'
      })
    }else{
      this.setData({
        [`formData.getPhoneNumber`]: e.detail.phoneNumber
      })
    }
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
          url: 'https://www.szzxh.top/api/saler/register',
          data:{
            salerOpenid:getApp().globalData.code,
            ...this.data.formData
          },
          success(res) {
            console.log(res)
            if (res.data && res.data.code === 0) {
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