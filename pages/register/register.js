Page({
  data: {
    needphone :'',
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
    this.setData({
      needphone : !!getApp().globalData.needphone,
      rules:getApp().globalData.needphone?this.data.rules:[{
        name: 'customerName',
        rules: {
          required: true,
          message: '昵称是必选项'
        },
      }]
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
    if(e.detail.errMsg && !e.detail.customerMobile){
      wx.showToast({
        icon:'error',
        title: '请手动输入！'
      })
    }else{
      this.setData({
        [`formData.customerMobile`]: e.detail.customerMobile
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
      if (!valid ) {
        const firstError = Object.keys(errors)
        if (firstError.length) {
          this.setData({
            error: errors[firstError[0]].message
          })
        }
      } else {
        wx.request({
          url: 'https://www.szzxh.top/api/customer/register',
          method:'post',
          header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
          },
          data:{
            customerOpenId:getApp().globalData.code,
            customerMobile:this.data.formData.customerMobile || '1234',
            customerName:this.data.formData.customerName,
            saler_id:getApp().globalData.saler_id,
            encryptedData:getApp().globalData.encryptedData,
            sessionKey:getApp().globalData.encryptedData,
            iv:getApp().globalData.iv
          },
          success(res) {
            console.log(res)
            if (res.data && res.data.code === 0) {
                wx.reLaunch({
                  url: '/pages/index/index',
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