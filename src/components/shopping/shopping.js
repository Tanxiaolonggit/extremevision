import React,{Component} from 'react';
//引入css
import './shopping.css';
//引入react-redux的connect组件
import {connect} from 'react-redux'
//引入react-redux的bindActionCreators组件
import {bindActionCreators} from 'redux'
//引入子组件show
import Show from './page/show'

class Shopping extends Component{
	render(){
		let {list}=this.props
		return <div>
				<ul>
					{
						list.map((item,index)=>{
							return <li key={index}>{item}</li>
						})
					}
				</ul>
				 <Show />
			   </div>
	}
}

//映射属性
var mapstate = (state)=>{
	return{
		list:state.shopdata.allList
	}
}
//映射方法
var mapDispatchToProps=(dispatch)=>{//映射方法 映射需要的
	return {
	}
}

export default connect(mapstate,mapDispatchToProps)(Shopping)