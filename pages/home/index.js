import {
    BasicModel
} from '../../models/basic'
import {
    LocationModel
} from '../../models/location'
import {
    CarouselModel
} from '../../models/carousel'
import {
    CategoryModel
} from '../../models/category'

const basicModel = new BasicModel()
const locationModel = new LocationModel()
const carouselModel = new CarouselModel()
const categoryModel = new CategoryModel()

Page({
    data: {
        basic: null,
        location: null
    },

    onLoad: function () {
        basicModel.getBasic()
            .then(res => {
                this.setData({
                    basic: res
                })
            })
        locationModel.getLocation()
            .then(res => {
                this.setData({
                    location: res
                })
            })
        carouselModel.getCarousels()
            .then(res => {
                this.setData({
                    carousels: res
                })
            })
        categoryModel.getCategories()
            .then(res => {
                this.setData({
                    categories: res
                })
            })
    },

    makePhone: function (event) {
        console.log(this.data.basic.phone)
        wx.makePhoneCall({
            phoneNumber: this.data.basic.phone
        })
    },

    redirectAddress: function (event) {
        console.log(this.data.location)
        wx.openLocation({
            latitude: parseFloat(this.data.location.latitude),
            longitude: parseFloat(this.data.location.longitude),
            name: this.data.location.name,
            address: this.data.location.address
        })
    },
  
    onShareAppMessage: function () {
    }
})
