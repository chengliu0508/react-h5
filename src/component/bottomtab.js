import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';


const AntTab = withStyles((theme) => ({
    root: {
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
}))((props) => <Tab disableRipple {...props} />);

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
        backgroundColor: '#666',
        opacity: 0.7
    },
    tabs: {

    },
    tab: {
        height: '50px',
        minHeight: '50px',
        padding: 0,
        color: '#fff'
    }
}));

function getIcon(index) {
    switch (index) {
        case 0:
            return <PhoneIcon />
        case 1:
            return <FavoriteIcon />
        case 2:
            return <PersonPinIcon />
        case 3:
            return <HelpIcon />
        case 4:
            return <ShoppingBasket />
        case 5:
            return <ThumbDown />
        default:
            return <ThumbUp />
    }
}

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
                indicatorColor="primary"
                textColor="primary"
            >
                {
                    props.tabs.map((item, index) => {
                        return <AntTab key={index} label={item.label} icon={getIcon(index)} {...a11yProps(index)} />
                    })
                }
            </Tabs>

        </div>
    );
}
