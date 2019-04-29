import { connect } from 'react-redux';

import ViewContainer from './ViewContainer';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const mapStateToProps = (state, ownProps) => {
	return {
		playerColors: state.playerColors,
		gameResult: state.result
	};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ViewContainer);
