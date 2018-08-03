import React, {Component} from 'react';
import GuessedHero from '../../components/GuessedHero/GuessedHero';
import {connect} from 'react-redux';
import Aux from '../../hoc/Aux/Aux';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import * as actions from '../../store/actions/index';
import items from '../../assets/JSON/items.json';
import {withRouter} from 'react-router-dom';

import heroBefore from '../../assets/images/heroBefore.png';
import classes from './HeroGuesser.css';

export class HeroGuesser extends Component
{
  state = {
    src: heroBefore,
    heroName: ''
  }

 componentDidMount()
 {
  this.props.onFetchPublicMatchesInit();
  this.props.onFetchItemsInit();
  console.log(items.itemdata);
  this.props.onGameStart();

  console.log(window.location.href);
  if(this.props.fetchedMatchId != null)
  {
  const parser = "/?id=" + this.props.fetchedMatchId + "&number="+ this.props.randomedId;
  console.log(parser);
  }
 }


handleClick = (e) => {

  console.log(e.target.id);
  
  if(e.target.id == this.props.randomedPlayer.hero_id)
  {
    this.props.fetchedHeroes.map(fetchedHero => {
    if(fetchedHero.hero_id == this.props.randomedPlayer.hero_id)
    {
      console.log(fetchedHero);
      console.log(fetchedHero.img);
      this.props.onGameEnd();
      this.setState({src: 'http://cdn.dota2.com' + fetchedHero.img, heroName: fetchedHero.localized_name});  
    }
   })
   console.log('u guessed it!', this.props.randomedPlayer.hero_id);
   //here is the winning handler :D
  }
}

transformItemsToIcons = (data,array) =>
{
 const imgLink = "http://cdn.dota2.com/apps/dota2/images/items/";
 let arrayOfItemImages = [];
 for(let i = 0; i < array.length; i++)
 {
  for (let a in data)
  {
   if(array[i] == data[a].id)
   {
    let fullImgLink = imgLink + data[a].img;

    if(data[a].dname == "Kaya")
    {
     fullImgLink = imgLink + "trident_lg.png?3";
    }
     arrayOfItemImages.push({url: fullImgLink, id:i});
     console.log(arrayOfItemImages);
  }
}
}
 return arrayOfItemImages;
}

 render ()
 {
   let duration = null;
   let itemImgs = [];
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

   if(this.props.randomedPlayer !== null)
   {
    let arrOfItems = [];
    arrOfItems.push(this.props.randomedPlayer.item_0);
    arrOfItems.push(this.props.randomedPlayer.item_1);
    arrOfItems.push(this.props.randomedPlayer.item_2);
    arrOfItems.push(this.props.randomedPlayer.item_3);
    arrOfItems.push(this.props.randomedPlayer.item_4);
    arrOfItems.push(this.props.randomedPlayer.item_5);
    console.log(arrOfItems);
    itemImgs = this.transformItemsToIcons(items.itemdata,arrOfItems);
    console.log(itemImgs);
    console.log(this.props.fetchedMatchId, this.props.randomedId)

   }

   return (
       <Aux>
        
         <GuessedHero gameRunning={this.props.gameGoing}   nameOfHero={this.state.heroName} show={this.state.src} duration={duration} theMatchId={this.props.fetchedMatchId}/>
         <div className={classes.itemDiv}>
         {itemImgs.map(itemImg => (
           <img className={classes.Items} key={itemImg.id }src={itemImg.url}/>
         ))}
         </div>
        <ControlPanel clicked={this.handleClick} />
       </Aux>
   );
 }
}


const mapStateToProps =  state =>
{
  return {
  fetchedHeroes: state.heroGuesser.fetchedHeroes,
  fetchedPublicMatches: state.heroGuesser.fetchedPublicMatches,
  fetchedMatchId: state.heroGuesser.fetchedMatchId,
  fetchedPublicMatch: state.heroGuesser.fetchedPublicMatch,
  randomedId: state.heroGuesser.randomId,
  loading: state.heroGuesser.loading,
  items: state.heroGuesser.items,
  error: state.heroGuesser.error,
  randomedPlayer: state.heroGuesser.randomedPlayer,
  gameGoing: state.heroGuesser.gameGoing
  }
}

const mapDispatchToProps = dispatch =>
{
  return {
    onFetchPublicMatchesInit: () => dispatch(actions.fetchPublicMatches()),
    onFetchItemsInit: () => dispatch(actions.fetchItems()),
    onGameStart: () => dispatch(actions.gameStart()),
    onGameEnd: () => dispatch(actions.gameEnd())
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(HeroGuesser));