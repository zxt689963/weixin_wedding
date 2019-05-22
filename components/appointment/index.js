import {
    AppointmentModel
} from '../../models/appointment'

const appointmentModel = new AppointmentModel()

Component({
    properties: {
    },

    data: {
    },

    methods: {
        formSubmit: function (e) {
            console.log(e.detail.behavior)
            appointmentModel.createAppointment(e.detail.value.name, e.detail.value.contact, e.detail.value.content)
                .then(res => {
                    wx.showToast({
                        title: '提交成功',
                        icon: "none"
                    })
                })
        },
    }
})
