import React from "react";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";
import formStyles from "shared/formStyles.scss";

export const SignupForm = (props, context) => (
    <div className={formStyles.formComponent}>
        <h3 className={formStyles.signupHeader}>{context.t("Sign up to see photos and videos from your friends.")}</h3>
        <FacebookLogin
            appId="127325951271734"
            autoLoad={false}
            fields="name, email, picture"
            callback={props.handleFacebookLogin}
            cssClass={formStyles.button}
            icon="fa-facebook-official"
            textButton={context.t("Log in with Facebook")}
        />
        <span className={formStyles.divider}>{context.t("or")}</span>
        <form className={formStyles.form} onSubmit={props.handleSubmit}>
            <input
                type="email"
                placeholder={context.t("Email")}
                className={formStyles.textInput}
                onChange={props.handleInputChange}
                name="email" />
            <input
                type="text"
                placeholder={context.t("Full Name")}
                className={formStyles.textInput}
                onChange={props.handleInputChange}
                name="name" />
            <input
                type="username"
                placeholder={context.t("Username")}
                className={formStyles.textInput}
                onChange={props.handleInputChange}
                name="username" />
            <input
                type="password"
                placeholder={context.t("Password")}
                className={formStyles.textInput}
                onChange={props.handleInputChange}
                name="password" />
            <input type="submit" value={context.t("Sign up")} className={formStyles.button} />
        </form>
        <p className={formStyles.terms}>
            {context.t("By signing up, you agree to our")} <span>{context.t("Terms & Privacy Policy")}</span>.
        </p>
    </div>
);

SignupForm.propTypes = {
    emailValue: PropTypes.string.isRequired,
    nameValue: PropTypes.string.isRequired,
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFacebookLogin: PropTypes.func.isRequired,
}

SignupForm.contextTypes = {
    t: PropTypes.func.isRequired
}

export default SignupForm;
