// import logo from './logo.svg';
import './App.css';
import TransitsContainer from './containers/TransitsContainer';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import JournalContainer from './containers/JournalContainer';
import PlanetContainer from './containers/PlanetContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/transits"><TransitsContainer /></Route>
          <Route exact path="/transits/new"><JournalContainer /></Route>
          <Route exact path="/transits/planets"><PlanetContainer /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
