import { createStore } from "redux";
import { allReducers } from "./combineReducer/comReducer";

export const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())