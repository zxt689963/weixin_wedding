import {
    HTTP
}
from '../utils/http'

class AppointmentModel extends HTTP {
    data = null
    createAppointment(name, contact, content) {
        return this.request({
            method: 'POST',
            url: 'appointment',
            data: {
                name: name,
                contact: contact,
                content: content
            }
        })
    }
}

export {
    AppointmentModel
}