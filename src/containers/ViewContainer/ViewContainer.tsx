import React, { Component } from 'react';
import { Col, Row } from 'react-flexbox-grid';

import PlayerColorSelectionContainer from '../PlayerColorSelectionContainer';
import GameBoardContainer from '../GameBoardContainer';
import UserPrompt from '../../components/generic_components/UserPrompt';
import { genColProps } from '../../utils/gridDisplayUtils';

interface vcProps {
	playerData: object,
	gameResult: string,
	resetGame: Function
}

class ViewContainer extends Component<vcProps> {
	selectMainView = () => {
		if (this.props.playerData == null) {
			return (<PlayerColorSelectionContainer />)
		}
		if (this.props.gameResult == null) {
			return (<GameBoardContainer />);
		}
		else {
			return (
				<UserPrompt
					message={this.props.gameResult} 
					buttons={[{text: "Ok", onClickHandler: (e: any) => { this.props.resetGame() }}]} />
			);
		}
	}

	render() {
		return(
			<Row center="md">
				<Col {...genColProps(10,10,10,10,10)}>
					<h1>Connect Four!</h1>
					{this.selectMainView()}
				</Col>
			</Row>
		);
	}
}

export default ViewContainer;