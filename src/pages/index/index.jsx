import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";
import '../../components/vant-weapp/dist/common/index.wxss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: "首页",
    navigationStyle: "custom",
    // 定义需要引入的第三方组件
    usingComponents: {
      "wxnav": "../../components/navBar/navBar", // 书写第三方组件的相对路径
      "vant-button": "../../components/vant-weapp/dist/button/index", // 书写第三方组件的相对路径
      "vant-card": "../../components/vant-weapp/dist/card/index", // 书写第三方组件的相对路径
      "van-nav-bar": "../../components/vant-weapp/dist/nav-bar/index", // 书写第三方组件的相对路径
    },
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  onClickLeft(){
    console.log(1212)
  }
  onClickRight(){
    console.log(1111111111111111111111111111111111)
  }
  render() {
    const navBar = true;
    const title = 121211;
    return (
      <View className='inde'>
        {/* <van-nav-bar
          title='标题'
          left-text='返回'
          right-text='按钮'
          left-arrow
          onclick-left={this.onClickLeft.bind(this)}
          onclick-right={this.onClickRight.bind(this)}
        /> */}
         <wxnav navBar={navBar} back title={title}></wxnav>
        <Text>Hello world!</Text>
        <View className='van-hairline--bottom van-ellipsis' style='height:200px;width:100px'>法大师傅大师傅士大夫士大夫士大夫士大夫反对法士大夫士大夫的</View>
        <vant-card num='2'
          price='2.00'
          desc='描述信息'
          title='商品标题'
          style='margin-top:10px;'
        ></vant-card>
        <vant-button type='primary'>1212</vant-button>



      </View>
    );
  }
}
