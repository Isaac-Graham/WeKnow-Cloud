const app = getApp();
Component({
	data: {
		StatusBar: app.globalData.StatusBar,
		CustomBar: app.globalData.CustomBar,
		list: [{
			title: '李涵一',
			img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
			url: '../indexes/indexes'
		},
		{
			title: '张子涵',
			img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
			url: '../animation/animation'
		},
		{
			title: '许涵博',
			img: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
			url: '../drawer/drawer'
		},
		{
			title: '田闰心',
			img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
			url: '../verticalnav/verticalnav'
		}
		]
	},
	methods: {
		toChild(e) {
			wx.navigateTo({
				url: e.currentTarget.dataset.url
			})
		},
	},
	pageLifetimes: {
		show() {
			if (typeof this.getTabBar === 'function' &&
				this.getTabBar()) {
				this.getTabBar().setData({
					selected: 2
				})
			}
		}
	}
});