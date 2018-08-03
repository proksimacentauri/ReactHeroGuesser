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
       <Route path='' component={HeroGuesser}/>
       </Switch>
     );
     
     if(this.props.fetchedMatchId != null && this.props.randomedId != null)
     {
      const parser = "/?id=" + this.props.fetchedMatchId + "&number="+ this.props.randomedId;
     }
 
    return (
      <div className="App">
      <Layout>
      {routes}
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
  gameGoing: state.heroGuesser.gameGoing
  }
}

const mapDispatchToProps = dispatch =>
{
  return {
    
  }
};

export default connect(mapStateToProps,null)(withRouter(App));
