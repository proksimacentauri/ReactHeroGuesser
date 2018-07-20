import React, { Component } from 'react';
import './App.css';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import HeroGuesser from './containers/HeroGuesser/HeroGuesser';
import Layout from './hoc/Layout/Layout';


class App extends Component {
/*  const routes = (
   <Switch>
    <Route path='/' exact component={HeroGuesser}/>
    </Switch>
  );
*/
  
  render() {
    return (
      <div className="App">
      <Layout>
      <HeroGuesser/>
      </Layout>
      </div>
    );
  }
}

export default withRouter(App);
