import React,{Component} from 'react';
import ProHead from "./component/proHead"
import Profoot from "./component/profoot"

//引入react-redux的connect组件
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
export default class Product extends Component{
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
				<Profoot type={this.state.type}></Profoot>
			</section>
		)
	}
}




