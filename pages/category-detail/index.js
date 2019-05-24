import {
    CategoryModel
} from '../../models/category'
import {
    BasicModel
} from '../../models/basic'

const categoryModel = new CategoryModel()
const basicModel = new BasicModel()

Page({
    data: {

    },

    onLoad: function (options) {
        const bid = options.bid
        categoryModel.getCategory(bid)
            .then(res => {
                this.setData({
                    category: res
                })
            }).
            catch(res => {
                console.log(res);
            })
        
        basicModel.getBasic()
            .then(res => {
                this.setData({
                    basic: res
                })
            }).
            catch(res => {
                console.log(res);
            })
    },

    makePhone: function (event) {
        wx.makePhoneCall({
            phoneNumber: this.data.basic.phone
        })
    },

    redirectAppointment: function(event){
        wx.redirectTo({
            url: '/pages/appointment/index'
        })
        console.log("hello world")
    },

    onShareAppMessage: function () {

    }
})