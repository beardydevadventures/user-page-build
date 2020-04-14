import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MenuIcon from '@material-ui/icons/Menu';

import MenuItems from './MenuItems';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    list: {
        width: 250,
    },
}));

const Menu = ({ onToggleDark }) => {
    const classes = useStyles();

    const [state, setState] = useState({
        left: false,
        checked: true
    });

    const handleChange = (event) => {
        onToggleDark();
        setState({ ...state, ['checked']: event.target.checked });
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, ['left']: open });
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Matthew Aisthorpe
                    </Typography>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Switch
                                    onChange={handleChange}
                                    checked={state.checked}
                                />
                            }
                            label="Lights"
                        />
                    </FormGroup>
                </Toolbar>
            </AppBar>

            <Drawer anchor='left' open={state['left']} onClose={toggleDrawer(false)}>
                <div
                    className={clsx(classes.list)}
                    role="presentation"
                >
                    <List component="nav">
                        <ListItem button key='Close' onClick={toggleDrawer(false)}>
                            <ListItemIcon><MenuIcon /></ListItemIcon>
                            <ListItemText primary='Close' />
                        </ListItem>
                        <Divider />
                        {MenuItems.map((item) => (
                            <ListItem button key={item.short_name} component="a" href={item.link}>
                                <ListItemIcon><ArrowForwardIosIcon /></ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>

        </div>
    );
}

export default Menu;