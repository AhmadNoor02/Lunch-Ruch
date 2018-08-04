import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {database} from './firebase';
import './NewRestaurant.css';

class NewRestaurant extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
    this.handleref = database.ref('/resturants')
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.handleref.push({name:this.state.name})
  }

  render() {
    const { name } = this.state;

    return (
      <form
        className="NewRestaurant"
      >
        <input
          type="text"
          value={ name }
          placeholder="Name of Fine Establishment"
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <button
          onClick={this.handleSubmit}
          disabled={!name}
        >
          Submit
        </button>
      </form>
    );
  }
}

NewRestaurant.propTypes = {
  restaurantsRef: PropTypes.object
};

export default NewRestaurant;
