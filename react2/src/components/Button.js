import React from 'react';

function Button(props) {
  return <div>

    <button onClick={(e)=> {props.addname(e.target.value)}}>Add</button>

  </div>;
}

export default Button;
