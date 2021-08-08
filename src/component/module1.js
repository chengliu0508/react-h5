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
        height: '100%',
    },
    Tabs: {
        backgroundColor: '#000',
        color: '#fff'
    },
    Tab: {
        color: '#fff'
    },
    Tabcontainer: {
        height: 'calc(100% - 48px)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // backgroundImage: `url(${img})`
    }
}));


export default function ScrollableTabsButtonForce(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const img = "https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/pinpaijieshao_6116/images/2009301054191ij08.png?timestamp=1618365889572"
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    className={classes.Tabs}
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                >
                    {
                        props.tabs1.map(function (tab, index) {
                            return <Tab className={classes.Tab} key={tab.label} label={tab.label} {...a11yProps(index)} />
                        })
                    }
                </Tabs>
            </AppBar>
            {
                props.tabs1.map(function (tab, index) {
                    return (<TabPanel key={tab.label} value={value} index={index} className={classes.Tabcontainer} img={tab.url || img}>
                        <div className="bottomAni">
                            <div style={{
                                width: '80%',
                                textAlign: 'left',
                                color: '#eee'
                            }}>
                                <div>项目 {tab.label}</div>
                                <div style={{ fontSize: '20px', color: 'goldenrod', marginBottom: '20px' }}>越秀集团  中国跨国公司15强</div>
                                <div><span style={{ color: 'goldenrod' }}>1985</span>  年在香港成立</div>
                                <div>广州最大的企业之一</div>
                                <div>国内最大规模</div>
                            </div>
                        </div>
                    </TabPanel>)
                })
            }
        </div >
    );
}
