import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NabBar from './Components/NavBar/NabBar';
import DreamRider from './Components/ProjectsDetails/DreamRider/DreamRider';
import OsudDokan from './Components/ProjectsDetails/OsudDokan/OsudDokan';
import TravelGo from './Components/ProjectsDetails/TravelGo/TravelGo';
import NotFound from './Components/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <Router>
        <NabBar></NabBar>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/rider'>
            <DreamRider></DreamRider>
          </Route>
          <Route path='/osud'>
            <OsudDokan></OsudDokan>
          </Route>
          <Route path='/travel'>
            <TravelGo></TravelGo>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
