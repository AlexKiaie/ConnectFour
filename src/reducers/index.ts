import { combineReducers } from 'redux';

import Config from '../constants';
import { PlayerData } from '../publicInterfaces';
import { 
	UPDATE_GAME_BOARD, 
	SET_CURRENT_PLAYER, 
	SET_MATCH_RESULT,
	SET_PLAYER_DATA,
	RESET_GAME
} from '../actions';

export function playerInfo(state = null, action: any) {
	switch(action.type) {
		case SET_PLAYER_DATA:
			return action.playerData;
		case RESET_GAME:
			return null;
		default: return state;
	}
}

var initialGameState = () :PlayerData[][] => {
	return Array.apply(null, Array(Config.GameBoardRowCount))
		.map(() => {
			return Array.apply(null, Array(Config.GameBoardColCount))
				.map(() => { return {name: undefined, color: undefined} as PlayerData });
		});
}

export function gameState(state = initialGameState(), action: any) {
    switch(action.type) {
		case UPDATE_GAME_BOARD:
			return action.columnState;
		case RESET_GAME:
			return initialGameState();
		default:
			return state;
	}
}

export function currentPlayer(state = null, action: any) {
	switch(action.type) {
		case SET_PLAYER_DATA:
			return action.playerData.players[0];
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
	playerInfo,
	gameState,
	currentPlayer,
	result
});

export default rootReducer;