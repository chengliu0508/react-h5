import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Module1 from './component/module1'
import Bottomtab from './component/bottomtab'
import Module2 from './component/module2'

var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const useStyles = makeStyles({
  root: {

  },
  container: {
    height: `calc(100% - ${width / 375 * 50}px)`
  },
  bottom: {

  }
});

export default function App() {
  const classes = useStyles();
  const tabs = [
    { label: 'tab1' },
    { label: 'tab2' },
    { label: 'tab3' },
    { label: 'tab4' },
    { label: 'tab5' },
    { label: 'tab6' },
  ]
  const tabs2 = [
    { label: '日景', url: 'https://720yun.com/t/1avkzl7lrrm', tabimg: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/vr/panos/ketingn0fm.tiles/thumb.jpg?t=1601282506222' },
    { label: '夜景', url: 'https://720yun.com/t/08vkzl7lr1h', tabimg: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/vr/panos/zhuwei3q1l.tiles/thumb.jpg?t=1600234892242' },
    { label: '景观一', url: 'https://720yun.com/t/e7vkzl7ld8h', tabimg: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/vr/panos/720yuexiuzhanglong-xiangmu0000v83w.tiles/thumb.jpg?t=1600237375289' },
    { label: '景观二', url: 'https://720yun.com/t/dcvkzl7ld2w', tabimg: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/vr/panos/yangtai04d2.tiles/thumb.jpg?t=1601282544662' },
    { label: '景观三', url: 'https://720yun.com/t/1evkzl7ldpe', tabimg: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/vr/panos/720syuexiuzhanglong-quyu0000zxxa.tiles/thumb.jpg?t=1600237444562' },
    { label: '华发悦谷', url: 'https://720yun.com/t/b6vkter9g19', tabimg: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/vr/panos/ketingn0fm.tiles/thumb.jpg?t=1601282506222' },
  ]
  const [value, setValue] = React.useState(0);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {value % 2 ? <Module1 ></Module1> : <Module2 tab={tabs2}></Module2>}
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
