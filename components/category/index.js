Component({
    properties: {
        categories: {
            type: Array
        }
    },

    data: {
    },

    methods: {
        onTap(event) {
            const bid = event.target.dataset.id
            wx.navigateTo({
                url: `/pages/category-detail/index?bid=${bid}`
            })
        }
    }
})
