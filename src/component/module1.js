import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
    var url = props.tabs1 && props.tabs1.sand_table_url
    url = url || (props.tabs1 && props.tabs1.conetnt && props.tabs1.conetnt.length && props.tabs1.conetnt[0] && props.tabs1.conetnt[0].url)
    return (
        <div className={classes.root}>
            <iframe title={url} src={url} frameBorder="no" width={width} height={height} ></iframe>
        </div >
    );
}
