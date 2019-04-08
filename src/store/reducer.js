import {combineReducers} from "redux";
//算法商城
import shopReducer from './shopping/reducer'
import newsList from "./news/reducer"
import List	from "./cooperation/reducer"
import Case from "./Case/reducer"
import product from "./product/redurce"
export default combineReducers({
	shopdata:shopReducer,
	newsList,
	Case,
	product,
	List

});