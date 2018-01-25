import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "redux/modules/photos";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getPhotoLikes: () => {
            dispatch(photoActions.getPhotoLikes(ownProps.id));
        }
    }
}

export default connect(null, mapDispatchToProps)(Container);
