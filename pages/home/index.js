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
  
    onShareAppMessage: function () {
    }
})
