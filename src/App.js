import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Signings from './pages/logins/signings.jsx';

//video 87 = Convert app to class
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.action';


// import logo from './logo.svg';
import './App.css';

// HomePage is route number one
// Birds is number 2, and BirdsDeets is a third nested route
// const BirdsPage = (props) => {
//     console.log('log', props);
//     return (
//     <div className="center-page">
//       <h1>Birds Page </h1>
//     </div>  
//   )
// }

// const BirdsDeets = () => (
//   <div className="center-page">
//     <h1>Details about Birds </h1>
//   </div> 
// )

// switch renders only one route at a time 

class App extends React.Component {
  // Add mapDispatchToProps with connect and remove state.
  // State now coomes from the reducer, also see userRef.onSnapshot(snapShot => {
  // constructor() {
  //   super();
  //   this.state = {
  //     currentUser: null 
  //   }
  // }

  // this section is the app listening for auth state chages,
  unsubscribeFromAuth = null;

  componentDidMount() {
    // Remember to destructure
    // const {setCurrentUser} = this.propss;
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user });
      // createUserProfileDocument(user);
      // console.log(user);

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data());

          // Add mapDispatchToProps, then remove setState. 
          // Convert state to props, pass in snapShot Object from Firebase

          // this.setState({
          this.props.setCurrentUser({
            // currentUser: {
            id: snapShot.id,
            ...snapShot.data()
            // }
          }
          // ,
          // () => {
          //   console.log(this.state);
          // }
          )
        });
      } else {
        // Add mapDispatchToProps, then remove setState.
        // Prev. passed in an Object, but now use props
        // Remember to destructure
          
        // this.setState({ currentUser: userAuth });
        this.props.setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      // <div className="app-wrapper"> see #root in index
      <div>
        {/* <Header currentUser={this.state.currentUser} /> */}
        {/* Add Redux and mapStateToProps, then move state to header compo */}
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />

          {/* <Route path='/signin' component={Signings} /> */}
          <Route exact path='/signin' 
            render={() => 
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <Signings />
              )
            } />
        </Switch>
      </div>
    );
  }
}

// Prevent logged in user from seeing login page with Redirect from React-Router Dom
// Just like in Header compo
//Off of state, destructure the user reducer with ({ user }), and return currentUser Props.
// Then pass into the connect args below, so that Appjs can access.
// Remember to destructure.
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

 
const mapDispatchToProps = dispatch => ({
   setCurrentUser: user => dispatch(setCurrentUser(user))
});

// Put null as first arg = don't need state for props from user reducer
// App.js doesn't need currentUser anymore, only sets currentUser but does nothing with it.
// we now need to access props.currentUser "state" so pass in the mapStateToProps 

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);

// Simple example of switch routing.
// <Switch>
// <Route exact path='/' component={HomePage} />
// <Route path='/birds' component={BirdsPage} />
// <Route path='/birds/:deets' component={BirdsDeets} />
// </Switch>
