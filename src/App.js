import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sigup.component.jsx'
import Header from './components/header/header.component.jsx'
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }
  
  unsuscribeFromAuth = null;

  componentDidMount(){
    this.unsuscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsuscribeFromAuth();
  }


  render(){
  return (
    <div className="App">
      <Header currentUser={this.state.currentUser}/>
       <Switch>
        <Route exact path='/' component={ HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch> 
      
    </div>
  );
}
}

export default App;
