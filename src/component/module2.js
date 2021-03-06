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
        position: "relative"
    },
    Tabs: {
        width: '100%',
        backgroundColor: '#393939',
        opacity: 0.7,
        color: '#fff',
        position: "absolute",
        top: '5vh',
        zIndex: 10000
    },
    Tab: {
        color: '#fff'
    },
    Tabcontainer: {
        height: '100% ',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        background: '#323232',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        overflow: 'hidden'

    },
    bottomAni: {
        padding: '10px',
        // animation: 'myBottom 5s',
        position: 'absolute',
        transition: 'top 5s',
    }
}));


export default function ScrollableTabsButtonForce(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);

        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500)
    };

    const [loading, setLoading] = React.useState(true);

    setTimeout(() => {
        setLoading(false)
    }, 1000)


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
                        props.tabs2.map(function (tab, index) {
                            return <Tab className={classes.Tab} key={tab.label} label={tab.label} {...a11yProps(index)} />
                        })
                    }
                </Tabs>
            </AppBar>
            {
                props.tabs2.map(function (tab, index) {
                    return (<TabPanel key={tab.label} value={value} index={index} className={classes.Tabcontainer}>
                        {
                            tab.backimg && tab.backimg.length && tab.backimg.map((back, index) => {
                                let top = (index !== 0 && loading) ? '100%' : (back.top || '0')
                                return <img key={index} style={{ ...back, top }} className={classes.bottomAni} src={back.url} alt={back.label} />
                            })
                        }
                    </TabPanel>)
                })
            }
        </div >
    );
}
