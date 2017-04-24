import React from 'react';
import { render } from 'react-dom';
import './stylesheets/ui.scss';
import { App } from './components/App';
import { Whoops404 } from './components/Whoops404';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

window.React = React;

render(
    <Router>
      <div>
        <h1>PerdyPerDay!</h1>
        <Switch>
          <Route exact path="/" component={App}/>
          <Redirect from="/redirectExampleHolder" to="/"/>
          <Route component={Whoops404}/>
        </Switch>
      </div>
    </Router>,
    document.getElementById('react-container')
)
