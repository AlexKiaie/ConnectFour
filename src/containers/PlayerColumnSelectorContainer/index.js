import { connect } from 'react-redux';

import PlayerColumnSelectorContainer from './PlayerColumnSelectorContainer';

import { updateGameState } from '../../actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    playerTurnComplete: () => dispatch(updateGameState())
  };
};

const mapStateToProps = (state, ownProps) => {
  return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GameBoardContainer);
