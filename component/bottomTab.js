// component/bottomTab.js
Component({
  properties: {

  },

  data: {
    current:0,
    list: [{
        "text": "首页",
        "iconPath": "/images/icon_API.png",
         "selectedIconPath": "/images/icon_API_HL.png"
    },
    {
      "text": "访客",
      "iconPath": "/images/icon_component.png",
      "selectedIconPath": "/images/icon_component_HL.png"
    }]
},
  methods: {
    tabChange(e) {
      let current = e.detail && e.detail.index 
      this.triggerEvent('currentChange', current)
        
    }
  }
})
