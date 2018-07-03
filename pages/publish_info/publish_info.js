// pages/publish_info/publish_info.js
const app = getApp()

Page({
    data: {
        showCanvas: false,
        //房屋类型
        houseType: {
            index: 0,
            list: ['住宅', '商铺']
        },
        //付款方式
        payWay: {
            index: 0,
            list: ['请选择', '押一付一', '押一付三', '半年付', '年付']
        },
        //付款方式
        type: {
            index: 0,
            list: ['请选择', '写字楼', '商铺', '工业厂房', '住宅']
        },
        //房屋装修
        houseDecoration: {
            index: 0,
            list: ['未装修', '简装', '中装', '精装', '豪装']
        },
        //具体位置
        address: {
            index: [0, 0, 0],
            list: [
                [{
                    ID: -1,
                    Name: '请选择'
                }],
                [{
                    ID: -1,
                    Name: '请选择'
                }],
                [{
                    ID: -1,
                    Name: '请选择'
                }]
            ]
        },
        //房屋朝向
        houseOrientation: {
            index: 0,
            list: ['请选择', '东', '南', '西', '北', '东南', '西南', '东北', '西北']
        },
        //房屋户型
        houseStyle: {
            index: [0, 0, 0],
            list: [
                [
                    {
                        id: 0,
                        name: '请选择'
                    },
                    {
                        id: 1,
                        name: '1室'
                    },
                    {
                        id: 2,
                        name: '2室'
                    },
                    {
                        id: 3,
                        name: '3室'
                    }],
                [
                    {
                        id: 0,
                        name: '请选择'
                    },
                    {
                        id: 1,
                        name: '1厅'
                    },
                    {
                        id: 2,
                        name: '2厅'
                    },
                    {
                        id: 3,
                        name: '3厅'
                    }],
                [
                    {
                        id: 0,
                        name: '请选择'
                    },
                    {
                        id: 1,
                        name: '1卫'
                    },
                    {
                        id: 2,
                        name: '2卫'
                    },
                    {
                        id: 3,
                        name: '3卫'
                    }]
            ]
        },
        //更多
        more: true,
        //地铁线
        metroLine: [{
            subway_id: -1,
            subway_name: '无'
        }],
        //地铁下标
        metroLineIndex: 0,
        //小区
        community: [{
            community_id: -1,
            community_name: '无'
        }],
        //小区下标
        communityIndex: 0,
        //经纬度数组
        orientation: [],
        //小区主图
        communityMainImg: '',
        communityTwoImg: [],
        //房屋主图
        HouseMainImg: '',
        //房屋合同照片
        HouseContractImg: '',
        HouseTwoImg: []
    },

    onLoad() {
        this.getProvince()
    },

    //初始化省
    getProvince() {
        return app.api.province().then(res => {
            this.setData({
                'address.list[0]': this.data.address.list[0].concat(res.list)
            })
        })
    },

    //类型值改变事件
    bindType(e) {
        this.setData({
            'type.index': e.detail.value
        })
    },

    //付款方式值改变事件
    bindPayWay(e) {
        this.setData({
            'payWay.index': e.detail.value
        })
    },

    //房屋装修值改变事件
    bindHouseDecoration(e) {
        this.setData({
            'houseDecoration.index': e.detail.value
        })
    },

    //获取地址
    // getAddress(e) {
    //
    // },
    cancelAddressIndex() {
        this.setData({
            'address.index': [0, 0, 0]
        })
        wx.showToast({
            title: '请选择完整地址',
            icon: 'none'
        })

    },

    //地址确定事件
    bindAddressIndex(e) {
        let index = e.detail.value
        if (index[0] <= 0 || index[1] <= 0 || index[2] <= 0) {
            this.setData({
                'address.index': [0, 0, 0]
            })
            return wx.showToast({
                title: '请选择完整地址',
                icon: 'none'
            })
        }

        this.setData({
            'address.index': e.detail.value
        })
    },

    //地址值改变事件
    bindAddressValue(e) {
        let {
            column,
            value
        } = e.detail
        let {
            ID
        } = this.data.address.list[column][value]
        if (column === 0) {
            let index = this.data.address.index
            index[0] = value
            index[1] = -1
            index[2] = -1

            this.setData({
                'address.index': index,
                'address.list[1]': [{
                    ID: -1,
                    Name: '请选择'
                }],
                'address.list[2]': [{
                    ID: -1,
                    Name: '请选择'
                }]
            })
            app.api.getAreas({
                ID
            }).then(res => {
                this.setData({
                    'address.list[1]': [{
                        ID: -1,
                        Name: '请选择'
                    }].concat(res.list)
                })
            })
        }
        if (column === 1) {
            let index = this.data.address.index
            index[1] = value
            index[2] = -1
            this.setData({
                'address.list[2]': [{
                    ID: -1,
                    Name: '请选择'
                }]
            })
            app.api.getAreas({
                ID
            }).then(res => {
                this.setData({
                    'address.list[2]': [{
                        ID: -1,
                        Name: '请选择'
                    }].concat(res.list)
                })
            })
            app.api.getSubway({
                ID
            }).then(res => {
                this.setData({
                    metroLine: [{
                        subway_id: -1,
                        subway_name: '无'
                    }].concat(res.list)
                })
            })
        }
        if (column === 2) {
            app.api.getCommunity({
                ID
            }).then(res => {
                this.setData({
                    community: [{
                        community_id: -1,
                        community_name: '无'
                    }].concat(res.list)
                })
            })
        }
    },

    //地铁线选中事件
    metroLineSelected(e) {

        this.setData({
            metroLineIndex: e.detail.value
        })
    },

    //小区选中事件
    communitySelected(e) {
        this.setData({
            communityIndex: e.detail.value
        })
    },

    //选择经纬度
    latitudeAndLongitude() {
        wx.chooseLocation({
            success: (res) => {
                let orientation = [res.longitude, res.latitude]
                this.setData({orientation})
            }
        })
    },

    //房屋朝向值改变事件
    bindHouseOrientation(e) {
        this.setData({
            'houseOrientation.index': e.detail.value
        })
    },

    //户型下标改变事件
    bindHouseStyleIndex(e) {
        this.setData({
            'houseStyle.index': e.detail.value
        })
    },

    //户型值改变事件
    bindHouseStyleValue(e) {
        let {
            column,
            value
        } = e.detail
        console.log(this.data.houseStyle.list[column][value])
    },

    //切换发布的表单
    moreChange(e) {
        let bool = e.detail.value === '1'
        this.setData({
            more: bool
        })
    },

    //重置表单
    formReset() {

    },

    //提交表单
    formSubmit(e) {
        let {community_name, property, cost, car, location, metroLine, elevator, recommend, content, specific} = e.detail.value
        //location地点
        let province = this.data.address.list[0][location[0]].ID
        let city = this.data.address.list[1][location[1]].ID
        let areas = this.data.address.list[2][location[2]].ID
        //metroLine地铁线
        let site = this.data.metroLine[metroLine].subway_name
        site = site === '无' ? '' : site
        console.log(areas)
        if (areas === -1) {
            return wx.showToast({title: '请选择地点', icon: 'none'})
        }
        if (!property) {
            return wx.showToast({title: '请填写物业', icon: 'none'})
        }
        if (!cost) {
            return wx.showToast({title: '请填写物业费', icon: 'none'})
        }
        if (!car) {
            return wx.showToast({title: '请填写车位', icon: 'none'})
        }
        if (!elevator) {
            return wx.showToast({title: '请选择电梯房', icon: 'none'})
        }
        if (!recommend) {
            return wx.showToast({title: '请选择是否推荐首页', icon: 'none'})
        }
        if (!content) {
            return wx.showToast({title: '请填写小区介绍', icon: 'none'})
        }
        if (!specific) {
            return wx.showToast({title: '请填写详细地址', icon: 'none'})
        }
        if (!this.data.orientation.length) {
            return wx.showToast({title: '请选择经纬度', icon: 'none'})
        }
        if (!this.data.communityMainImg) {
            return wx.showToast({title: '请上传小区主图', icon: 'none'})
        }

        let param = {
            //小区标题
            community_name,
            //物业
            property,
            //物业费
            cost,
            //车位
            car,
            //电梯房
            elevator,
            //是否推荐首页
            recommend,
            //小区介绍,
            content,
            //省
            province,
            //市
            city,
            //区
            areas,
            //经纬度
            orientation: this.data.orientation,
            //地铁站名称
            site,
            //详细地址
            specific
        }

        app.api.addCommunity(param).then(res => {
            if (res.code === 100) {
                return wx.showToast({title: res.msg, icon: 'none'})
            }
            if (res.code === 200) {
                wx.uploadFile({
                    url: app.data.uploadImg,
                    filePath: this.data.communityMainImg,
                    name: 'community_image',
                    formData: {
                        id: res.data.community_id
                    },
                    success: res => {
                    }
                })
                for (let k of this.data.communityTwoImg) {
                    wx.uploadFile({
                        url: app.data.uploadImg,
                        filePath: k,
                        name: 'community_vice',
                        formData: {
                            id: res.data.community_id
                        },
                        success: res => {
                        }
                    })
                }
            }
        }).then(res => {
            wx.navigateBack({})
            wx.showToast({title: '小区添加成功', icon: 'none'})
        })
    },

    //小区主图
    communityMainImg() {
        wx.chooseImage({
            success: (res) => {
                let tempFilePaths = res['tempFilePaths'][0]
                this.setData({
                    communityMainImg: tempFilePaths
                })
            }
        })
    },

    //小区附图
    communityTwoImg() {
        wx.chooseImage({
            success: (res) => {
                if (this.data.communityTwoImg.length >= 4) {
                    return wx.showToast({title: '最多添加4张', icon: 'none'})
                }
                this.setData({
                    communityTwoImg: this.data.communityTwoImg.concat(res['tempFilePaths'][0])
                })
            }
        })
    },

    //住宅提交
    formHouseSubmit(e) {
        console.log(e.detail.value)
        let {location, metroLine, sex, scale, houseStyle, community_index, type, title, specific, area, rent, toward, floor, house_age, decorate, phone, membername, way, circle} = e.detail.value
        //location地点
        let province = this.data.address.list[0][location[0]].ID
        let city = this.data.address.list[1][location[1]].ID
        let areas = this.data.address.list[2][location[2]].ID
        //metroLine地铁线
        let site = this.data.metroLine[metroLine].subway_name
        site = site === '无' ? '' : site
        //小区Id
        let community_id = this.data.community[community_index].community_id
        //户型
        let room = houseStyle[0]
        let hall = houseStyle[1]
        let toilet = houseStyle[2]

        if (community_id === -1) {
            return wx.showToast({title: '请选择小区,或添加小区信息', icon: 'none'})
        }
        if (!title) {
            return wx.showToast({title: '请添加房屋标题', icon: 'none'})
        }
        if (!area) {
            return wx.showToast({title: '请添加面积', icon: 'none'})
        }
        if (!rent) {
            return wx.showToast({title: '请添加月租金', icon: 'none'})
        }
        if (!house_age) {
            return wx.showToast({title: '请添加楼龄', icon: 'none'})
        }
        if (!toward) {
            return wx.showToast({title: '请添加朝向', icon: 'none'})
        }
        if (!floor) {
            return wx.showToast({title: '请添加楼层', icon: 'none'})
        }
        if (!way) {
            return wx.showToast({title: '请选择付款方式', icon: 'none'})
        }
        if (!circle) {
            return wx.showToast({title: '请添加商圈名称', icon: 'none'})
        }
        if (!type) {
            return wx.showToast({title: '请选择类型', icon: 'none'})
        }
        if (areas === -1) {
            return wx.showToast({title: '请选择地点', icon: 'none'})
        }
        if (!specific) {
            return wx.showToast({title: '请添加详细地址', icon: 'none'})
        }
        if (!phone) {
            return wx.showToast({title: '请添加电话', icon: 'none'})
        }
        if (!membername) {
            return wx.showToast({title: '请添加联系人', icon: 'none'})
        }
        if (!this.data.orientation.length) {
            return wx.showToast({title: '请选择经纬度', icon: 'none'})
        }
        let param = {
            room, hall, toilet, scale, sex,
            province, city, areas, site,
            //房屋标题
            title,
            //详细地址
            specific,
            //面积
            area,
            //月租金
            rent,
            //朝向
            toward,
            //几楼
            floor,
            //房龄
            house_age,
            //装修
            decorate,
            //经纬度
            orientation: this.data.orientation,
            //联系电话
            phone,
            //联系人
            membername,
            //类型
            type,
            //付款方式
            way,
            //商圈名称
            circle
        }

        app.api.addLease(param).then(res => {
            if (res.code === 100) {
                return wx.showToast({title: res.msg, icon: 'none'})
            }
            if (res.code === 200) {
                wx.uploadFile({
                    url: app.data.uploadImg,
                    filePath: this.data.HouseMainImg,
                    name: 'community_image',
                    formData: {
                        id: res.data.lease_id
                    },
                    success: res => {
                    }
                })
                wx.uploadFile({
                    url: app.data.uploadImg,
                    filePath: this.data.HouseContractImg,
                    name: 'community_image',
                    formData: {
                        id: res.data.lease_id
                    },
                    success: res => {
                    }
                })
                for (let k of this.data.HouseTwoImg) {
                    wx.uploadFile({
                        url: app.data.uploadImg,
                        filePath: k,
                        name: 'community_vice',
                        formData: {
                            id: res.data.lease_id
                        },
                        success: res => {
                        }
                    })
                }
            }
        }).then(res => {
            wx.navigateBack({})
            wx.showToast({title: '小区添加成功', icon: 'none'})
        })

    },

    //房屋主图
    HouseMainImg() {
        wx.chooseImage({
            success: (res) => {
                let tempFilePaths = res['tempFilePaths'][0]
                this.setData({
                    HouseMainImg: tempFilePaths
                })
            }
        })
    },

    //房屋合同照
    HouseContractImg() {
        wx.chooseImage({
            success: (res) => {
                let tempFilePaths = res['tempFilePaths'][0]
                this.setData({
                    HouseContractImg: tempFilePaths
                })
            }
        })
    },

    //房屋附图
    HouseTwoImg() {
        wx.chooseImage({
            success: (res) => {
                if (this.data.HouseTwoImg.length >= 4) {
                    return wx.showToast({title: '最多添加4张', icon: 'none'})
                }
                this.setData({
                    HouseTwoImg: this.data.HouseTwoImg.concat(res['tempFilePaths'][0])
                })
            }
        })
    }
})