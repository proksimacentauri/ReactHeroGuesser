import React from 'react';
import {Component} from 'react';
import heroBefore from '../../assets/images/heroBefore.png';
import classes from './GuessedHero.css';

const guessedHero = (props) =>
{
  return (
   <div className={classes.Main}>
   <div>Game Duration: {props.duration}</div>
     <img className={classes.Image} src={heroBefore}/>  
   </div>
  );
}

export default guessedHero; 