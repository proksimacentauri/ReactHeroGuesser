import React, {Component} from 'react';
import GuessedHero from '../../components/GuessedHero/GuessedHero';
import {connect} from 'react-redux';
import Aux from '../../hoc/Aux/Aux';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import * as actions from '../../store/actions/index';

export class HeroGuesser extends Component
{

 componentDidMount()
 {
  this.props.onFetchPublicMatchesInit();
 }


handleClick = (e) => {

  console.log(e.target.id);
  if(e.target.id == this.props.randomedPlayer.hero_id)
  {
   console.log('u guessed it!');
   //here is the winning handler :D
  }
}

 render ()
 {
   let duration = null;

   if(this.props.fetchedPublicMatch !== null)
   {
     const durationInMinutes = Math.floor(this.props.fetchedPublicMatch.duration/60);
     let durationSeconds = (this.props.fetchedPublicMatch.duration) - (durationInMinutes*60);
     if(durationSeconds < 10)
     {
      durationSeconds = "0"+ durationSeconds.toString();
     }
     duration = durationInMinutes.toString() + ':' + durationSeconds.toString();

   }
   console.log(this.props.fetchedPublicMatch, this.props.randomedPlayer);
   return (
       <Aux>
         <GuessedHero duration={duration}/>
        <ControlPanel clicked={this.handleClick} />
       </Aux>
   );
 }
}


const mapStateToProps =  state =>
{
  return {
  fetchedPublicMatches: state.heroGuesser.fetchedPublicMatches,
  fetchedMatchId: state.heroGuesser.fetchedMatchId,
  fetchedPublicMatch: state.heroGuesser.fetchedPublicMatch,
  loading: state.heroGuesser.loading,
  error: state.heroGuesser.error,
  randomedPlayer: state.heroGuesser.randomedPlayer
  }
}

const mapDispatchToProps = dispatch =>
{
  return {
    onFetchPublicMatchesInit: () => dispatch(actions.fetchPublicMatches())
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(HeroGuesser);