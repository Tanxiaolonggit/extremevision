import _state from './state'
export default (state=_state,action)=>{
	var newState={...state};
	return newState;
}
