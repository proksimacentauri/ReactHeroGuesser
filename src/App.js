import React, { Component } from 'react';
import './App.css';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import HeroGuesser from './containers/HeroGuesser/HeroGuesser';
import Layout from './hoc/Layout/Layout';
import ErrorCase from './components/ErrorCase/ErrorCase';
import {connect} from 'react-redux';

class App extends Component {
  
  render() {
    let parser = "";
     
     if(this.props.fetchedMatchId != null && this.props.randomedPlayer != null )
     {
       console.log(this.props.gameId);

      this.props.history.push(this.props.gameId);

     }

     let routes = (
      <Switch>
       <Route path={this.props.gameId}/>
       <Route path='/dongers'/>
       </Switch>
     );
 
    return (
      <div className="App">
      <Layout>
      {routes}
      <HeroGuesser/>
      </Layout>
      </div>
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
  gameGoing: state.heroGuesser.gameGoing,
  gameId: state.heroGuesser.gameId
  }
}


export default connect(mapStateToProps,null)(withRouter(App));
