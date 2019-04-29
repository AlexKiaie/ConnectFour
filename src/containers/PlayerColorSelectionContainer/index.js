import { connect } from 'react-redux';

import PlayerColorSelectionContainer from './PlayerColorSelectionContainer';

import { setPlayerColors } from '../../actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    colorSelected: (p1, p2) => dispatch(setPlayerColors(p1, p2))
  };
};

const mapStateToProps = (state, ownProps) => {
  return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PlayerColorSelectionContainer);
