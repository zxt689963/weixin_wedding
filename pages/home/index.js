import {
    LocationModel
} from '../../models/location'
import {
    CarouselModel
} from '../../models/carousel'
import {
    PhotographModel
} from '../../models/photograph'
import {
    BasicModel
} from '../../models/basic'

const locationModel = new LocationModel()
const carouselModel = new CarouselModel()
const photographModel = new PhotographModel()
const basicModel = new BasicModel()

Page({
    data: {
        location: null,
        carousels: null,
        photographs: null,
        basic: null,
        loadingCenter: true
    },

    onLoad: function () {
        locationModel.getLocation()
            .then(res => {
                this.setData({
                    location: res
                })
                return carouselModel.getCarousels()
            })
            .then(res => {
                this.setData({
                    carousels: res
                })
                return photographModel.getPhotographs()
            })
            .then(res => {
                this.setData({
                    photographs: res
                })
                return basicModel.getBasic()
            })
            .then(res => {
                this.setData({
                    basic: res,
                    loadingCenter: false  
                })
            }).
            catch(res => {
                console.log(res);
            })
    },
  
    onShareAppMessage: function () {
    }
})
