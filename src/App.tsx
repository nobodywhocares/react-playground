import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './page/Home';
import StarRatingClass from './component/StarRatingClass';
import StarRatingFunction from './component/StarRatingFunction';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/star/class">Star Rank Class</Link>
            </li>
            <li>
              <Link to="/star/function">Star Rank Function</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
      <Route path="/star/class">
        <StarRatingClass starCountTotalDefault={5}/>
      </Route>
      <Route path="/star/function">
        <StarRatingFunction starCountTotalDefault={5}/>
      </Route>
      <Route path="/home">
        <Home/>
      </Route>
     </Switch>
    </Router>
  );
}

export default App;
