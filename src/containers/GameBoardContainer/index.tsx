import { connect } from 'react-redux';

import GameBoardContainer from './GameBoardContainer';
import { updateGameState, setMatchResults } from '../../actions';
import { PlayerData } from '../../publicInterfaces';

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  	return {
		updateGameState: (newState: PlayerData[][]) => dispatch(updateGameState(newState)),
		finishGame: (result: string) => dispatch(setMatchResults(result))
	};
};

const mapStateToProps = (state: any, ownProps: any) => {
	return {
		currentPlayer: state.currentPlayer,
		gameState: state.gameState
	};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GameBoardContainer);
