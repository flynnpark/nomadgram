import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user';

const mapDispatchToProps = (dispatch, ownProps) => {
  const { is_following, pk } = ownProps;
  return {
    handleFollow: () => {
      if (is_following) {
        dispatch(userActions.unfollowUser(pk));
      } else {
        dispatch(userActions.followUser(pk));
      }
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);
