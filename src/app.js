import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import FoodbanksIndex from './components/foodbanks/FoodbanksIndex';
import FoodbanksShow from './components/foodbanks/FoodbanksShow';
import FoodbanksNew from './components/foodbanks/FoodbanksNew';

import 'bootstrap-css-only';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container">
          <header>
            <Link to="/"><h1>FoodBank Donator</h1></Link>
            <h2>Help a foodbank near you.</h2>
            <hr/>
          </header>
          <main>
            <Switch>
              <Route path="/foodbanks/new" component={FoodbanksNew} />
              <Route path="/foodbanks/:id" component={FoodbanksShow} />
              <Route path="/" component={FoodbanksIndex} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
