import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Module1 from './component/module1'
import Bottomtab from './component/bottomtab'
import Module2 from './component/module2'


const useStyles = makeStyles({
  root: {

  },
  container: {
    height: 'calc(100% - 50px)'
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
    { label: '区域沙盘', img: '', tabimg: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/vr/panos/ketingn0fm.tiles/thumb.jpg?t=1601282506222' },
    { label: '项目沙盘', img: '', tabimg: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/vr/panos/zhuwei3q1l.tiles/thumb.jpg?t=1600234892242' },
    { label: '项目沙盘日落', img: '', tabimg: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/vr/panos/720yuexiuzhanglong-xiangmu0000v83w.tiles/thumb.jpg?t=1600237375289' },
    { label: '项目沙盘日落', img: '', tabimg: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/vr/panos/yangtai04d2.tiles/thumb.jpg?t=1601282544662' },
    { label: '沙盘4', img: '', tabimg: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/vr/panos/720syuexiuzhanglong-quyu0000zxxa.tiles/thumb.jpg?t=1600237444562' },
    { label: '沙盘5', img: '', tabimg: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/vr/panos/ketingn0fm.tiles/thumb.jpg?t=1601282506222' },
    { label: '沙盘6', img: '', tabimg: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/vr/panos/zhuwei3q1l.tiles/thumb.jpg?t=1600234892242' },
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
