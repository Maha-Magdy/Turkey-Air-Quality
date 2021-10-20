import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

// styles
import './App.css';

function App() {
  return (
    <div className="container-fluid bg-main-color">
      <Header />
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
