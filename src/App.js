import './App.css';
import React from 'react';
import { createStructuredSelector } from "reselect";
import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sigup.component.jsx'
import Header from './components/header/header.component.jsx'
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument} from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors.js'
import CheckoutPage from './pages/checkout/checkout.component.jsx'

class App extends React.Component {
 
  
  unsuscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          
        });
      }

      this.props.setCurrentUser({ currentUser: userAuth });
    });
  }

  componentWillUnmount(){
    this.unsuscribeFromAuth();
  }


  render(){
  return (
    <div className="App">
      <Header/>
       <Switch>
        <Route exact path='/' component={ HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' 
        render ={ () => this.props.currentUser ? <Redirect to='/'/> : <SignInAndSignUpPage/> }
        />
      </Switch> 
      
    </div>
  );
}
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
