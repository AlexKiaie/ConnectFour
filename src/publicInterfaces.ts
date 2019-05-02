export interface GamePlayerData {
	players: Array<PlayerData>
}

export interface PlayerData {
	name?: string,
	color?: string
}

export interface UserPromptProperties {
	message: string, 
	buttons: Array<{
		text: string, 
		onClickHandler: Function
	}>
}