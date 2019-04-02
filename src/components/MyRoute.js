import React,{Component} from 'react';
import {Route} from 'react-router-dom';
export default class MyRoute extends Component {
	render(){
		let {path,component:Com} = this.props;
		return <Route path={path} render={
			(props)=>{
				return <Com {...props} />
			}
		} />
	}
 } 
