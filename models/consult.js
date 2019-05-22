import {
    HTTP
}
from '../utils/http.js'

class ConsultModel extends HTTP {
    data = null
    createConsult(name, contact) {
        return this.request({
            method: 'POST',
            url: 'consult',
            data: {
                name: name,
                contact: contact
            }
        })
    }
}

export {
    ConsultModel
}