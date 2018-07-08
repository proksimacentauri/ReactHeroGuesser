import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import classes from './ControlPanel.css';
import * as actions from '../../store/actions/index';

class ControlPanel extends Component
{
 
 componentDidMount()
 {
  this.props.onFetchHeroesInit();
 }


 render()
 {

  const imagesStr = this.props.fetchedHeroes.map(image =>{  
      if(image.primary_attr === 'str')
      {return (<img id={image.id} onClick={this.props.clicked} className={classes.hero} key={image.id} src={'http://cdn.dota2.com/'+ image.img}/>)}})

  const imagesAgi = this.props.fetchedHeroes.map(image =>{  
        if(image.primary_attr === 'agi')
        {return (<img id={image.id}  onClick={this.props.clicked} className={classes.hero} key={image.id} src={'http://cdn.dota2.com/'+ image.img}/>)}})
        
  const imagesInt = this.props.fetchedHeroes.map(image =>{  
            if(image.primary_attr === 'int')
            {return (<img id={image.id}  onClick={this.props.clicked} className={classes.hero} key={image.id} src={'http://cdn.dota2.com/'+ image.img}/>)}})
   
   return (<div className={classes.ControlPanel}>
    <div className={classes.strength}><p>Strength</p>
    {imagesStr}
    </div>
    <br/>
    <div className={classes.agility}><p>Agility</p>
    {imagesAgi}
    </div>
    <br/>
    <div className={classes.intelligence}><p>Intelligence</p>
    {imagesInt}
    </div>
    </div>
    );
 }
}

const mapStateToProps =  state =>
{
  return {
  fetchedHeroes: state.heroGuesser.fetchedHeroes,
  loading: state.heroGuesser.loading,
  error: state.heroGuesser.error
  };
}

const mapDispatchToProps = dispatch =>
{
  return {
    onFetchHeroesInit: () => dispatch(actions.fetchHeroes())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ControlPanel);