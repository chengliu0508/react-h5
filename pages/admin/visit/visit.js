import {formatTime} from '../../../utils/util'
Component({
  properties: {

  },

  data: {
    formatTime,
    visitList:[],
  },

  attached(){
     this.requestlist()
  },
  methods: {
    requestlist (){
      let _this = this
      wx.request({
        url: 'https://www.szzxh.top/api/saler/getCompany', //仅为示例，并非真实的接口地址
        data: {
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
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
    clickphone(e){
      let phoneNumber = String(e.currentTarget.dataset.phone)
      wx.makePhoneCall({
        phoneNumber //仅为示例，并非真实的电话号码
      })
    }
  }
})
