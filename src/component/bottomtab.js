import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { withStyles } from '@material-ui/core/styles';

import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import Brightness7Icon from '@material-ui/icons/Brightness7';

import BurstModeIcon from '@material-ui/icons/BurstMode';
import BusinessIcon from '@material-ui/icons/Business';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import CategoryIcon from '@material-ui/icons/Category';

const AntTab = withStyles((theme) => ({
    root: {
        fontSize: '12px',
        textTransform: 'none',
        color: '#fff',
        width: 50,
        height: '50px',
        minHeight: '50px',
        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        },
    },
    selected: {},
}))((props) => <Tab {...props} />);

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;


function getIcon(index) {
    switch (index) {
        case 0:
            return <Brightness4Icon style={{
                margin: '0px',
                height: '25px'
            }} />
        case 1:
            return <Brightness5Icon style={{
                margin: '0px',
                height: '25px'
            }} />
        case 2:
            return <Brightness6Icon style={{
                margin: '0px',
                height: '25px'
            }} />
        case 3:
            return <Brightness7Icon style={{
                margin: '0px',
                height: '25px'
            }} />
        case 4:
            return <BurstModeIcon style={{
                margin: '0px',
                height: '25px'
            }} />
        case 5:
            return <BusinessIcon style={{
                margin: '0px',
                height: '25px'
            }} />
        case 6:
            return <CategoryIcon style={{
                margin: '0px',
                height: '25px'
            }} />
        default:
            return <CastForEducationIcon style={{
                margin: '0px',
                height: '25px'
            }} />
    }
}



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: '#000',
        minHeight: `${width / 375 * 50}px`,
        height: `${width / 375 * 50}px`,
    },
    tab: {
        height: `${width / 375 * 50}px`,
        minHeight: ` ${width / 375 * 50}px`,
        padding: 0,
        color: '#fff'
    }
}));
export default function ScrollableTabsButtonForce(props) {
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        props.handleChange(newValue);
    };

    return (
        <div className={classes.root}>

            <Tabs
                className={classes.tabs}
                value={props.value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="on"
            >
                {
                    props.tabs.map((item, index) => {
                        return <AntTab style={{ color: props.value === index ? '#40a9ff' : '#fff' }} key={index} label={item.label} icon={getIcon(index)} {...a11yProps(index)} />
                    })
                }
            </Tabs>

        </div>
    );
}
