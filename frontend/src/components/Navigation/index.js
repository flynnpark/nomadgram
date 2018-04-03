import { connect } from 'react-redux';
import Container from './container';
import { push } from 'react-router-redux';
import { actionCreators as userActions } from 'redux/modules/user';

const mapStateToProps = (state, ownProps) => {
  const { user: { username } } = state;
  return { username };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    goToSearch: searchTerm => {
      dispatch(push(`/search/${searchTerm}`));
    },
    getNotifications: () => {
      dispatch(userActions.getNotifications());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
