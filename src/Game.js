import React from 'react';
import Board from './Board';

var Game = React.createClass({
  getInitialState: function () {
    return {xIsNext: true, squares: Array(9)};
  },
  clickHandler: function (i) {
    console.log("A square was clicked");
    if (this.state.squares[i] == null && !this.calculateWinner()){
      var data = this.state;
      data.squares[i] = this.state.xIsNext ? 'X' : 'O';
      data.xIsNext = !this.state.xIsNext;
      this.setState(data);
    }
  },
  calculateWinner: function () {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (this.state.squares[a] && this.state.squares[a] === this.state.squares[b] && this.state.squares[a] === this.state.squares[c]) {
      return this.state.squares[a];
    }
  }
  return null;
},
  render: function () {
    var winner = this.calculateWinner();
    var status = winner ? "The winner is: " + winner : '';
    var turn = this.state.xIsNext ? 'X is next' : 'O is next';
    return (
      <div className="game">
        <div className="game-board">
          <Board onClick={this.clickHandler} squares={this.state.squares} />
        </div>
        <div class="game-info">
          <div>{status}</div>
          <div>{turn}</div>
        </div>
      </div>
    );
  }
});

export default Game;
