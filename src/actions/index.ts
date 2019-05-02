import { GamePlayerData, PlayerData } from '../publicInterfaces';

export const UPDATE_GAME_BOARD = 'UPDATE_GAME_BOARD';
export const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER';
export const SET_PLAYER_DATA = 'SET_PLAYER_DATA';
export const SET_MATCH_RESULT = 'SET_MATCH_RESULT';
export const RESET_GAME = 'RESET_GAME';

export function populatePlayerData(data: GamePlayerData) {
	return {
		type: SET_PLAYER_DATA,
		playerData: data
	}
}

export function updateGameState(columnData: PlayerData[][]) {
    return {
		type: UPDATE_GAME_BOARD,
        columnState: columnData
    }
}

export function setCurrentPlayer(playerName: string) {
    return {
		type: SET_CURRENT_PLAYER,
        currentPlayer: playerName
    }
}

export function setMatchResults(result: string) {
	return {
		type: SET_MATCH_RESULT,
		result: result
	}
}

export function resetGame() {
	return {
		type: RESET_GAME
	}
}