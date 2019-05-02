import React, {Component} from 'react';

import PlayerColorSelectionPrompt from '../../components/PlayerColorSelectionPrompt';

interface pcscProps {
	addPlayersToGame: Function
}

class PlayerColorSelectionContainer extends Component<pcscProps> {
	render() {
		return (
			<PlayerColorSelectionPrompt addPlayersToGame={this.props.addPlayersToGame} />
		);
	}
}

export default PlayerColorSelectionContainer;