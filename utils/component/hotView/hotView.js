Component({
  options: {
    // 在组件定义时的选项中启用多slot支持
    multipleSlots: true 
  },


  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    imgUrl: {
      type: String,// 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '../../images/avtor.jpg', // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    textStr: {
      type: String,
      value:'默认',
    }
  },


  data: {
    // 这里是一些组件内部数据
    imgUrl:'',
    textStr:'',
  },


  methods: {
    // 这里是一个自定义方法
    myClick:function(){
      wx.showToast({
        title: this.data.textStr,
      })

    },
    myLongClick:function(){
      wx.showToast({
        title: this.data.imgUrl,
      })
    }
  }
})