import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ShutterSpeedIcon from '@material-ui/icons/ShutterSpeed';
import FirstPage from '@material-ui/icons/FirstPage';

import { withStyles } from '@material-ui/core/styles';

import Brightness4Icon from '@material-ui/icons/Brightness4';
import DeckIcon from '@material-ui/icons/Deck';
import EvStationIcon from '@material-ui/icons/EvStation';
import LocationCityIcon from '@material-ui/icons/LocationCity';

import BurstModeIcon from '@material-ui/icons/BurstMode';
import BusinessIcon from '@material-ui/icons/Business';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import CategoryIcon from '@material-ui/icons/Category';

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
    },
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
            return <DeckIcon style={{
                margin: '0px',
                height: '25px'
            }} />
        case 2:
            return <EvStationIcon style={{
                margin: '0px',
                height: '25px'
            }} />
        case 3:
            return <LocationCityIcon style={{
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
    var propstabs = props.tabs && props.tabs.map((item, index) => {
        return { label: (item && item.model_name) || ('项目' + (index + 1)) }
    }) || []
    useEffect(() => {
        propstabs = props.tabs && props.tabs.map((item, index) => {
            return { label: (item && item.model_name) || ('项目' + (index + 1)) }
        }) || []
    }, [props.tabs])

    const handleChange = (event, newValue) => {
        props.handleChange(newValue);
    };
    const [more, setMore] = React.useState(true);
    return (
        <div style={{
            transition: 'width 0.5s',
            width: more ? 'calc(100% - 30px)' : '55px'
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
                    propstabs.map((item, index) => {
                        return <AntTab style={{ color: props.value === index ? 'rgba(195, 156, 124, 1)' : '#fff' }} key={index} label={item.label} icon={getIcon(index)} {...a11yProps(index)} />
                    })
                }
            </Tabs>

        </div>
    );
}
