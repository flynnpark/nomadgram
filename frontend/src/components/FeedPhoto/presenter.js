import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import PhotoActions from "components/PhotoActions";
import PhotoComments from "components/PhotoComments";
import TimeStamp from "components/TimeStamp";
import CommentBox from "components/CommentBox";

const FeedPhoto = (props, context) => {
    return (
        <div className={styles.feedPhoto}>
            <header className={styles.header}>
                <div className={styles.profileImage} style={{backgroundImage: `url(${props.creator.profile_image || require("images/noPhoto.jpg")})`}}></div>
                <div className={styles.headerColumn}>
                    <span className={styles.creator}>{props.creator.username}</span>
                    <span className={styles.location}>{props.location}</span>
                </div>
            </header>
            <img src={props.file} alt={props.caption} />
            <div className={styles.meta}>
                <PhotoActions number={props.like_count} />
                <PhotoComments
                    caption={props.caption}
                    creator={props.creator.username}
                    comments={props.comments} />
                <TimeStamp time={props.natural_time} />
                <CommentBox />
            </div>
        </div>
    );
};

FeedPhoto.propTypes = {
    creator: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
    }).isRequired,
    location: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
    like_count: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            message: PropTypes.string.isRequired,
            creator: PropTypes.shape({
                profile_image: PropTypes.string,
                username: PropTypes.string.isRequired
            }).isRequired,
        })
    ).isRequired,
    natural_time: PropTypes.string.isRequired,
}

export default FeedPhoto;
