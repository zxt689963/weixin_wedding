import {
    CategoryModel
} from '../../models/category'
import {
    BasicModel
} from '../../models/basic'

const categoryModel = new CategoryModel()
const basicModel = new BasicModel()

Page({
    data: {
      contentList:[
        {
          title:'亮点',
          content:'首席摄影师团队尊贵服务\n首席摄影师团队尊贵服务\n首席摄影师团队尊贵服务\n首席摄影师团队尊贵服务\n....'
        },
        {
          title:'适用年龄',
          content:'0-12岁'
        },
        {
          title:'时装造型',
          content:'3套'
        },
        {
          title:'服装说明',
          content:'提供服装造型3组'
        },
        {
          title:'精修/拍摄',
          content:'18/60张'
        },
        {
          title:'摄影师',
          content:'首席摄影师'
        }
      ],
      detailedList:'拍摄服务\n首席摄影师拍摄服务\n提供宝贝服装3套（服装任选）\n ....'
    },

    onLoad: function (options) {
        const bid = options.bid
        categoryModel.getCategory(bid)
            .then(res => {
                this.setData({
                    category: res
                })
            }).
            catch(res => {
                console.log(res);
            })

        basicModel.getBasic()
            .then(res => {
                this.setData({
                    basic: res
                })
            }).
            catch(res => {
                console.log(res);
            })
    },

    makePhone: function (event) {
        wx.makePhoneCall({
            phoneNumber: this.data.basic.phone
        })
    },

    redirectAppointment: function(event){
        wx.redirectTo({
            url: '/pages/appointment/index'
        })
        console.log("hello world")
    },

    onShareAppMessage: function () {

    }
})
