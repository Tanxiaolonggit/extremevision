import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Menu, Dropdown, Icon } from 'antd';
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
import Product from "./components/products/products"
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
			},
			{
				path:'/hyfa/:type',
				component:Product
			}
		]
	}
	
  render() {
	const menu = (
		<Menu className="menubg">
		  <Menu.Item>
		  <NavLink to="/hyfa/anquan">智慧安防解决方案</NavLink>
		  </Menu.Item>
		  <Menu.Item>
			<NavLink to="/hyfa/city">智慧城市解决方案</NavLink>
		  </Menu.Item>
		  <Menu.Item>
		  <NavLink to="/hyfa/shop">智慧零售解决方案</NavLink>
		  </Menu.Item>
		</Menu>
	  );
    return (
      <div className="App">
      		<div >
      			<div className="headerOut">
      				<div className="header">
		      			<Link to="/home"><img src={require('./assets/img/logo.png')}/></Link>
		      			<ul className="nav">
							  <li><NavLink to="/shopping">算法商城</NavLink></li>
							  <Dropdown overlay={menu}>
							  <li className="ant-dropdown-link" style={{color:"#bbb"}}>行业方案<Icon type="down" /></li>
							  </Dropdown>
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
