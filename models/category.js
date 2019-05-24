import {
    HTTP
}
    from '../utils/http'

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