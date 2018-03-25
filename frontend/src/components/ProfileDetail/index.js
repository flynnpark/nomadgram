import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user';

const mapDispatchToProps = (dispatch, ownProps) => {
    const { is_following, username } = ownProps;
    return {
        handleFollow: () => {
            if (is_following) {
                dispatch(userActions.unfollowUser(username));
            } else {
                dispatch(userActions.followUser(username));
            }
        }
    };
};

export default connect(null, mapDispatchToProps)(Container);
