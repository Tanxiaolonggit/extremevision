import React,{Component} from 'react';
import ProHead from "./component/proHead"

//引入react-redux的connect组件
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
class Product extends Component{
	constructor(props){
		super(props);
		this.state={
			type:"anquan",
			plist:props.plist,
			clist:{}
		}
	}
	componentDidMount(){
		this.setState((prevState, props) => {
			if(this.state.type!=props.match.params.type){
					return {
					type: props.match.params.type
				}
			}
		  });

	}
	componentDidUpdate(){
		
		this.setState((prevState, props) => {
			if(this.state.type!=props.match.params.type){
					return {
					type: props.match.params.type
				}
			}
		  });
		
	}

	render(){
		return (
			<section>
				<ProHead type={this.state.type}></ProHead>
			</section>
		)
	}
}

//映射属性
var mapStateToProps = (state)=>{
	return{
		plist:{...state.product.plist}
	}
}
//映射方法
var mapDispatchToProps=(dispatch)=>{//映射方法 映射需要的
	return {
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)
