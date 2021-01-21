结构化数据

{
    "appName": "",
    "appId": "",
    "desc": "",
    "appConfig": {},
    "menus": [
        {
            "uuid": "8b961ea8-38b3-44bb-955f-bbb009a1f099",
            "selectedIconPath": "http://xiaobinbincdn.oss-cn-beijing.aliyuncs.com/cate-active.png",
            "iconPath": "http://xiaobinbincdn.oss-cn-beijing.aliyuncs.com/cate.png",
            "pageName": "首页",
            "pageId": "1c09774b-4a2d-414d-a5ee-8e2238c8f23c"
        },
        {
            "uuid": "32f8c4b9-7ebc-459e-bb87-363beba8e029",
            "selectedIconPath": "http://xiaobinbincdn.oss-cn-beijing.aliyuncs.com/home-active.png",
            "iconPath": "http://xiaobinbincdn.oss-cn-beijing.aliyuncs.com/home.png",
            "pageName": "列表",
            "pageId": "37b75348-f81b-4d28-9d13-445140b10c5e"
        }
    ],
    "pages": [
        {
            "pageName": "未命名",
            "pageId": "1c09774b-4a2d-414d-a5ee-8e2238c8f23c",
            "preview": "",
            "templateGroupId": "",
            "templateIds": [],
            "pageConfig": {},
            "components": [
                {
                    "type": "View",
                    "name": "布局组件",
                    "componentSource": {
                        "npm": "@tarojs/components: 3.0.7"
                    },
                    "children": [
                        {
                            "uuid": "b7b24916-a6cd-43e2-ba43-c28db2e86578",
                            "id": "01",
                            "width": "",
                            "height": "",
                            "sourceUrl": "",
                            "name": "轮播图",
                            "type": "Swiper",
                            "desc": "轮播图",
                            "version": "0.0.1",
                            "canNested": false,
                            "exclude": [],
                            "componentSource": {
                                "npm": "@tarojs/components: 3.0.7"
                            },
                            "userProps": {
                                "vertical": true,
                                "circular": true,
                                "indicatorColor": "#999",
                                "indicatorActiveColor": "#333",
                                "indicatorDots": true,
                                "autoplay": true
                            },
                            "children": [
                                {
                                    "type": "SwiperItem",
                                    "children": [
                                        {
                                            "type": "View",
                                            "userProps": {},
                                            "componentSource": {
                                                "npm": "@tarojs/components: 3.0.7"
                                            }
                                        }
                                    ],
                                    "componentSource": {
                                        "npm": "@tarojs/components: 3.0.7"
                                    }
                                },
                                {
                                    "type": "SwiperItem",
                                    "children": [
                                        {
                                            "type": "View",
                                            "userProps": {},
                                            "componentSource": {
                                                "npm": "@tarojs/components: 3.0.7"
                                            }
                                        }
                                    ],
                                    "componentSource": {
                                        "npm": "@tarojs/components: 3.0.7"
                                    }
                                },
                                {
                                    "type": "SwiperItem",
                                    "children": [
                                        {
                                            "type": "View",
                                            "userProps": {},
                                            "componentSource": {
                                                "npm": "@tarojs/components: 3.0.7"
                                            }
                                        }
                                    ],
                                    "componentSource": {
                                        "npm": "@tarojs/components: 3.0.7"
                                    }
                                }
                            ],
                            "propertySetting": []
                        },
                        {
                            "uuid": "407d55b8-4938-4920-b897-372712726cd2",
                            "id": "02001001",
                            "width": "",
                            "height": "",
                            "sourceUrl": "",
                            "name": "通告栏",
                            "type": "AtNoticebar",
                            "desc": "通告栏",
                            "version": "0.0.1",
                            "canNested": false,
                            "exclude": [],
                            "userProps": {
                                "children": "这是 NoticeBar 通告栏"
                            },
                            "componentSource": {
                                "npm": "taro-ui:^3.0.0-alpha.3"
                            }
                        }
                    ],
                    "userProps": {},
                    "uuid": "5be68443-8dd3-497d-aad0-0194a0110067"
                }
            ]
        },
        {
            "pageName": "商品列表",
            "pageId": "37b75348-f81b-4d28-9d13-445140b10c5e",
            "preview": "页面效果预览图地址",
            "templateGroupId": "",
            "templateIds": [],
            "pageConfig": {
                "backgroundColor": "#f5f5f5",
                "navigationBarBackgroundColor": "#fff",
                "navigationBarTextStyle": "black",
                "backgroundImage": ""
            },
            "components": [
                {
                    "type": "View",
                    "name": "布局组件",
                    "componentSource": {
                        "npm": "@tarojs/components: 3.0.7"
                    },
                    "children": [
                        {
                            "uuid": "b7b24916-a6cd-43e2-ba43-c28db2e86578",
                            "id": "01",
                            "width": "",
                            "height": "",
                            "sourceUrl": "",
                            "name": "轮播图",
                            "type": "Swiper",
                            "desc": "轮播图",
                            "version": "0.0.1",
                            "canNested": false,
                            "exclude": [],
                            "componentSource": {
                                "npm": "@tarojs/components: 3.0.7"
                            },
                            "userProps": {
                                "vertical": true,
                                "circular": true,
                                "indicatorColor": "#999",
                                "indicatorActiveColor": "#333",
                                "indicatorDots": true,
                                "autoplay": true
                            },
                            "children": [
                                {
                                    "type": "SwiperItem",
                                    "children": [
                                        {
                                            "type": "View",
                                            "userProps": {},
                                            "componentSource": {
                                                "npm": "@tarojs/components: 3.0.7"
                                            }
                                        }
                                    ],
                                    "componentSource": {
                                        "npm": "@tarojs/components: 3.0.7"
                                    }
                                },
                                {
                                    "type": "SwiperItem",
                                    "children": [
                                        {
                                            "type": "View",
                                            "userProps": {},
                                            "componentSource": {
                                                "npm": "@tarojs/components: 3.0.7"
                                            }
                                        }
                                    ],
                                    "componentSource": {
                                        "npm": "@tarojs/components: 3.0.7"
                                    }
                                },
                                {
                                    "type": "SwiperItem",
                                    "children": [
                                        {
                                            "type": "View",
                                            "userProps": {},
                                            "componentSource": {
                                                "npm": "@tarojs/components: 3.0.7"
                                            }
                                        }
                                    ],
                                    "componentSource": {
                                        "npm": "@tarojs/components: 3.0.7"
                                    }
                                }
                            ],
                            "propertySetting": []
                        },
                        {
                            "uuid": "407d55b8-4938-4920-b897-372712726cd2",
                            "id": "02001001",
                            "width": "",
                            "height": "",
                            "sourceUrl": "",
                            "name": "通告栏",
                            "type": "AtNoticebar",
                            "desc": "通告栏",
                            "version": "0.0.1",
                            "canNested": false,
                            "exclude": [],
                            "userProps": {
                                "children": "这是 NoticeBar 通告栏"
                            },
                            "componentSource": {
                                "npm": "taro-ui:^3.0.0-alpha.3"
                            }
                        }
                    ],
                    "userProps": {},
                    "uuid": "5be68443-8dd3-497d-aad0-0194a0110067"
                }
            ]
        }
    ]
}