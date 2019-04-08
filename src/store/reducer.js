import {combineReducers} from "redux";
//算法商城
import shopReducer from './shopping/reducer'
import newsList from "./news/reducer"
import Case from "./Case/reducer"
export default combineReducers({
	shopdata:shopReducer,
	newsList,
	Case
});