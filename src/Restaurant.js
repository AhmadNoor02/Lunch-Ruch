import React, { Component} from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import './Restaurant.css';

class Restaurant extends Component {
  render () {
    const {name,user,handleDeslect,handleSelect,votes} = this.props;
    const userHasSelcet = votes && Object.keys(votes).includes(user.uid)
    return (
      <article className="Restaurant">
        {name}
        <ul>
          {votes && map(votes , (vote,key) => <li key={key}>{vote}</li>)}
        </ul>
        {
          userHasSelcet ? <button className="destructive" onClick={handleDeslect}>
            No Never Mind
        </button> : <button onClick={handleSelect}>
              Yes i had go there
        </button>
        }
       
      </article>
    );
  }
}

Restaurant.propTypes = {
  name: PropTypes.string,
  votes: PropTypes.object,
  user: PropTypes.object,
  handleSelect: PropTypes.func,
  handleDeselect: PropTypes.func
};

export default Restaurant;
