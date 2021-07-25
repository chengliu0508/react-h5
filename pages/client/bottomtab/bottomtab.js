// pages/client1/bottomtab/bottomtab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    modulearr:{
      type:Array
    }
  },

  data: {
    active:0
  },

  attached(){

  },

  methods: {
    tapmodule(e){
      console.log(9999)
      let index = e.target && e.target.dataset.index
      this.setData({active:index})
      this.triggerEvent('currentChange', index) 
    }
  }
})
