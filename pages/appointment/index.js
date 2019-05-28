import {
    CarouselModel
} from '../../models/carousel'

const carouselModel = new CarouselModel()

Page({
    data: {
        loadingCenter: true
    },

    onLoad: function (options) {
        carouselModel.getCarousel()
            .then(res => {
                this.setData({
                    loadingCenter: false,
                    carousel: res
                })
            }).
            catch(res => {
                console.log(res);
            })
    }
})