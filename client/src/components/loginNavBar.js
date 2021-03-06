
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{background: "linear-gradient(to bottom, #3a1c71, #d76d77, #ffaf7b)"}}  position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title} style={{textAlign: "center"}}>
        PROJECT.MY
          </Typography>
          <Button color="inherit">SIGNIN</Button>
          <Button color="inherit">SIGNUP</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
