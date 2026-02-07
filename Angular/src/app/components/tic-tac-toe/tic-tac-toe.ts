import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tic-tac-toe.html',
  styleUrl: './tic-tac-toe.css',
})
export class TicTacToe {

  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  currentPlayer: string = 'X';
  winner: string | null = null;

  makeMove(row: number, col: number): void {
    if (!this.board[row][col] && !this.winner) {
      this.board[row][col] = this.currentPlayer;

      if (this.checkWinner()) {
        this.winner = this.currentPlayer;
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  checkWinner(): boolean {
    const lines = [
      // rows
      ...this.board,
      // cols
      [this.board[0][0], this.board[1][0], this.board[2][0]],
      [this.board[0][1], this.board[1][1], this.board[2][1]],
      [this.board[0][2], this.board[1][2], this.board[2][2]],
      // diagonals
      [this.board[0][0], this.board[1][1], this.board[2][2]],
      [this.board[0][2], this.board[1][1], this.board[2][0]]
    ];

    return lines.some(line => line.every(cell => cell === this.currentPlayer));
  }

  reset(): void {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.currentPlayer = 'X';
    this.winner = null;
  }
}