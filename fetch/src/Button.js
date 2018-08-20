import React from 'react';

export default function Button(props) {
  return <button onClick={props.getImage} className="button">
            <span>Get a new puppy</span> 
          </button>
};
