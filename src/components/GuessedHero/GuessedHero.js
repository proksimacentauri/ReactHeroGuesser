import React from 'react';
import classes from './GuessedHero.css';

const guessedHero = (props) =>
{
  
  return (
   <div className={classes.Main}>
   {!props.gameRunning ?<div>It was {props.nameOfHero}!</div> :  null }
   <div>Game Duration: {props.duration}</div>
   <img className={classes.Image} src={props.show}/>  
   <div>Match Id: <a href={'https://www.opendota.com/matches/'+ props.theMatchId}>{props.theMatchId}</a></div>
   </div>
  );
}

export default guessedHero; 