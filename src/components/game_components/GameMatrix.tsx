import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

import { PlayerData } from '../../publicInterfaces';

interface gmProps {
	gameData: Array<Array<PlayerData>>
}

class GameMatrix extends Component<gmProps> {
    render() {
		var matrixMarkup = this.props.gameData.map((col, colIdx) => {
			return (
				<tr key={colIdx}>
					{col.map((value, rowIdx) => 
						<td key={rowIdx+""+colIdx}>
							{value.color}
						</td>
					)}
				</tr>);
		}).reverse();

        return(
			<div id="gameMatrix">
				<Table bordered >
					<tbody>
						{matrixMarkup}
					</tbody>
				</Table>
			</div>
		);
    }
}

export default GameMatrix;