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
    { label: 'top1' },
    { label: 'top2' },
    { label: 'top3' },
    { label: 'top4' },
    { label: 'top5' },
    { label: 'top6' },
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
