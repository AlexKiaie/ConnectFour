import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid';

import 'font-awesome/css/font-awesome.min.css';
import './GameController.css';

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
					<Row className="btn-array">
						<Col xsOffset={3} {...genColProps(2,2,2,2,2)}>
							<button className="btn-left" onClick={() => {this.changeColumnSelection(-1)}} />
						</Col>
						<Col {...genColProps(2,2,2,2,2)}>
							<button className="btn-right" onClick={() => {this.changeColumnSelection(1)}} />
						</Col>
						<Col {...genColProps(2,2,2,2,2)}>
							<button className="btn-drop" onClick={() => {this.props.processMove(this.state.selectedColumn)}} />
						</Col>
					</Row>
					<Row className="piece-preview-wrap">
						<Col className={"piece-preview color-" + this.props.currentPlayer.color} xsOffset={this.state.selectedColumn} />
					</Row>
				</Col>
			</Row>
		);
	}
}

export default (GameController);