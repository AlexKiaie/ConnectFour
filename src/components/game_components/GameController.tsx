import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid';

import { PlayerData } from '../../publicInterfaces';
import Config from '../../constants';
import { genColProps } from '../../utils/gridDisplayUtils';

interface gcProps {
	currentPlayer: PlayerData,
	processMove: Function
}

interface gcState {
	selectedColumn: number
}

class GameController extends Component<gcProps, gcState> {
	constructor(props: gcProps) {
		super(props);
		this.state = { selectedColumn: 0 };
	}

	changeColumnSelection(delta: number) {
		var newCol = this.state.selectedColumn + delta;
		if (newCol >= 0 && newCol <= Config.GameBoardColCount-1) {
			this.setState({ selectedColumn: newCol });
		}
	}

	render() {
		var fwColProps = genColProps();
		
		return (
			<Row id="GameController">
				<Col {...fwColProps}>
					<Row>
						<Col {...fwColProps}>
							<span>{this.props.currentPlayer.name} - Select a column to drop your next piece</span>
						</Col>
					</Row>
					<Row>
						<button onClick={() => {this.changeColumnSelection(-1)}}>LEFT</button>
						<button onClick={() => {this.changeColumnSelection(1)}}>RIGHT</button>
						<button onClick={() => {this.props.processMove(this.state.selectedColumn)}}>Drop Piece</button>
					</Row>
					<Row>
						<Col className="piece-preview" xsOffset={this.state.selectedColumn} {...genColProps(1,1,1,1,1)}>
							{this.props.currentPlayer.color}
						</Col>
					</Row>
				</Col>
			</Row>
		);
	}
}

export default (GameController);