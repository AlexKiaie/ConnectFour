import { connect } from 'react-redux';

import PlayerTurnHeaderContainer from './PlayerTurnHeaderContainer';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const mapStateToProps = (state, ownProps) => {
  return {
	  currentPlayer: state.currentPlayer
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PlayerTurnHeaderContainer);
