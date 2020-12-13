import HomePage from './pages/homepage/homepage.component';
import NavigationBar from './components/navigation-bar/navigation-bar.component';
import {Switch, Route} from 'react-router-dom';
import './custom.scss';

function App() {
  return (
    <div className="App">
        <NavigationBar/>
        <Switch>    
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/liquidity' component={liquidity}/>
            <Route exact path='/clients' component={clients}/>
            <Route exact path='/story' component={story}/>
            <Route exact path='/contact' component={contact}/>
        </Switch>
    </div>
  );
}


function liquidity() {
  return <h2>liquidity</h2>;
}

function clients() {
  return <h2>clients</h2>;
}

function story() {
  return <h2>story</h2>;
}

function contact() {
  return <h2>contact</h2>;
}

export default App;
