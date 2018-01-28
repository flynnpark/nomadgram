import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import UserDisplay from "components/UserDisplay";

const Explore = props => {
    if (props.loading) {
        return <LoadingFeed />;
    } else if (props.userList) {
        return <RenderFeed {...props} />;
    }
};

const LoadingFeed = props => (
    <div className={styles.explore}>
        <Loading />
    </div>
);

const RenderFeed = props => (
    <div className={styles.explore}>
        {props.userList.map(
            user => <UserDisplay big={true} horizontal={true} user={user} key={user.id} />
        )}
    </div>
)

Explore.propTypes = {
    loading: PropTypes.bool.isRequired,
};

export default Explore;
