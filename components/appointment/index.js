import {
    AppointmentModel
} from '../../models/appointment'

const appointmentModel = new AppointmentModel()

Component({
    methods: {
        formSubmit: function(e) {
            console.log(e.detail.behavior)
            appointmentModel.createAppointment(e.detail.value.name, e.detail.value.contact, e.detail.value.date, e.detail.value.time)
                .then(res => {
                    wx.showToast({
                        title: '提交成功',
                        icon: "none"
                    })
                }).
            catch(res => {
                console.log(res);
            })
        },
        bindDateChange: function(e) {
            var a = e.detail.value.split('-');
            this.setData({
                date: e.detail.value,
                year: a[0],
                month: a[1],
                day: a[2]
            })
        },
        bindTimeChange: function(e) {
            var t = e.detail.value.split(':')
            this.setData({
                time: e.detail.value,
                hour: t[0],
                minute: t[1]
            })
        }
    }
})