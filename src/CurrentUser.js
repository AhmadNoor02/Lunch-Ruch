import React  from 'react';
import PropTypes from 'prop-types';

import { auth } from './firebase';
import './CurrentUser.css';

const CurrentUser = ({ user }) => {
  return (
    <div className="CurrentUser">
      {user.displayName}
      <img className="Current--photo" 
      src={user.photoURL}
      alt={user.displayName}
      />
      <div className="CurrentUser--identification">
        <h3>{user.displayName}</h3>
        <p>{user.email}</p>
        <button onClick={() => auth.signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

CurrentUser.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
    photoURL: PropTypes.string,
    uid: PropTypes.string.isRequired
  })
};

export default CurrentUser;
