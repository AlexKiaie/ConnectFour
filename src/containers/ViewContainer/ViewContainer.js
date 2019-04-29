import React, { Component } from 'react';

import PlayerColorSelectionContainer from '../PlayerColorSelectionContainer';
import GameBoard from '../../components/GameBoard';
import OutcomePrompt from '../../components/OutcomePrompt';

class ViewContainer extends Component {
	render() {
		const { playerColors, gameResult } = this.props;
		
		return (
			<div className="App">
				{
					(gameResult == null) ?
						(
							(playerColors == null) ?
							<PlayerColorSelectionContainer selectionCallback={this.setPlayerColors} /> :
							<GameBoard />
						):
						<OutcomePrompt result={gameResult} />
				}
			</div>
		);
	}
}

export default ViewContainer;