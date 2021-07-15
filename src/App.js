
import './App.css';
import Header from './Header';
// import Info from './Info';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About';
import './Header.css'

function App() {
  return (
    <div className="App">
      <Router>

        <Header />
        <Switch>
          <Route path="/About" component={About} />
          {/* <Route path="/" component={Info} /> */}
        </Switch>
      </Router>

    </div>
  );
}

export default App;
