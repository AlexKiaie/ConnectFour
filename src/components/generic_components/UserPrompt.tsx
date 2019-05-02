import React from 'react';

interface UserPromptProperties {
	message: string, 
	buttons: Array<{
		text: string, 
		onClickHandler: Function
	}>
}

const UserPrompt = (config: UserPromptProperties) => {
	return(
		<div>
			<p>{config.message}</p>
			
			<div>
				{config.buttons.map((btn, idx) => {
					return (<button key={idx} onClick={e =>{btn.onClickHandler(e)}}>{btn.text}</button>);
				})}
			</div>			
		</div>
	);
}

export default UserPrompt;