import * as React from 'react';

import GameBoard from '../../components/game_components/GameBoard';
import { PlayerData } from '../../publicInterfaces';

interface gbcProps {
	updateGameState: Function,
	currentPlayer: PlayerData
	gameState: PlayerData[][],
	finishGame: Function
}

class GameBoardContainer extends React.Component<gbcProps> {
	componentWillReceiveProps(nextProps: any) {
		// console.log('willreceive props');
	}

	render() {
		// console.log('render board');
		return (
			<GameBoard 
				gameState={this.props.gameState} 
				currentPlayer={this.props.currentPlayer} 
				endTurnCallback={this.props.updateGameState}
				finishGame={this.props.finishGame}
			/>
		);
	}
}

export default GameBoardContainer;