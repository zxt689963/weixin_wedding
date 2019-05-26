import {
    CarouselModel
} from '../../models/carousel'

const carouselModel = new CarouselModel()

Page({
    data: {
    },

    onLoad: function (options) {
        carouselModel.getCarousel()
            .then(res => {
                this.setData({
                    carousel: res
                })
            }).
            catch(res => {
                console.log(res);
            })
    }
})