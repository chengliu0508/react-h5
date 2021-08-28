import {formatTime} from '../../../utils/util'
Component({
  properties: {
    customers:{
      type:Array,
      default:[]
    }
  },
  observers: {
    'customers': function() {
      console.log('customers changed',this.data.customers)
    }
  },

  data: {
    formatTime
  },

  attached(){

  },
  methods: {
    clickphone(e){
      let phoneNumber = String(e.currentTarget.dataset.phone)
      wx.makePhoneCall({
        phoneNumber //仅为示例，并非真实的电话号码
      })
    }
  }
})
