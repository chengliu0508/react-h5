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
    Tabcontainer: {
        height: 'calc(100% - 48px)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // backgroundImage: `url(${img})`
    }
}));


export default function ScrollableTabsButtonForce() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const tabs = [
        { label: '房源1', value: 0, url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic26.nipic.com%2F20130104%2F8821914_182437666135_2.jpg&refer=http%3A%2F%2Fpic26.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630403300&t=ac121678cef397fa4810eb3a2158a9cd' },
        { label: '房源2', value: 1, url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fg.search1.alicdn.com%2Fimg%2Fbao%2Fuploaded%2Fi4%2Fi3%2F3316629412%2FO1CN01FMcH9S2JOkLW7pI7S_%21%213316629412.jpg&refer=http%3A%2F%2Fg.search1.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630403300&t=0c1724b49509786730df3df20f4bc7c8' },
        { label: '房源3', value: 2, url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic.jisutui.vip%2Fdata%2Fupload%2F2021%2F05%2Ff3d82eeaefrgg2vl.jpg&refer=http%3A%2F%2Fstatic.jisutui.vip&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630403300&t=a8aaebdea265865ca36166839f4d3c07' },
        { label: '房源4', value: 3, url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0630%252F40244f31j00qvir8h002ac000qo00f0c.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630403300&t=49602cc26018671f4bb77e04a30c2bb4' },
        { label: '房源5', value: 4, url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201201%2F30%2F20120130221359_u4dUj.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630403300&t=65df99fe7d84aa4b5a51fcd51dadc3c1' },
        { label: '房源6', value: 5, url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.zhimg.com%2Fv2-fef0dc2e635415e5da4d8c6446461a61_1200x500.jpg&refer=http%3A%2F%2Fpic2.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630403300&t=36cc78f5405a1c63af90cab5c69c4bc9' },]
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
                        tabs.map(function (tab, index) {
                            return <Tab key={tab.label} label={tab.label} {...a11yProps(index)} />
                        })
                    }
                </Tabs>
            </AppBar>
            {
                tabs.map(function (tab, index) {
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
