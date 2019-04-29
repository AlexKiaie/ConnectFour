import { combineReducers } from 'redux';

import { 
	UPDATE_GAME_BOARD, 
	SET_CURRENT_PLAYER, 
	SET_MATCH_RESULT,
	SET_PLAYER_COLORS
} from '../actions';

export function playerColors(state = null, action) {
	switch(action.type) {
		case SET_PLAYER_COLORS:
			return action.playerColorInfo;
		default: return state;
	}
}

export function gameState(state = null, action) {
    switch(action.type) {
		case UPDATE_GAME_BOARD:
			return action.columnState;
		default: return state;
	}
}

export function currentPlayer(state = null, action) {
	switch(action.type) {
		case SET_CURRENT_PLAYER:
			return action.currentPlayer;
		default: return state;
	}
}

export function result(state = null, action) {
	switch(action.type) {
		case SET_MATCH_RESULT:
			return action.result;
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