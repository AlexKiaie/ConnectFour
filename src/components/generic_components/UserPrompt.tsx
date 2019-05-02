import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import './UserPrompt.css';

import { UserPromptProperties } from '../../publicInterfaces';
import { genColProps } from '../../utils/gridDisplayUtils';

const UserPrompt = (config: UserPromptProperties) => {
	var colOffset = 6 - Math.ceil(config.buttons.length);
	return(
		<Row className="user-prompt-wrap" center="md" middle="md">
			<Col className="user-prompt-frame" {...genColProps(6,6,6,6,6)}>
				<Row>
					<Col {...genColProps()}>
						<h2>{config.message}</h2>
					</Col>
				</Row>
				<Row>
						{config.buttons.map((btn, idx) => {
							return (
								<Col xsOffset={idx === 0 ? colOffset : 0} {...genColProps(2,2,2,2,2)} key={idx}>
									<button onClick={e =>{btn.onClickHandler(e)}}>{btn.text}</button>
								</Col>
							);
						})}
				</Row>
			</Col>
		</Row>
	);
}

export default UserPrompt;