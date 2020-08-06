import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import '../../components/vant-weapp/common/index.wxss'
import { list, detail } from '../../servers/servers'

export default class Index extends Component {
  state = {
    list: []
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

  componentWillMount() {
    Taro.showLoading()
    list().then(res => {
      this.setState({
        list: res
      })
      Taro.hideLoading()
    })
  }

  preview(url) {
    Taro.showLoading()
    detail(url).then(res => {
      console.log(res)
      Taro.previewImage({
        urls: res
      })
      Taro.hideLoading()
    })
  }
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='inde'>
        {this.state.list.map((item, index) => {
          return (
            <View key={index}>
              <View className='title'>{item.title}</View>
              <van-row>
                {item.images.map((item1, index1) => {
                  return (
                    <van-col span='8' key={index1}>
                      <van-image
                        width='100%'
                        fit='widthFix'
                        lazy-load
                        src={item1.url}
                        onClick={this.preview.bind(this, item1.detail)}
                      ></van-image>
                    </van-col>
                  )
                })}
              </van-row>
            </View>
          )
        })}
      </View>
    )
  }
}
