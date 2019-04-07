import initState from "./state";

export default (state=initState,action)=>{
    let newState={...state};
    console.log(newState)
    return newState;
}