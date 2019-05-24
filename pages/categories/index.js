import {
    CategoryModel
} from '../../models/category'

const categoryModel = new CategoryModel()

Page({
    data: {

    },

    onLoad: function (options) {
        categoryModel.getCategories()
            .then(res => {
                this.setData({
                    categories: res
                })
            }).
            catch(res => {
                console.log(res);
            })
    },

    onTap(event) {
        const bid = event.target.dataset.id
        console.log(bid)
        wx.navigateTo({
            url: `/pages/category-detail/index?bid=${bid}`
        })
    },

    onShareAppMessage: function () {
    }
})