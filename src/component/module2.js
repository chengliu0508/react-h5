import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DoubleArrow from '@material-ui/icons/DoubleArrow';
import FirstPage from '@material-ui/icons/FirstPage';

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}
const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        '& > span': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: '#635ee7',
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
    },
    padding: {
        padding: theme.spacing(3),
    },
    StyledTabs: {
        display: 'flex',
        position: "absolute",
        left: '0px',
        maxWidth: 'calc(100% - 16px)',
        bottom: '80px',
        color: '#fff',
        backgroundColor: '#000',
        opacity: 0.7,
        borderRadius: '0 30px 30px 0',
        transition: 'width 0.5s',
    },
    tabs: {
        //transition: 'width 0.5s',
    },
    more: {
        height: '50px',
        padding: '16px 10px'
    }
}));


var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

export default function Module2(props) {
    const classes = useStyles();
    const [more, setMore] = React.useState(true);
    const [active, setActive] = React.useState(0);
    const [loading, setLoading] = React.useState(true);
    const url = props.tabs2 && props.tabs2[0] && props.tabs2[0].url

    return (
        <div className={classes.root}>
            <iframe onLoad={() => { setLoading(false) }} style={{ display: active === 0 ? 'block' : 'none' }} title={url} src={url} frameBorder="no" width={width} height={height} ></iframe>

            {
                loading ? null : props.tabs2.map((item, index) => {
                    return index > 0 ? <iframe style={{ display: active === index ? 'block' : 'none' }} key={item.url} title={item.url} src={item.url} frameBorder="no" width={width} height={height} ></iframe> : null
                })
            }

            <div className={classes.StyledTabs} style={{
                width: more ? 'calc(100% - 10px)' : '40px'
            }}>
                <StyledTabs
                    style={{
                        width: more ? 'calc(100% - 50px)' : '0px',
                        transition: more ? 'width 0s' : 'width 1s'
                    }}
                    className={classes.tabs}
                    value={active}
                    onChange={(e, value) => setActive(value)}
                    variant="scrollable"
                    scrollButtons="off"
                >
                    {
                        props.tabs2.map((item, index) => {
                            const StyledTab = withStyles((theme) => ({
                                root: {
                                    color: 'red',
                                    opacity: 1,
                                    backgroundImage: `url(${props.tabs2[index].tabimg})`,
                                    backgroundSize: 'contain',
                                    fontWeight: theme.typography.fontWeightRegular,
                                    fontSize: theme.typography.pxToRem(13),
                                    margin: '5px',
                                    width: '20%',
                                    height: '50px',
                                    border: index === active ? '2px solid rgba(195, 156, 124, 1)' : '2px solid #fff',
                                },
                            }))((props) => <Tab {...props} />);
                            return <StyledTab key={index} label={item.label} {...a11yProps(index)} />
                        })
                    }
                </StyledTabs>
                <div onClick={e => setMore(!more)} className={classes.more}
                >{more ? <FirstPage /> : <DoubleArrow />}</div>
            </div>
        </div >
    );
}
