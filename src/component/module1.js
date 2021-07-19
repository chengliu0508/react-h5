import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabPanel(props) {
    const classes = useStyles()
    const { children, value, index, img, ...other } = props;
    return (
        <div
            style={{
                backgroundImage: `url(${img})`
            }}
            className={classes.tabpanel}
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {
                value === index && (<Typography>{children}</Typography>)
            }
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    img: PropTypes.string,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        height: '100%'
    },
    tabpanel: {
        height: 'calc(100% - 48px)',
        // backgroundImage: `url(${img})`
    },
    tabimg: {

    }
}));


export default function ScrollableTabsButtonForce() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const tabs = [
        { label: 'one', value: 0, url: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/pinpaijieshao_6116/images/200930105419k2sfb.png?timestamp=1618365889571' },
        { label: 'two', value: 1, url: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/pinpaijieshao_6116/images/200930105419cfca6.png?timestamp=1618365889572' },
        { label: 'three', value: 2, url: 'https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/pinpaijieshao_6116/images/200930105419juoi7.png?timestamp=1618365889572' },
        { label: 'four', value: 3 },
        { label: 'five', value: 4 },
        { label: 'six', value: 5 },]
    const img = "https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/pinpaijieshao_6116/images/2009301054191ij08.png?timestamp=1618365889572"
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                >
                    {
                        tabs.map(function (tab, index) {
                            return <Tab key={tab.label} label={tab.label} {...a11yProps(index)} />
                        })
                    }
                </Tabs>
            </AppBar>
            {
                tabs.map(function (tab, index) {
                    return (<TabPanel key={tab.label} value={value} index={index} class={classes.TabPanel} img={tab.url || img}>
                        Item One example {tab.label}
                    </TabPanel>)
                })
            }
        </div>
    );
}
