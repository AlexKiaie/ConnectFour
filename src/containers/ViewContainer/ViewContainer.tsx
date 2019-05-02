import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import PlayerColorSelectionContainer from '../PlayerColorSelectionContainer';
import GameBoardContainer from '../GameBoardContainer';
import UserPrompt from '../../components/generic_components/UserPrompt';

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
			<Container>
				<Row>
					<Col>
						{this.selectMainView()}
					</Col>
				</Row>
			</Container>
		);
	}
}

export default ViewContainer;