import React, {Component} from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import {connect} from 'react-redux';


class NavigationItems extends Component
{
 
 render ()
 {
 return (
 <ul className={classes.NavigationItems}>
 <NavigationItem link=''>Hero Guesser</NavigationItem>
 <NavigationItem link='/dongers'> dongers</NavigationItem>
 </ul>
 );
 }
}
const mapStateToProps =  state =>
{
  return {
  fetchedMatchId: state.heroGuesser.fetchedMatchId,
  randomedId: state.heroGuesser.randomId,
  loading: state.heroGuesser.loading,
  error: state.heroGuesser.error,
  randomedPlayer: state.heroGuesser.randomedPlayer,
  gameGoing: state.heroGuesser.gameGoing
  }
}

export default connect(mapStateToProps,null)(NavigationItems);