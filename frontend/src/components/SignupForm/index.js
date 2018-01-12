import { connect } from "react-redux";
import Container from "./container";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        facebookLogin: (access_token) => {
            dispatch(userActions.facebookLogin(access_token));
        }
    }
}

export default connect(null, mapDispatchToProps)(Container);
