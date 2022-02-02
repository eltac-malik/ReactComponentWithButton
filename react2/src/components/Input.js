import React from 'react';

function Input(props) {

  return <div>
      <input value={props.name} onChange={(e)=> props.setname(e.target.value)} />
  </div>;
}

export default Input;
