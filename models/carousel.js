import {
    HTTP
}
    from '../utils/http.js'

class CarouselModel extends HTTP {
    data = null
    getCarousels() {
        return this.request({
            url: 'carousels'
        })
    }
}

export {
    CarouselModel
}