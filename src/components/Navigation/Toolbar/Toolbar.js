import React from 'react';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
 
const toolbar = (props) => (
<header className={classes.Toolbar}>
<div className={classes.Menu} onClick={props.clicked}>
<div></div>
<div></div>
<div></div>
</div>
<nav className={classes.DesktopOnly}>
<NavigationItems/>  
</nav> 
</header>
);

export default toolbar;