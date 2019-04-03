import {combineReducers} from "redux";
//算法商城
import shopReducer from './shopping/reducer'
export default combineReducers({
	shopdata:shopReducer
});