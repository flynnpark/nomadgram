import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user';

const mapStateToProps = (state, ownProps) => {
    const { loading, user: { profile } } = state;
    return {
        loading,
        profile
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { match: { params: { username } } } = ownProps;
    const { profile } = ownProps;
    return {
        getUserProfile: () => {
            dispatch(userActions.getUserProfile(username));
        },
        handleFollow: () => {
            if (profile.is_following) {
                dispatch(userActions.unfollowUser(profile.id));
            } else {
                dispatch(userActions.followUser(profile.id));
            }
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
