import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem } from '@tarojs/components'
import './index.scss'
import '../../components/vant-weapp/common/index.wxss'

export default class Index extends Component {
  state = {
    list: [
      'http://pic1.win4000.com/pic/3/14/0e5d22fd9f.jpg',
      'http://pic1.win4000.com/pic/3/a6/2c38652a3b_250_350.jpg'
    ]
  }
  config = {
    // 定义需要引入的第三方组件
    usingComponents: {
      'van-image': '../../components/vant-weapp/image/index'
    }
  }
  render() {
    return (
      <Swiper
        className='img'
        indicatorColor='#eaeaea'
        indicatorActiveColor='#333'
        indicatorDots
        autoplay
      >
        {this.state.list.map(item => {
          return (
            <SwiperItem>
              <View className='item'>
                <van-image
                  width='100%'
                  fit='widthFix'
                  lazy-load
                  src={item}
                ></van-image>
              </View>
            </SwiperItem>
          )
        })}
      </Swiper>
    )
  }
}
