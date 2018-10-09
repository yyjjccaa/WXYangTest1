//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    indicatorDots: true,
    autoplay: true,
    interval: 4000,
    duration: 800,
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    ],

    contents: [
      {
        url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        str: '第一个视屏'
      }, {
        url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        str: '第2个视屏'
      }, {
        url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        str: '第3个视屏'
      }, {
        url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        str: '第4个视屏'
      }
    ],
    listData: [
      {
        url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        avtorUrl: '../../images/avtor.jpg',
        title: '第一个视屏',
        content: '文学是以语言文字为工具，比较形象化地反映客观现实、表现作家心灵世界的艺术，包括诗歌、散文、小说、剧本、寓言、童话等体裁，是文学的重要表现形式，以不同的形式即体裁，表现内心情感，再现一定时期和一定地域的社会生活。作为学科门类理解的文学，包括中国语言文学、外国语言文学及新闻传播学。'
      }, {
        url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        avtorUrl: '../../images/avtor.jpg',
        title: '第2个视屏',
        content: '莎士比亚在埃文河畔斯特拉特福出生长大，18岁时与安妮·海瑟薇结婚，两人共生育了三个孩子：苏珊娜、双胞胎哈姆尼特和朱迪思。16世纪末到17世纪初的20多年期间莎士比亚在伦敦开始了成功的职业生涯，他不仅是演员、剧作家，还是宫内大臣剧团的合伙人之一，后来改名为国王剧团。1613年左右，莎士比亚退休回到埃文河畔斯特拉特福，3年后逝世。'
      }, {
        url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        avtorUrl: '../../images/avtor.jpg',
        title: '第3个视屏',
        content: '文学是以语言文字为工具，比较形象化地反映客观现实、表现作家心灵世界的艺术，包括诗歌、散文、小说、剧本、寓言、童话等体裁，是文学的重要表现形式，以不同的形式即体裁，表现内心情感，再现一定时期和一定地域的社会生活。作为学科门类理解的文学，包括中国语言文学、外国语言文学及新闻传播学。'
      }, {
        url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        avtorUrl: '../../images/avtor.jpg',
        title: '第4个视屏',
        content: '莎士比亚在埃文河畔斯特拉特福出生长大，18岁时与安妮·海瑟薇结婚，两人共生育了三个孩子：苏珊娜、双胞胎哈姆尼特和朱迪思。16世纪末到17世纪初的20多年期间莎士比亚在伦敦开始了成功的职业生涯，他不仅是演员、剧作家，还是宫内大臣剧团的合伙人之一，后来改名为国王剧团。1613年左右，莎士比亚退休回到埃文河畔斯特拉特福，3年后逝世。'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../../pages/mine/mine',
    })
  },

  onLoad: function () {
    console.log("Yang", app.getMyName)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  bindLoad: function(e){
    console.log("Yang",e)
  },

  onPullDownRefresh: function () {
    console.log("Yang", "刷新")
  },
  onShow: function () {
    //console.log("Yang","onshow_index")
  }
})
