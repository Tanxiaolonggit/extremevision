import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//引入路由组件
import {Route,NavLink,Link,Redirect,Switch,withRouter} from 'react-router-dom'
//引入循环渲染路由模板
import store from "./store/store";
import MyRoute from './components/MyRoute'
//引入home组件
import Home from './components/home/home'
//引入store组件
import Shopping  from './components/shopping/shopping'
//引入case组件
import Case  from './components/case/case'
class App extends Component {
	constructor(props){
		super(props)
		
	}
	static defaultProps ={
		navs:[
			{
				path:'/home',
				component:Home
			},
			{
				path:'/Shopping',
				component:Shopping
			},
			{
				path:'/Case',
				component:Case
			}
		]
	}
  render() {
    return (
      <div className="App">
      		<div >
      			<div className="headerOut">
      				<div className="header">
		      			<Link to="/home"><img src={require('./assets/img/logo.png')}/></Link>
		      			<ul className="nav">
		      				<li><NavLink to="/shopping">算法商城</NavLink></li>
		      				<li><NavLink to="/hyfa">行业方案</NavLink></li>
		      				<li><NavLink to="/Case">典型案例</NavLink></li>
		      				<li><NavLink to="/honor">资质荣誉</NavLink></li>
		      				<li><NavLink to="/coop">商务合作</NavLink></li>
		      			</ul>
	      			</div>
      			</div>
      			<Switch>
	      			{
	      				this.props.navs.map((item,index)=>{
	      					return <MyRoute key={index} path={item.path} component={item.component} />
	      		 		})
	      			}
	      			<Redirect from="/" to="/home" exact />
      			</Switch>
      		</div>
        	
      </div>
    );
  }
}

export default withRouter(App);
