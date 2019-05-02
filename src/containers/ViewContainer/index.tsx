import { connect } from 'react-redux';

import ViewContainer from './ViewContainer';
import { resetGame } from '../../actions';

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
	  resetGame: () => dispatch(resetGame())
  };
};

const mapStateToProps = (state: any, ownProps: any) => {
	return {
		playerData: state.playerInfo,
		gameResult: state.result
	};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ViewContainer);
