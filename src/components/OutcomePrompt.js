import React, { Component} from 'react';

class GameBoard extends Component {
    render() {
		const { result } = this.props;

        return (
			<div>
				<span>{result}</span>
				<button>OK</button>
			</div>
		);
    }
}

export default GameBoard;