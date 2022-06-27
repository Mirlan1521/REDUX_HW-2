import {combineReducers} from "redux";
import {titleReducer} from "./titleReducer";
import {createUserReducer} from "./craeteUserReducer";



export const rootReducer = combineReducers({
        title: titleReducer,
        users: createUserReducer,

})