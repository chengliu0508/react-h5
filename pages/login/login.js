Page({
  data: {
    needUserInfo: false,
    formData: {

    },
    rules: [{
      name: 'customerName',
      rules: {
        required: true,
        message: '昵称是必选项'
      },
    }, {
      name: 'customerMobile',
      rules: [{
        required: true,
        message: 'mobile必填'
      }, {
        mobile: true,
        message: 'mobile格式不对'
      }],
    }],
    isAgree: false,
  },
  onLoad() {
    this.init()
  },
  init() {
    const _this = this
    wx.login({
      success: res => {
        if (res.code) {
          wx.request({
            url: 'https://www.szzxh.top/api/saler/login',
            data: {
              salerOpenid: res.code
            },
            success(res) {
              if (res.data) {
                console.log('用户信息',res.data)
                _this.setData({
                  needUserInfo:true
                })
              }
            },
            fail(res) {
              console.log('获取销售用户接口失败！～')
            }
          })
        }
      },
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
            [`formData.customerName`]: res.userInfo.nickName
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
  bindAgreeChange: function (e) {
    this.setData({
      isAgree: !!e.detail.value.length
    });
  },
  submitForm() {
    this.selectComponent('#form').validate((valid, errors) => {
      if (!valid || !this.data.isAgree) {
        const firstError = Object.keys(errors)
        if (firstError.length) {
          this.setData({
            error: errors[firstError[0]].message
          })
        }
        if (!this.data.isAgree) {
          this.setData({
            error: '请先阅读并同意《相关条款》'
          })
        }
      } else {
        wx.request({
          url: 'https://www.szzxh.top/api/customer/register',
          data:{
            customerOpenId:getApp().globalData.code,
            ...this.data.formData
          },
          success(res) {
            console.log(res)
            if (res.data && res.data.code === 0) {
                wx.reLaunch({
                  url: '/pages/client/client',
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