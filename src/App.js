import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//引入路由组件
import {Route,Link,Redirect,Switch,withRouter} from 'react-router-dom'
//引入循环渲染路由模板
import MyRoute from './components/MyRoute'
//引入home组件
import Home from './components/home/home'
//引入store组件
import Store from './components/store/store'
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
				path:'/store',
				component:Store
			}
		]
	}
  render() {
    return (
      <div className="App">
      		<div>
      				<Link to="/store">算法商城</Link>
      				<Link to="/case">行业方案</Link>
      				<Link to="/show">典型案例</Link>
      				<Link to="/honor">资质荣誉</Link>
      				<Link to="/coop">商务合作</Link>
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

export default App;
