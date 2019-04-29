import React, { Component} from 'react';

import PlayerTurnHeader from './game_components/PlayerTurnHeader';

class GameBoard extends Component {
    render() {
        return (
			<PlayerTurnHeader currentPlayer="Your mom!" />
		);
    }
}

export default GameBoard;