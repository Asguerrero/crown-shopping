import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={ HomePage} />
        <Route path='/hats' component={HomePage} />
      </Switch>
      
    </div>
  );
}

export default App;
