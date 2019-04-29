import React, {Component} from 'react';

class PlayerTurnHeaderContainer extends Component {
	render() {
		const { currentPlayer } = this.props;
		<span class={"icon-" + currentPlayer}></span>
	}
}

export default PlayerTurnHeaderContainer;