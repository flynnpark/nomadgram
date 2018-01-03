import { createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import users from "redux/modules/users";

const reducer = combineReducers({
    users
});

let store = initialState => createStore(reducer)

export default store();
