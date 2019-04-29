import React, {Component} from 'react';

class PlayerColumnSelectorContainer extends Component {
	render() {
		const { currentPlayer } = this.props;
		<span class={"icon-player" + currentPlayer}></span>
	}
}

export default PlayerColumnSelectorContainer;