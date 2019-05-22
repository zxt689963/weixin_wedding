import {
    HTTP
}
    from '../utils/http.js'

class CategoryModel extends HTTP {
    data = null
    getCategories() {
        return this.request({
            url: 'categories'
        })
    }
    getCategory(id) {
        return this.request({
            url: 'categories/' + id
        })
    }
}

export {
    CategoryModel
}