import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "./static/css/font-awesome.css"
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

import Honor from "./components/honor/honor"

import Coop from './components/cooperation/cooperation'

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
				path:'/coop',
				component:Coop},{
				path:'/Case',
				component:Case
			},
			{
				path:'/hyfa/:type',
				component:Product
			},{
				path:'/honor',
				component:Honor
			}
		]
	}
	componentDidMount() {
        // 挂载滚动监听
        window.addEventListener('scroll', this.bindScroll)
    }
	bindScroll=(event)=>{
		 // 滚动的高度
        const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false) || window.pageYOffset || (event.srcElement ? event.srcElement.body.scrollTop : 0);
        if(scrollTop>100){     	
        		this.navs.style.top="-100%"
        }else{
        	this.navs.style.top="0"
        }
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
      			<div className="headerOut" ref={(node)=>this.navs=node}>
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
      		<footer className="indexFooter" >
      			<section>
		      		<div className="out">
		      			<ul>
		      				<h3>联系我们</h3>
		      				<li>销售热线:<a href="tel:400-855-8235">400-855-8235</a><span>（工作日9:00-18:00）</span></li>
		      				<li>业务咨询:  <a href="mailto:sales@extremevision.com.cn">sales@extremevision.com.cn</a> </li>
		      				<li>媒体及投资:  <a href="mailto:business@extremevision.com.cn">business@extremevision.com.cn</a> </li>
		      				<li>开发者社区:  <a href="mailto:developer@extremevision.com.cn">developer@extremevision.com.cn</a> </li>
		      				<li>算法合作:  <a href="mailto:supply@extremevision.com.cn">supply@extremevision.com.cn</a> </li>
		      			</ul>
		      			<ul>
		      				<h3>公司地址</h3>
		      				<li>深圳总部: 南山区深圳湾科技生态园10A栋12楼</li>
		      				<li>北京：海淀区善缘街1号立方庭1段518</li>
		      				<li>香港：香港葵芳葵丰街53-57号福业大厦2505室</li>
		      				<li>澳门: 澳门殷皇子大马路澳门广场7楼</li>
		      				<li>珠海: 高新区大洲科技园2层</li>
		      			</ul>
		     			<div className="erwei">
		     				<div>
		     					<h3>极视角公众号</h3>
		     					<img src="http://static2.extremevision.com.cn/images/lion/extremevision.jpg" alt="极视角公众号公众号"/>
		     					<p>更多案例&amp;更多资讯</p>
		     				</div>
		     				<div>
		     					<h3>极市平台</h3>
		     					<img src="http://static2.extremevision.com.cn/images/lion/extrememark.jpg" alt="极市平台公众号"/>
		     					<p>开发者社区</p>
		     				</div>
		     			</div>
		      		</div>
		      		<p className="end">©2013-2019 深圳极视角科技有限公司 版权所有<a href="http://www.miitbeian.gov.cn/" target="_blank">粤ICP备15075380号</a></p>
	      		</section>
	      	</footer>      	
      </div>
    );
  }
}
//映射属性


export default withRouter(App)
