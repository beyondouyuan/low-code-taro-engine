
    import React, { Component, Fragment } from 'react'

    import { View } from "@tarojs/components"
		import { Swiper } from "@tarojs/components"
		import { SwiperItem } from "@tarojs/components"
		import { AtNoticebar } from "taro-ui"
    export default class Index extends Component {
      render () {
        return (
          <Fragment>
            <View ><Swiper  vertical={true} circular={true} indicatorColor="#999" indicatorActiveColor="#333" indicatorDots={true} autoplay={true}><SwiperItem ><View ></View></SwiperItem><SwiperItem ><View ></View></SwiperItem><SwiperItem ><View ></View></SwiperItem></Swiper><AtNoticebar  children="这是 NoticeBar 通告栏"></AtNoticebar></View>
          </Fragment>
        )
      }
    }