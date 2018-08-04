import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import NewRestaurant from './NewRestaurant';
import Restaurants from './Restaurants';
import map from 'lodash/map';
import './Application.css';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser:null,
      resturants:null
    }
    this.handleref = database.ref('/resturants');
  }
  componentDidMount(){
    auth.onAuthStateChanged(currentUser => {
      this.setState({currentUser});

      this.handleref.on('value', (snapshot) => {
        this.setState({resturants:snapshot.val()})
      })
    })
  }
  render() {
    const {currentUser,resturants} = this.state;
    return (
      <div className="Application">
        <header className="Application--header">
          <h1>Lunch Rush</h1>
        </header>
        <div>
          {!currentUser && <SignIn />}
          {currentUser && 
            <div>
              <NewRestaurant />
              <Restaurants resturants={resturants} user = {currentUser}/>
               <CurrentUser user={currentUser} />
               </div>
              }
        </div>
      </div>
    );
  }
}

export default Application;
