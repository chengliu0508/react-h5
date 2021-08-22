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
    height: '100%'
  },
  bottomtab: {
    zIndex: 100,
    position: "absolute",
    height: `${width / 375 * 50}px`,
    bottom: '20px'
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
  {
    label: '越秀集团',
    value: 0,
    backimg: [
      {
        url: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/pinpaijieshao_6116/images/200930105419o0hpc.png',
        left: '30.63vw',
        top: 'calc(50vh - 26.72vw)',
        width: '69.38vw',
        height: '135vw',
      },
      {
        url: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/pinpaijieshao_6116/images/200930105419k2sfb.png',
        left: '7.19vw',
        top: 'calc(50vh - 50.78vw)',
        width: '53.75vw',
        height: '70.63vw',
      },
    ]
  }, {
    label: '越秀地产',
    value: 1,
    backimg: [
      {
        url: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/pinpaijieshao_6116/images/2009301054191t2xe.png',
        left: '41.88vw',
        top: 'calc(50vh - 86.72vw)',
        width: '58.13vw',
        height: '98.44vw',
      },
      {
        url: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/pinpaijieshao_6116/images/200930105419dk708.png',
        eft: '56.56vw',
        top: 'calc(50vh - 88.9vw)',
        width: '43.44vw',
        height: '85.62vw',
      },
      {
        url: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/pinpaijieshao_6116/images/200930105419cfca6.png',
        left: '6.25vw',
        top: 'calc(50vh - 14.53vw)',
        width: '49.06vw',
        height: '64.69vw',
      },
    ]
  },
  {
    label: '全国布局',
    value: 2,
    backimg: [
      {
        url: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/pinpaijieshao_6116/images/210414100429c17nh.png',
        left: '0vw',
        top: 'calc(50vh - 23.59vw)',
        width: '99.06vw',
        height: '77.77vw',
      }, {
        url: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/pinpaijieshao_6116/images/200930105419juoi7.png',
        left: '7.81vw',
        top: 'calc(50vh - 52.34vw)',
        width: '52.19vw',
        height: '37.18vw',
      }
    ]
  },
  {
    label: '美好生活体系',
    value: 3,
    backimg: [
      {
        url: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/pinpaijieshao_6116/images/200930105419lr6hv.png',
        left: '10vw',
        top: 'calc(50vh - 26.72vw)',
        width: '79.06vw',
        height: '43.74vw',
      }, {
        url: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/pinpaijieshao_6116/images/2009301054191ij08.png',
        left: '2.5vw',
        top: 'calc(50vh - 50.78vw)',
        width: '94.69vw',
        height: '90.31vw',
      }
    ]
  },
  {
    label: '越秀物业',
    value: 4,
    backimg: [
      {
        url: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/pinpaijieshao_6116/images/200930105419cp4af.png',
        left: '3.44vw',
        top: 'calc(50vh - 30.79vw)',
        width: '93.44vw',
        height: '49.06vw',
      }, {
        url: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/pinpaijieshao_6116/images/2009301054191ij08.png',
        left: '3.44vw',
        top: 'calc(50vh - 50.16vw)',
        width: '93.13vw',
        height: '88.13vw',
      }
    ]
  }
]

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
        className={classes.bottomtab}
        value={value}
        tabs={tabs}
        handleChange={e => {
          setValue(e)
        }}
      >
      </Bottomtab>
    </div>

  );
}
