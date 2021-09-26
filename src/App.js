import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Module2 from './component/module2'
import Bottomtab from './component/bottomtab'
import Module1 from './component/module1'

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

var getlist = (setValist) => {
  let params = window.location.search
  window.fetch("/api/customer/getinfo" + (params || '?openId=oM2dj5aKsb0yk0KvEnAuRzpYJuC0'), {
    method: 'get',
  })
    .then(res => { return res.json() })
    .then(res => {
      console.log(res.data);
      setValist(res.data.filter(item => item.conetnt && item.conetnt.length))
    })
}

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [valist, setValist] = React.useState([]);


  useEffect(() => {
    if (!valist.length) {
      getlist(setValist)
    }
  }, [])


  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {valist && valist[value] ? (valist[value].model_type === '1' ? <Module1 tabs1={valist[value]}></Module1> : <Module2 tabs2={valist[value].conetnt}></Module2>) : null}
      </div>
      <Bottomtab
        className={classes.bottomtab}
        value={value}
        tabs={valist}
        handleChange={e => {
          setValue(e)
        }}
      >
      </Bottomtab>
    </div>

  );
}
