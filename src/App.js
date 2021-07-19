
import './App.css';
import Navbar from './Navbar';
import Home from './Home'
import Exercises from './Exercises';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
function App() {
  // const title = "This is title";
  // const number = 50;
  // const link = 'http://www.google.com'

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>

            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/create">
              <Create/>
            </Route>

            <Route path="/exercise">
              <Exercises/>
            </Route>

          </Switch>
          
          {/*<a href={link}>Link to Google</a> */}
        </div>
      </div>
    </Router>
  );


}

export default App;
