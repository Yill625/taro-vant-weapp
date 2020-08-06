import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem } from '@tarojs/components'
import './index.scss'
import '../../components/vant-weapp/common/index.wxss'
import { list, detail } from '../../servers/servers'

export default class Index extends Component {
  state = {
    list: [
      {
        title: '桌面壁纸',
        images: [
          {
            title: '桌面壁纸',
            url: 'http://pic1.win4000.com/mobile/2020-07-29/5f2133c47d21e.jpg',
            name: 'wallpaper'
          }
        ]
      },
      {
        title: '手机壁纸',
        images: [
          {
            title: '手机壁纸',
            url: 'http://pic1.win4000.com/mobile/2020-06-18/5eeb1be53c3ad.jpg',
            name: 'mobile'
          }
        ]
      },
      {
        title: '壁纸大全',
        images: [
          {
            title: '壁纸大全',
            url: 'http://pic1.win4000.com/pic/e/04/5a2f44455f.jpg',
            name: 'retu'
          }
        ]
      },
      {
        title: '美女壁纸',
        images: [
          {
            title: '美女壁纸',
            url: 'http://pic1.win4000.com/pic/d/5d/abfdf6e14b.jpg',
            name: 'meitu'
          }
        ]
      }
    ]
  }
  config = {
    navigationBarTitleText: '首页',
    // 定义需要引入的第三方组件
    usingComponents: {
      'van-image': '../../components/vant-weapp/image/index',
      'van-row': '../../components/vant-weapp/row/index',
      'van-col': '../../components/vant-weapp/col/index'
    }
  }

  componentWillMount() {}

  toList(url) {
    Taro.redirectTo({ url: '/pages/index/index?name=' + url })
  }
  change(e) {
    Taro.setNavigationBarTitle({
      title: this.state.list[e.currentTarget.current].images[0].title
    })
  }
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='inde'>
        <Swiper
          className='swiper'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay
          onChange={this.change.bind(this)}
        >
          {this.state.list.map((item, index) => {
            return (
              <SwiperItem key={index}>
                <View className='swiperItem'>
                  <van-image
                    width='100%'
                    fit='widthFix'
                    lazy-load
                    src={item.images[0].url}
                    onClick={this.toList.bind(this, item.images[0].name)}
                  ></van-image>
                </View>
              </SwiperItem>
            )
          })}
        </Swiper>
      </View>
    )
  }
}
