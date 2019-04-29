import React, {Component} from 'react';

import PlayerColorSelectionPrompt from '../../components/PlayerColorSelectionPrompt';

class PlayerColorSelectionContainer extends Component {
	render() {
		const { colorSelected } = this.props;

		return (
			<PlayerColorSelectionPrompt selectionCallback={colorSelected} />
		);
	}
}

export default PlayerColorSelectionContainer;