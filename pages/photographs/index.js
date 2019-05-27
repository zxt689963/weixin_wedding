import {
    PhotographModel
} from '../../models/photograph'

const photographModel = new PhotographModel()

Page({
    data: {

    },

    onLoad: function (options) {
        photographModel.getPhotographs()
            .then(res => {
                this.setData({
                    photographs: res
                })
            }).
            catch(res => {
                console.log(res);
            })
    },

    onTap(event) {
        const bid = event.target.dataset.id
        wx.navigateTo({
            url: `/pages/photograph-detail/index?bid=${bid}`
        })
    },

    onShareAppMessage: function () {
    }
})