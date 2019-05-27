import {
    PhotographModel
} from '../../models/photograph'
import {
    BasicModel
} from '../../models/basic'

const photographModel = new PhotographModel()
const basicModel = new BasicModel()

Page({
    data: {
        photograph: null,
        basic: null
    },

    onLoad: function (options) {
        const bid = options.bid
        photographModel.getPhotograph(bid)
            .then(res => {
                this.setData({
                    photograph: res
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
