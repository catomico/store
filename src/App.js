import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Signings from './pages/logins/signings.jsx';
//video 87 ... also convert app to class
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
  // we take state out after adding mapDispatchToProps with connect, because state now coomes from the reducer, also see userRef.onSnapshot(snapShot => {
  // constructor() {
  //   super();
  //   this.state = {
  //     currentUser: null 
  //   }
  // }

  // this section is the app listening for auth state chages,
  unsubscribeFromAuth = null;

  componentDidMount() {
    // later when we know what the fuck is going on we can destructure
    // const {setCurrentUser} = this.props;
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user });
      // createUserProfileDocument(user);
      // console.log(user);

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data()); ->1
          // after adding mapDispatchToProps, we can remove the setState here - see how we have converted state to props
          // this.setState({
          this.props.setCurrentUser({
            // currentUser: {
            id: snapShot.id,
            ...snapShot.data()
            // }
          }
          // ,
          // () => {
          //   console.log(this.state); ->1
          // }
          )
        });
      } else {
          // after adding mapDispatchToProps, we can remove the setState here
          // the old one is passing in an Object, but since its now props
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
        {/* after adding redux... and then finally mapstatetoprops we can move state to the header component */}
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={Signings} />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
   setCurrentUser: user => dispatch(setCurrentUser(user))
});


// App.js does not need current user anymore. app only sets current user but does nothing with it. therefore put null as the first arg because don't need state for props from the user reducer
// Here we are connecting the outcome of our initial connect call to 
// export default App;
export default connect(null, mapDispatchToProps)(App);



// <Switch>
// <Route exact path='/' component={HomePage} />
// <Route path='/birds' component={BirdsPage} />
// <Route path='/birds/:deets' component={BirdsDeets} />
// </Switch>