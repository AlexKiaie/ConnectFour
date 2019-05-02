import { connect } from 'react-redux';

import PlayerColorSelectionContainer from './PlayerColorSelectionContainer';
import { GamePlayerData } from '../../publicInterfaces';
import { populatePlayerData } from '../../actions';

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    addPlayersToGame: (data: GamePlayerData) => dispatch(populatePlayerData(data))
  };
};

const mapStateToProps = (state: any, ownProps: any) => {
  return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PlayerColorSelectionContainer);
