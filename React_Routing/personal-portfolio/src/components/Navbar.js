import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core";
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";

import avatar from '../images/avatar.jpg';

// CSS STYLES
const useStyles = makeStyles(theme =>({
    menuSliderContainer : {
        width: 250,
        background: "#511",
        height: "30rem"
    },

    avatar : {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    }
}));

const menuItems = [
    {
        lilstIcon: <Home />,
        listText: "Home"
    },
    {
        lilstIcon: <AssignmentInd />,
        listText: "Resume"
    },
    {
        lilstIcon: <Apps />,
        listText: "Portfolio"
    },
    {
        lilstIcon: <ContactMain />,
        listText: "Contacts"
    }
]

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.menuSliderContainer} component="div">
                <Avatar className={classes.avatar} src={avatar} alt="avatar"/>
                <Divider />
                <List>
                    {menuItems.map((IsItem, key) => (
                        <ListItem>
                        <ListItemIcon>

                        </ListItemIcon>
                        <ListItemText>

                        </ListItemText>
                    </ListItem>
                     ))}
                    
                </List>
            </Box>
            <Box component="nav">
                <AppBar position="static" style={{background: "#222"}}>
                    <Toolbar>
                        <IconButton>
                            <ArrowBack style={{color:"tomato"}}/>
                        </IconButton>
                        <Typography variant="h5" style={{color: "tan"}}>Portfolio</Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar;