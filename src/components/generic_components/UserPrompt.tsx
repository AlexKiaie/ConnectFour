import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import './UserPrompt.css';

import { UserPromptProperties } from '../../publicInterfaces';
import { genColProps } from '../../utils/gridDisplayUtils';

const UserPrompt = (config: UserPromptProperties) => {
	return(
		<Row className="user-prompt-wrap" center="md" middle="md">
			<Col className="user-prompt-frame" {...genColProps(6,6,6,6,6)}>
				<Row>
					<Col {...genColProps()}>
						<h2>{config.message}</h2>
					</Col>
				</Row>
				<Row center="md">
					<Col {...genColProps()}>
						{config.buttons.map((btn, idx) => {
							return (<button key={idx} onClick={e =>{btn.onClickHandler(e)}}>{btn.text}</button>);
						})}
					</Col>
				</Row>
			</Col>
		</Row>
	);
}

export default UserPrompt;