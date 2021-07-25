import {formatTime} from '../../../utils/util'
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  data: {
    formatTime,
    visitList:[],
    userInfo: {nickName:'xiaoming'}, 
  },

  attached(){
    if(getApp().globalData.userInfo && getApp().globalData.userInfo.nickName){
      this.setData({ 
        userInfo: getApp().globalData.userInfo,
        hasUserInfo: true
      }) 
    }
     this.requestCompany()


  },
  methods: {
    requestCompany (){
      let _this = this
      wx.request({
        url: 'https://www.szzxh.top/api/saler/getCompany', //仅为示例，并非真实的接口地址
        data: {
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          console.log(res.data)

          let visitList = [
            {
              img:'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0703%2Fe437833cp00qvnese006gc000j900bzm.png&thumbnail=650x2147483647&quality=80&type=jpg',
              name:'周杰伦',
              phone:13148930718,
              time: 789212456123,
              sex:0
            },{
              img:'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0703%2Fe437833cp00qvnese006gc000j900bzm.png&thumbnail=650x2147483647&quality=80&type=jpg',
              name:'飞轮海',
              phone:13148930718,
              time: 7891233456123,
              sex:1
            }
          ].map(item=>{
            return {date:formatTime(item.time),...item}
          })

          _this.setData({visitList})
        }
      })
    },
    getUserProfile(e) { 
      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗 
      wx.getUserProfile({ 
        desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写 
        success: (res) => { 
          console.log('getUserProfile',res) 
          getApp().globalData.hasUserInfo = true
          getApp().globalData.userInfo = res.userInfo
  
          this.setData({ 
            userInfo: res.userInfo, 
            hasUserInfo: true 
          }) 
        } 
      }) 
    },
    edit(){
      wx.navigateTo({
        url: '../regester',
      })
    }
  }
})
