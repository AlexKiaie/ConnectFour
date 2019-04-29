import React, { Component } from 'react';

class PlayerTurnHeader extends Component {
    render() {
		const { currentPlayer } = this.props;
        return (<span>{currentPlayer} - Select a column to drop your next piece</span>);
    }
}

export default PlayerTurnHeader;