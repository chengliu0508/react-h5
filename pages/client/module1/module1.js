// pages/client1/module1/module1.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  data: {
    showlist:true,
    img: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/vr/panos/chufangoyf0.tiles/thumb.jpg?t=1600234778872',
    module1: [],
    current:{}
  },
  attached(){
    let module1 = [
      {
        icon:'',
        url:'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/vr/panos/ketingn0fm.tiles/thumb.jpg?t=1601282506222',
        title:'客厅'
      },{
        icon:'',
        url:'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/vr/panos/chufangoyf0.tiles/thumb.jpg?t=1600234778872',
        title:'厨房'
      },{
        icon:'',
        url:'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/vr/panos/720yuexiuzhanglong-xiangmu0000v83w.tiles/thumb.jpg?t=1600237375289',
        title:'阳台'
      }
    ]
     this.setData({
      module1,
      current: module1[0]
     })
  },
  methods: {
    closelist(){
      this.setData({showlist:!this.data.showlist})
    },
    selectImg(e){
      let index = e.currentTarget.dataset.index
      this.setData({
        current: this.data.module1[index]
      })
    }
  }
})
