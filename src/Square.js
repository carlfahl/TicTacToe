import React from 'react';

function Square (props) {
  return (
    <button className="square" onClick={(i) => props.onClick(props.num)}>
      {props.value}
    </button>
  );
}

export default Square;
