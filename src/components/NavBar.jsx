import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { NavBarCarousel } from './NavBarCarousel';

export const NavBar = (props) => {
    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
        },
    });

    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <AppBar 
                    position="static" 
                    color="default" 
                    style={{margin: 0, width: '100%', backgroundColor: '#efece6'}}
                >
                    <Toolbar disableGutters={true}>
                        <NavBarCarousel
                            menuOptions={props.menuOptions} 
                            history={props.history} 
                        />
                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
}