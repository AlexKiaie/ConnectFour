import React, { Component } from 'react'
import { PlayerData } from '../../publicInterfaces';
import Config from '../../constants';

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
		var offset = this.state.selectedColumn * (100/Config.GameBoardColCount);

		return (
			<div id="gameController">
				<span>{this.props.currentPlayer.name} - Select a column to drop your next piece</span>
				<p>MOVE PIECE LEFT OR RIGHT TO CHOOSE A COLUMN</p>
				<button onClick={() => {this.changeColumnSelection(-1)}}>LEFT</button>
				<button onClick={() => {this.changeColumnSelection(1)}}>RIGHT</button>
				<button onClick={() => {this.props.processMove(this.state.selectedColumn)}}>Drop Piece</button>
				<br />
				<span style={{paddingLeft: offset + '%'}}>{this.props.currentPlayer.color}</span>
			</div>
		);
	}
}

export default (GameController);