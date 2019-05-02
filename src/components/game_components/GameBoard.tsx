import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

import Config from '../../constants';
import { isWinningMove, isBoardFull } from '../../utils/gameUtils';
import { PlayerData } from '../../publicInterfaces';

interface gbProps {
	currentPlayer: PlayerData,
	endTurnCallback: Function,
	gameState: PlayerData[][],
	finishGame: Function
}

interface gbState {
	columnSelected: number
}

class GameBoard extends Component<gbProps, gbState> {
	constructor(props: gbProps) {
		super(props);
		this.state = {
			columnSelected: 0
		} as gbState;
	}

	processMove() {
		// console.log('process move');
		var columnToDropTo = this.state.columnSelected;
		var rowOfNewPiece = -1;
		
		this.props.gameState.forEach((row, rowNo) => {
			if (rowOfNewPiece < 0 && row[columnToDropTo].color === undefined) {
				row[columnToDropTo] = Object.assign({}, this.props.currentPlayer);
				rowOfNewPiece = rowNo;
			}
		});
		
		if (rowOfNewPiece < 0) {
			alert("The column you selected is full, please choose again");
		}
		else if (isWinningMove(this.props.gameState, rowOfNewPiece, columnToDropTo)) {
			this.props.finishGame(this.props.currentPlayer.color + " Player Wins!");
		}
		else if (isBoardFull(this.props.gameState)) {
			this.props.finishGame("TIE Game!");
		}
		else {
			// console.log('end turn');
			this.props.endTurnCallback(this.props.gameState);
		}
	}

	changeColumnSelection(delta: number) {
		var newCol = this.state.columnSelected + delta;
		if (newCol >= 0 && newCol <= Config.GameBoardColCount-1) {
			this.setState({columnSelected: newCol} as gbState);
		}
	}

    render() {
		const { currentPlayer } = this.props;
		var offset = this.state.columnSelected * 20;

		var matrixMarkup = this.props.gameState.map((col, colIdx) => {
			return (
				<tr key={colIdx}>
					{col.map((value, rowIdx) => 
						<td key={rowIdx+""+colIdx}>
							{value.color}
						</td>
					)}
				</tr>);
		})
		
		return (
			<div>
				<div id="gameController">
					<span>{currentPlayer.name}({currentPlayer ? currentPlayer.color : ""}) - Select a column to drop your next piece</span>
					<p>MOVE PIECE LEFT OR RIGHT TO CHOOSE A COLUMN</p>
					<button onClick={() => {this.changeColumnSelection(-1)}}>LEFT</button>
					<button onClick={() => {this.changeColumnSelection(1)}}>RIGHT</button>
					<button onClick={() => this.processMove()}>Drop Piece</button>
					<br />
					<span style={{paddingLeft: offset}}>{currentPlayer.color}</span>
				</div>
				<div id="gameMatrix">
					<Table bordered >
						<tbody>
							{matrixMarkup}
						</tbody>
						<thead>
							<tr>
								{Array(Config.GameBoardRowCount).map((value, index) => <th key={index}>{index}</th>)}
							</tr>
						</thead>
					</Table>
				</div>
			</div>
		);
	}
}

export default GameBoard;