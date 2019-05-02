import { combineReducers } from 'redux';

import Config from '../constants';
import { 
	UPDATE_GAME_BOARD, 
	SET_CURRENT_PLAYER, 
	SET_MATCH_RESULT,
	SET_PLAYER_COLORS,
	RESET_GAME
} from '../actions';
import { PlayerData } from '../publicInterfaces';

export function playerColors(state = null, action: any) {
	switch(action.type) {
		case SET_PLAYER_COLORS:
			return action.playerColorInfo;
		case RESET_GAME:
			return null;
		default: return state;
	}
}

var initialGameState: PlayerData[][] = 
	Array.apply(null, Array(Config.GameBoardRowCount))
		.map(() => {
			return Array.apply(null, Array(Config.GameBoardColCount))
				.map(() => { return {name: undefined, color: undefined} as PlayerData });
		});

export function gameState(state = initialGameState, action: any) {
    switch(action.type) {
		case UPDATE_GAME_BOARD:
			// console.log('reduce game state');
			return action.columnState;
		case SET_MATCH_RESULT:
			return initialGameState;
		default:
			return state;
	}
}

export function currentPlayer(state = null, action: any) {
	switch(action.type) {
		case SET_PLAYER_COLORS:
			return action.playerColorInfo.players[0];
		case SET_CURRENT_PLAYER:
			return action.currentPlayer;
		case RESET_GAME:
			return null;
		default: return state;
	}
}

export function result(state = null, action: any) {
	switch(action.type) {
		case SET_MATCH_RESULT:
			return action.result;
		case RESET_GAME:
			return null;
		default: return state;
	}
}

const rootReducer = combineReducers({
	playerColors,
	gameState,
	currentPlayer,
	result
});

export default rootReducer;