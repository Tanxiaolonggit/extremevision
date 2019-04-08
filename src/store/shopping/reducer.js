import _state from './state'
export default (state=_state,action)=>{
	var newState={...state}	
	if(action.type=="ALL"){
		newState.CurList=[...newState.sflist]
	}else if(action.type=="CHECK"){	
		newState.CurList=[]
		if(action.item=="全部算法"){
			newState.CurList=[...newState.sflist]
		}else{
			newState.sflist.forEach((item,index)=>{
				 if(item.keyword==action.item){
				 	newState.CurList.push(item)
				 }
			})
		}     
	}else if(action.type=="PLUS"){
		newState.CurList[action.index].read++
	}
	return newState;
}
