import { PlayerData } from '../publicInterfaces';

export function isWinningMove(gameState: PlayerData[][], rowNo: number, colNo: number): boolean {
	var winningColor = gameState[rowNo][colNo].color || '';
	return count(gameState, winningColor, colNo, rowNo, -1, 0) + 1 + count(gameState, winningColor, colNo, rowNo, 1, 0) >= 4  // horizontal
      || count(gameState, winningColor, colNo, rowNo, 0, -1) + 1 + count(gameState, winningColor, colNo, rowNo, 0, 1) >= 4  // vertical
      || count(gameState, winningColor, colNo, rowNo, -1, -1) + 1 + count(gameState, winningColor, colNo, rowNo, 1, 1) >= 4  // diagonal
      || count(gameState, winningColor, colNo, rowNo, -1, 1) + 1 + count(gameState, winningColor, colNo, rowNo, 1, -1) >= 4;
}

function count(board: PlayerData[][], colorToCheck: string, x: number, y: number, dx: number, dy: number): number {
	var count = 0;
	x += dx;  // Skip the piece at (y, x) to avoid counting it twice
	y += dy;  // when looking in both directions on a line.
	while (x >= 0 && x < board[0].length && y >= 0 && y < board.length && board[y][x].color === colorToCheck) {
		count++;
		x += dx;  // Move in the direction denoted by (dy, dx)
		y += dy;
	}
	return count;
}

export function isBoardFull(board: PlayerData[][]): boolean {
	var isFull = true;
	board.forEach(row => isFull = isFull && row[row.length-1].color !== undefined);
	return isFull;
}