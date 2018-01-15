import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import styles from "./styles.scss";

const PhotoActions = (props, context) => (
    <div>
        <div>
            <span>
                <Ionicon icon="ios-heart-outline" fonrSize="28px" color="black" />
            </span>
            <span>
                <Ionicon icon="ios-text-outline" fonrSize="28px" color="black" />
            </span>
        </div>
        <span>
            {props.number}{" "}
            {props.number === 1 ? context.t("like") : context.t("likes")}
        </span>
    </div>
);

PhotoActions.contextTypes = {
    t: PropTypes.func.isRequired
};

PhotoActions.propTypes = {
    number: PropTypes.number.isRequired
};

export default PhotoActions;
