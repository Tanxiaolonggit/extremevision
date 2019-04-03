import React, { Component } from 'react';
//引入react-redux的connect组件
import {connect} from 'react-redux'
//引入react-redux的bindActionCreators组件
import {bindActionCreators} from 'redux'

class Show extends Component {
	render(){
		return <div>111</div>
	}
}
//映射属性
var mapstate = (state)=>{
	return{
		
	}
}
//映射方法
var mapDispatchToProps=(dispatch)=>{//映射方法 映射需要的
	return {
		
	}
}
export default connect(mapstate,mapDispatchToProps)(Show)