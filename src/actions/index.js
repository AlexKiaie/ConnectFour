export const UPDATE_GAME_BOARD = 'UPDATE_GAME_BOARD';
export const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER';
export const SET_PLAYER_COLORS = 'SET_PLAYER_COLORS';
export const SET_MATCH_RESULT = 'SET_MATCH_RESULT';

export function setPlayerColors(p1, p2) {
	return {
		type: SET_PLAYER_COLORS,
		playerColorInfo: {P1Color: p1, P2Color: p2}
	}
}

export function updateGameState(columnData) {
    return {
		type: UPDATE_GAME_BOARD,
        columnState: columnData
    }
}

export function setCurrentPlayer(playerName) {
    return {
		type: SET_CURRENT_PLAYER,
        currentPlayer: playerName
    }
}

export function setMatchResults(result) {
	return {
		type: SET_MATCH_RESULT,
		result: result
	}
}