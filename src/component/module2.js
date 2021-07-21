import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DoubleArrow from '@material-ui/icons/DoubleArrow';
import FirstPage from '@material-ui/icons/FirstPage';


const img = "https://infishow.ideamake.cn/icp/yuexiuzhanglongheyuefu_12126/vr/panos/ketingn0fm.tiles/thumb.jpg?t=1601282506222"


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
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: '#635ee7',
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
    root: {
        color: '#fff',
        backgroundImage: `url(${img})`,
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        margin: '5px',
        border: '1px solid #fff',
        '&:focus': {
            opacity: 1,
            border: '1px solid yellow',
        },
    },
}))((props) => <Tab {...props} />);


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
        left: '10px',
        maxWidth: 'calc(100% - 50px)',
        transition: 'width 0.5s',
        bottom: '66px',
        backgroundColor: '#2f2d2d',
        opacity: 0.7
    },
    more: {
        height: '50px'
    }
}));

export default function Module2(props) {
    const classes = useStyles();
    const [more, setMore] = React.useState(true);

    const handleChange = (event, newValue) => {

    };

    return (
        <div className={classes.root}
            style={{
                backgroundImage: `url(${img})`
            }}>
            <div className={classes.StyledTabs}
                style={{
                    borderRadius: more ? '0 30px 30px 0' : '50%',
                    width: more ? 'calc(100% - 50px)' : '50px'
                }}>
                {
                    more ? <><StyledTabs
                        className={classes.tabs}
                        value={props.value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="off"
                    >
                        {
                            props.tab.map((item, index) => {
                                return <StyledTab key={index} label={item.label} {...a11yProps(index)} />
                            })
                        }
                    </StyledTabs>
                        <div onClick={e => setMore(false)} className={classes.more}
                            style={{ padding: '16px 10px' }}
                        ><FirstPage /></div></> :
                        <div onClick={e => setMore(true)} className={classes.more}
                            style={{ padding: '14px' }}
                        ><DoubleArrow /></div>
                }

            </div>
        </div >
    );
}
