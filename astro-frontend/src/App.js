import './App.css';
import TransitsContainer from './containers/TransitsContainer';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import JournalContainer from './containers/JournalContainer';
import PlanetContainer from './containers/PlanetContainer';
import KeyContainer from './containers/KeyContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/transits"><TransitsContainer /></Route>
          <Route exact path="/transits/new"><JournalContainer /></Route>
          <Route exact path="/transits/planets"><PlanetContainer /></Route>
          <Route exact path="/transits/key"><KeyContainer /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
