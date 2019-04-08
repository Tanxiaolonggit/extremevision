import initState from "./state";

export default (state=initState,action)=>{
    let newState={...state};
    return newState;
}