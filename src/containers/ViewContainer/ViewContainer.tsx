import React, { Component } from 'react';

import PlayerColorSelectionContainer from '../PlayerColorSelectionContainer';
import GameBoardContainer from '../GameBoardContainer';
import OutcomePrompt from '../../components/OutcomePrompt';
import { resetGame } from '../../actions';

interface vcProps {
	playerColors: object,
	gameResult: string,
	resetGame: Function
}

class ViewContainer extends Component<vcProps> {
	render() {
		if (this.props.playerColors == null) {
			return (<PlayerColorSelectionContainer />);
		}
		if (this.props.gameResult == null) {
			return (<GameBoardContainer playerColors={this.props.playerColors} />);
		}
		else if(this.props.playerColors != null) {
			return (<OutcomePrompt result={this.props.gameResult} resetGame={resetGame} />);
		}
	}
}

export default ViewContainer;