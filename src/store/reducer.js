import {combineReducers} from "redux";
//算法商城
import shopReducer from './shopping/reducer'
import newsList from "./news/reducer"
<<<<<<< HEAD
import List	from "./cooperation/reducer"
export default combineReducers({
	shopdata:shopReducer,newsList,List
=======
import Case from "./Case/reducer"
import product from "./product/redurce"
export default combineReducers({
	shopdata:shopReducer,
	newsList,
	Case,
	product
>>>>>>> 4414cfc4d6a47a602a83c7d0dfeb89973d35a96e
});