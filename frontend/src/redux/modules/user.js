// imports

// actions

const SAVE_TOKEN = "SAVE_TOKEN";
const LOGOUT = "LOGOUT";
const SET_USER_LIST = "SET_USER_LIST";

// action creators

function saveToken(token) {
    return {
        type: SAVE_TOKEN,
        token
    }
}

function logout() {
    return {
        type: LOGOUT
    }
}

function setUserList(userList) {
    return {
        type: SET_USER_LIST,
        userList
    }
}

// API actions

function facebookLogin(access_token) {
    return dispatch => {
        fetch("/users/login/facebook/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                access_token
            })
        })
        .then(response => response.json())
        .then(json => {
            if (json.token) {
                dispatch(saveToken(json.token));
            }
        })
        .catch(err => console.log(err));
    }
}

function usernameLogin(username, password) {
    return function(dispatch) {
        fetch("/rest-auth/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(response => response.json())
        .then(json => {
            if (json.token) {
                dispatch(saveToken(json.token));
            }
        })
        .catch(err => console.log(err));
    }
}

function createAccount(username, password, email, name) {
    return function(dispatch) {
        fetch("/rest-auth/registration/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password1: password,
                password2: password,
                email,
                name
            })
        })
        .then(response => response.json())
        .then(json => {
            if (json.token) {
                dispatch(saveToken(json.token))
            }
        })
        .catch(err => console.log(err));
    }
}

function getPhotoLikes(photoId) {
    return (dispatch, getState) => {
        const { user: { token } } = getState();
        fetch(` /images/${photoId}/likes/`, {
            headers: {
                Authorization: `JWT ${token}`
            }
        })
        .then(response => {
            if (response.status === 401) {
                dispatch(logout());
            }
            return response.json();
        })
        .then(json => {
            dispatch(setUserList(json));
        })
    }
}

// initial state

const initialState = {
    isLoggedIn: localStorage.getItem("jwt") ? true : false,
    token: localStorage.getItem("jwt")
};

// reducer

function reducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_TOKEN:
            return applySetToken(state, action);
        case LOGOUT:
            return applyLogout(state, action);
        case SET_USER_LIST:
            return applySetUserList(state, action);
        default:
            return state;
    }
};

// reducer functions

function applySetToken(state, action) {
    const { token } = action;
    localStorage.setItem("jwt", token);

    return {
        ...state,
        isLoggedIn: true,
        token
    }
}

function applyLogout(state, action) {
    localStorage.removeItem("jwt");

    return {
        isLoggedIn: false
    }
}

function applySetUserList(state, action) {
    const { userList } = action;
    return {
        ...state,
        userList
    }
}

// exports

const actionCreators = {
    facebookLogin,
    usernameLogin,
    createAccount,
    logout,
    getPhotoLikes,
};

export { actionCreators };

// reducer export

export default reducer;
