import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import formStyles from "shared/formStyles.scss";

export const SignupForm = (props, context) => (
    <div className={formStyles.formComponent}>
        <h3 className={formStyles.signupHeader}>{context.t("Sign up to see photos and videos from your friends.")}</h3>
        <button className={formStyles.button}>
            <Ionicon icon="logo-facebook" fontSize="20px" color="#FFFFFF" />
            {context.t("Log in with Facebook")}
        </button>
        <span className={formStyles.divider}>{context.t("or")}</span>
        <form className={formStyles.form}>
            <input type="email" placeholder={context.t("Email")} className={formStyles.textInput} />
            <input type="text" placeholder={context.t("Full Name")} className={formStyles.textInput} />
            <input type="username" placeholder={context.t("Username")} className={formStyles.textInput} />
            <input type="password" placeholder={context.t("Password")} className={formStyles.textInput} />
            <input type="submit" value={context.t("Sign up")} className={formStyles.button} />
        </form>
        <p className={formStyles.terms}>
            {context.t("By signing up, you agree to our")} <span>{context.t("Terms & Privacy Policy")}</span>.
        </p>
    </div>
);

SignupForm.propTypes = {
    emailValue: PropTypes.string.isRequired,
    fullnameValue: PropTypes.string.isRequired,
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

SignupForm.contextTypes = {
    t: PropTypes.func.isRequired
}

export default SignupForm;
