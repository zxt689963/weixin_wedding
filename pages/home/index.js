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
    PhotographModel
} from '../../models/photograph'

const basicModel = new BasicModel()
const locationModel = new LocationModel()
const carouselModel = new CarouselModel()
const photographModel = new PhotographModel()

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
            }).
            catch(res => {
                console.log(res);
            })
        locationModel.getLocation()
            .then(res => {
                this.setData({
                    location: res
                })
            }).
            catch(res => {
                console.log(res);
            })
        carouselModel.getCarousels()
            .then(res => {
                this.setData({
                    carousels: res
                })
            }).
            catch(res => {
                console.log(res);
            })
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
  
    onShareAppMessage: function () {
    }
})
