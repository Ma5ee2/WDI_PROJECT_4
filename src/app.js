import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Navbar from './components/utility/Navbar';

import FoodbanksIndex from './components/foodbanks/FoodbanksIndex';
import FoodbanksShow from './components/foodbanks/FoodbanksShow';
import FoodbanksNew from './components/foodbanks/FoodbanksNew';
import FoodbanksEdit from './components/foodbanks/FoodbanksEdit';

import Register from './components/auth/Register';
import Login from './components/auth/Login';

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
            <Navbar />
            <hr/>
          </header>
          <main>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route exact path="/" component={FoodbanksIndex} />
              <Route path="/foodbanks/new" component={FoodbanksNew} />
              <Route path="/foodbanks/:id/edit" component={FoodbanksEdit} />
              <Route path="/foodbanks/:id" component={FoodbanksShow} />
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
