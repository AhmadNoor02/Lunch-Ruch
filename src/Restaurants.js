import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {database} from './firebase';
import Restaurant from './Restaurant';
import map from 'lodash/map';
import './Restaurants.css';

class Restaurants extends Component {
  constructor(props) {
    super(props);
  }
  handleSelect(key){
    const currentUser = this.props.user;
    database.ref('/resturants').child(key).child('votes').child(currentUser.uid)
      .set(currentUser.displayName)
  }
  handleDeslect(key){
    const currentUser = this.props.user;
    database.ref('/resturants').child(key).child('votes').child(currentUser.uid)
    .remove()
  }
  render () {
    const {resturants,user} = this.props;
    return ( 
      <section className="Restaurants">
        {map(resturants, (value, key) => <Restaurant key={key} {...value} 
        handleSelect={() => this.handleSelect(key)}
        handleDeslect={() => this.handleDeslect(key)}
        user={user}
        />)}
      </section>
    );
  }
}

Restaurants.propTypes = {
  user: PropTypes,
  restaurantsRef: PropTypes.object,
  restaurants: PropTypes.object
};

export default Restaurants;
