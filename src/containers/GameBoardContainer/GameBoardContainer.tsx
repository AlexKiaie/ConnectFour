import * as React from 'react';

import GameBoard from '../../components/game_components/GameBoard';
import { PlayerData, GamePlayerData } from '../../publicInterfaces';

interface gbcProps {
	updateBoard: Function,
	playerData: GamePlayerData
	gameState: PlayerData[][],
	finishGame: Function
}

class GameBoardContainer extends React.Component<gbcProps> {
	componentWillReceiveProps(nextProps: any) {
		console.log('board will receive props ' + nextProps);
	}

	render() {
		return (
			<GameBoard 
				gameState={this.props.gameState} 
				playerData={this.props.playerData} 
				endTurnCallback={this.props.updateBoard}
				finishGame={this.props.finishGame}
			/>
		);
	}
}

export default GameBoardContainer;