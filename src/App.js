import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Module1 from './component/module1'
import Bottomtab from './component/bottomtab'
import Module2 from './component/module2'

var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const useStyles = makeStyles({
  root: {
    position: "relative"
  },
  container: {
    height: `calc(100% - ${width / 375 * 50}px)`
  },
  bottom: {

  }
});

const tabs = [
  { label: '项目1' },
  { label: '项目2' },
  { label: '项目3' },
  { label: '项目4' },
  { label: '项目5' },
  { label: '项目6' },
]
const tabs1 = [
  { label: '房源1', value: 0, url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic26.nipic.com%2F20130104%2F8821914_182437666135_2.jpg&refer=http%3A%2F%2Fpic26.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630403300&t=ac121678cef397fa4810eb3a2158a9cd' },
  { label: '房源2', value: 1, url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fg.search1.alicdn.com%2Fimg%2Fbao%2Fuploaded%2Fi4%2Fi3%2F3316629412%2FO1CN01FMcH9S2JOkLW7pI7S_%21%213316629412.jpg&refer=http%3A%2F%2Fg.search1.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630403300&t=0c1724b49509786730df3df20f4bc7c8' },
  { label: '房源3', value: 2, url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic.jisutui.vip%2Fdata%2Fupload%2F2021%2F05%2Ff3d82eeaefrgg2vl.jpg&refer=http%3A%2F%2Fstatic.jisutui.vip&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630403300&t=a8aaebdea265865ca36166839f4d3c07' },
  { label: '房源4', value: 3, url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0630%252F40244f31j00qvir8h002ac000qo00f0c.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630403300&t=49602cc26018671f4bb77e04a30c2bb4' },
  { label: '房源5', value: 4, url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201201%2F30%2F20120130221359_u4dUj.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630403300&t=65df99fe7d84aa4b5a51fcd51dadc3c1' },
  { label: '房源6', value: 5, url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.zhimg.com%2Fv2-fef0dc2e635415e5da4d8c6446461a61_1200x500.jpg&refer=http%3A%2F%2Fpic2.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630403300&t=36cc78f5405a1c63af90cab5c69c4bc9' },]

const tabs2 = [
  { label: '日景', url: 'https://720yun.com/t/1avkzl7lrrm', tabimg: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/vr/panos/ketingn0fm.tiles/thumb.jpg?t=1601282506222' },
  { label: '夜景', url: 'https://720yun.com/t/08vkzl7lr1h', tabimg: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/vr/panos/zhuwei3q1l.tiles/thumb.jpg?t=1600234892242' },
  { label: '景观一', url: 'https://720yun.com/t/e7vkzl7ld8h', tabimg: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/vr/panos/720yuexiuzhanglong-xiangmu0000v83w.tiles/thumb.jpg?t=1600237375289' },
  { label: '景观二', url: 'https://720yun.com/t/dcvkzl7ld2w', tabimg: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/vr/panos/yangtai04d2.tiles/thumb.jpg?t=1601282544662' },
  { label: '景观三', url: 'https://720yun.com/t/1evkzl7ldpe', tabimg: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/vr/panos/720syuexiuzhanglong-quyu0000zxxa.tiles/thumb.jpg?t=1600237444562' },
  { label: '华发悦谷', url: 'https://720yun.com/t/b6vkter9g19', tabimg: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/vr/panos/ketingn0fm.tiles/thumb.jpg?t=1601282506222' },
]

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {value % 2 ? <Module1 tabs1={tabs1}></Module1> : <Module2 tabs2={tabs2}></Module2>}
      </div>
      <Bottomtab
        value={value}
        tabs={tabs}
        handleChange={e => {
          setValue(e)
        }}
        className={classes.bottom}>
      </Bottomtab>
    </div>

  );
}
