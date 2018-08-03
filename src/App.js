import React, { Component } from 'react';
import './App.css';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import HeroGuesser from './containers/HeroGuesser/HeroGuesser';
import Layout from './hoc/Layout/Layout';
import ErrorCase from './components/ErrorCase/ErrorCase';
import {connect} from 'react-redux';

class App extends Component {
  
  render() {
    let routes = (
      <Switch>
       <Route />
       </Switch>
     );
     
     if(this.props.fetchedMatchId != null && this.props.randomedPlayer != null )
     {
       console.log(this.props.randomedId)
      const parser = "/?id=" + this.props.fetchedMatchId + "&number="+ this.props.randomedId;
      this.props.history.push(parser);
     }
 
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
  gameGoing: state.heroGuesser.gameGoing
  }
}

const mapDispatchToProps = dispatch =>
{
  return {
    
  }
};

export default connect(mapStateToProps,null)(withRouter(App));
