import React from 'react';
import '../App.scss';
import '../bootstrap/vendor/bootstrap/css/bootstrap.css'
import '../bootstrap/vendor/bootstrap/css/custom.css'

function Partner(props :any) {
  return (
    <div className="content-card current-partner">
      <div>
        <h3>Matching With:</h3>
        <h1>{props.name}</h1>
      </div>
      <img id='profile' src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="Profile"/>
  <h5 className="user-badge">{props.email}</h5>
    </div>
  );
}

export default Partner