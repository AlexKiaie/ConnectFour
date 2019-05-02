import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import GameController from './GameController';
import { isWinningMove, isBoardFull } from '../../utils/gameUtils';
import { PlayerData, GamePlayerData } from '../../publicInterfaces';
import GameMatrix from './GameMatrix';
import { genColProps } from '../../utils/gridDisplayUtils';

interface gbProps {
	playerData: GamePlayerData,
	gameState: PlayerData[][],
	endTurnCallback: Function,
	finishGame: Function
}

interface gbState {
	boardState: PlayerData[][],
	currentPlayerIdx: number,
	currentPlayer: PlayerData
}

class GameBoard extends Component<gbProps, gbState> {
	constructor(props: gbProps) {
		super(props);
		this.state = {
			boardState: this.props.gameState,
			currentPlayerIdx: 0,
			currentPlayer: this.props.playerData.players[0],
		};
	}

	processMove = (columnIndex: number) => {
		var rowOfNewPiece = -1;
		
		this.props.gameState.forEach((row, rowNo) => {
			if (rowOfNewPiece < 0 && row[columnIndex].color === undefined) {
				row[columnIndex] = Object.assign({}, this.state.currentPlayer);
				rowOfNewPiece = rowNo;
			}
		});
		
		if (rowOfNewPiece < 0) {
			alert("The column you selected is full, please choose again");
		}
		else if (isWinningMove(this.props.gameState, rowOfNewPiece, columnIndex)) {
			this.props.finishGame(this.state.currentPlayer.color + " Player Wins!");
		}
		else if (isBoardFull(this.props.gameState)) {
			this.props.finishGame("TIE Game!");
		}
		else {
			this.props.endTurnCallback(this.props.gameState);
			var nextPlayerIdx = this.state.currentPlayerIdx === this.props.playerData.players.length - 1 ? 0 : this.state.currentPlayerIdx+1;
			this.setState({
				boardState: this.props.gameState,
				currentPlayerIdx: nextPlayerIdx,
				currentPlayer: this.props.playerData.players[nextPlayerIdx]
			});
		}
	}

    render() {
		return (
			<Row middle="md">
				<Col xsOffset={3} {...genColProps(6,6,6,6,6)}>
					<GameController currentPlayer={this.state.currentPlayer} processMove={this.processMove} />
					<GameMatrix gameData={this.state.boardState} />
				</Col>
			</Row>
		);
	}
}

export default GameBoard;