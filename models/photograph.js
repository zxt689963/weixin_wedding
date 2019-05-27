import {
    HTTP
}
from '../utils/http'

class PhotographModel extends HTTP {
    data = null
    getPhotographs() {
        return this.request({
            url: 'photographs'
        })
    }
    getPhotograph(id) {
        return this.request({
            url: 'photographs/' + id
        })
    }
}

export {
    PhotographModel
}