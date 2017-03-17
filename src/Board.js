import React from 'react';
import Square from './Square';

const Board = (props) => {
  return (
    <div>
      <div className="board-row">
        <Square onClick={props.onClick} value={props.squares[0]} num={0} />
        <Square onClick={props.onClick} value={props.squares[1]} num={1} />
        <Square onClick={props.onClick} value={props.squares[2]} num={2} />
      </div>
      <div className="board-row">
        <Square onClick={props.onClick} value={props.squares[3]} num={3} />
        <Square onClick={props.onClick} value={props.squares[4]} num={4} />
        <Square onClick={props.onClick} value={props.squares[5]} num={5} />
      </div>
      <div className="board-row">
        <Square onClick={props.onClick} value={props.squares[6]} num={6} />
        <Square onClick={props.onClick} value={props.squares[7]} num={7} />
        <Square onClick={props.onClick} value={props.squares[8]} num={8} />
      </div>
    </div>
  );
}

export default Board;
