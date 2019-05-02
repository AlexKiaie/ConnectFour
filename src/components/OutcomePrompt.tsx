import React, { Component} from 'react';
import UserPrompt from './generic_components/UserPrompt';

interface gbProps {
	result: string,
	resetGame: Function
}

class GameBoard extends Component<gbProps> {
    render() {
		return (
			<UserPrompt 
				message={this.props.result}
				buttons={[{text: "Ok", onClickHandler: (e: any) => { this.props.resetGame() }}]} />
		);
    }
}

export default GameBoard;