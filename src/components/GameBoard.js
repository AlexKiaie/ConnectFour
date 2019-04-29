import React, { Component} from 'react';

import PlayerTurnHeader from './game_components/PlayerTurnHeader';
import PlayerPieceColumnSelector from './game_components/PlayerPieceColumnSelector';
import GameMatrix from './game_components/GameMatrix';

class GameBoard extends Component {
    render() {
        return (
			<div>
				<PlayerTurnHeader currentPlayer="Your mom!" />
				<PlayerPieceColumnSelector />
				<GameMatrix />
			</div>
		);
    }
}

export default GameBoard;