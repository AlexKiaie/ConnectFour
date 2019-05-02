import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import './GameMatrix.css';	

import { PlayerData } from '../../publicInterfaces';
import { genColProps } from '../../utils/gridDisplayUtils';

interface gmProps {
	gameData: Array<Array<PlayerData>>
}

class GameMatrix extends Component<gmProps> {
    render() {
		var matrixMarkup = this.props.gameData.map((col, colIdx) => {
			return (
				<Row className="board-row" key={colIdx}>
					{col.map((value, rowIdx) => 
						<Col key={rowIdx+""+colIdx}
							className={"board-col piece-" + value.color}></Col>
					)}
				</Row>);
		}).reverse();

        return(
			<Row id="GameMatrix">
				<Col className="matrix-wrap" {...genColProps()}>
					{matrixMarkup}
				</Col>
			</Row>
		);
    }
}

export default GameMatrix;