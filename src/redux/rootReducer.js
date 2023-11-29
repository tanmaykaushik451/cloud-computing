import { combineReducers } from "redux";
import {LayoutReducer} from "../layout/reducer"

const rootReducer = combineReducers({
    layout:LayoutReducer
})

export default rootReducer