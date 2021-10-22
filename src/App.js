import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import City from './components/City';

// styles
import './App.css';

function App() {
  return (
    <div className="container-fluid bg-main-color">
      <Router>
        <Header />
        <Switch>
          <Route path="/city/:state/:id">
            <City />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
