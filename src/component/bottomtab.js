import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ShutterSpeedIcon from '@material-ui/icons/ShutterSpeed';
import FirstPage from '@material-ui/icons/FirstPage';

import { withStyles } from '@material-ui/core/styles';


function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;




const useStyles = makeStyles((theme) => ({
    root: {
        position: "absolute",
        bottom: '15px',
        width: 'calc(100% - 30px)',
        backgroundColor: '#000',
        opacity: 0.7,
        margin: '0 15px',
        padding: '0 15px',
        borderRadius: '30px',
        display: 'flex',
        minHeight: `${width / 375 * 50}px`,
        height: `${width / 375 * 50}px`,
        transition: 'width 0.5s',
    },
    more: {
        width: '30px',
        color: 'rgba(195, 156, 124, 1)',
        padding: '16px 0'
    },
    tabs: {
        opacity: 1,
        fontWeight: '600',
    }
}));
export default function ScrollableTabsButtonForce(props) {
    const classes = useStyles();
    const handleChange = (event, newValue) => {
        props.handleChange(newValue);
    };
    const [more, setMore] = React.useState(false);
    return (
        <div style={{
            transition: 'width 0.5s',
            width: more ? 'calc(100% - 30px)' : '55px',
            left: more ? '0' : '55px',
        }} className={classes.root}>
            <div onClick={e => setMore(!more)} className={classes.more}
            >{more ? <FirstPage /> : <ShutterSpeedIcon />}</div>
            <Tabs
                style={{
                    width: more ? 'calc(100% - 10px)' : '0px'
                }}
                className={classes.tabs}
                value={props.value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="off"
            >
                {
                    props.tabs && props.tabs.map((item, index) => {
                        const AntTab = withStyles((theme) => ({
                            root: {
                                fontSize: '12px',
                                textTransform: 'none',
                                color: '#fff',
                                height: '50px',
                                minHeight: '50px',
                                opacity: 1,
                                '&:hover': {
                                    color: '#40a9ff',
                                    opacity: 1,
                                },
                                background: `url(${item.bottom_icon}) no-repeat center`,
                                backgroundSize: 'contain',
                            },
                        }))((props) => <Tab {...props} />);

                        return <AntTab style={{ color: props.value === index ? 'rgba(195, 156, 124, 1)' : '#fff' }} key={index} label='' {...a11yProps(index)} />
                    })
                }
            </Tabs>

        </div>
    );
}
