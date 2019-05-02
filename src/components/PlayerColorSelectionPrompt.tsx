import React, { Component} from 'react';

import UserPrompt from './generic_components/UserPrompt';

interface pcspProps {
	addPlayersToGame: Function
}

class PlayerColorSelectionPrompt extends Component<pcspProps> {
    clickHandler(e: any, p1: string, p2: string) {
		e.preventDefault();
        this.props.addPlayersToGame(
			{players: [
				{ name: "Player 1", color: p1 },
				{ name: "Player 2", color: p2 }
			]}
		);
        return false;
    }

    render() {
		var buttons = [
			{text: "Black", onClickHandler: (e: any) => {this.clickHandler(e, 'black', 'red')}},
			{text: "Red", onClickHandler: (e: any) => {this.clickHandler(e, 'red', 'black')}}
		];

        return (<UserPrompt message="Player 1 please select your color" buttons={buttons} />);
    }
}

export default PlayerColorSelectionPrompt;