import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import PhotoDisplay from "components/PhotoDisplay";

const Profile = props => {
    if (props.loading) {
        return <LoadingProfile />;
    } else if (props.profile) {
        return <RenderProfile {...props} />;
    }
};

const LoadingProfile = props => (
    <div className={styles.profile}>
        <Loading />
    </div>
);

const RenderProfile = props => (
    <div className={styles.profile}>
        <div className={styles.profileHeader}>
        </div>
        <div className={styles.photoList}>
            {props.profile.images.map(photo => <PhotoDisplay {...photo} key={photo.id} />)}
        </div>
    </div>
)

Profile.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Profile;
