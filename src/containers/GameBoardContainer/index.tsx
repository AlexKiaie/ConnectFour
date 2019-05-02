import { connect } from 'react-redux';

import GameBoardContainer from './GameBoardContainer';
import { updateGameState, setMatchResults } from '../../actions';
import { PlayerData } from '../../publicInterfaces';

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  	return {
		updateBoard: (newState: PlayerData[][]) => dispatch(updateGameState(newState)),
		finishGame: (result: string) => dispatch(setMatchResults(result))
	};
};

const mapStateToProps = (state: any, ownProps: any) => {
	return {
		playerData: state.playerInfo,
		gameState: state.gameState
	};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GameBoardContainer);
