import React,{Component} from 'react';
//引入css
import './shopping.css';
//引入react-redux动作
import actionCreator from '../../store/shopping/actionCreator'
//引入react-redux的connect组件
import {connect} from 'react-redux'
//引入子组件show
import Show from './page/show'

class Shopping extends Component{
	constructor(props){
		super(props)
		this.state={
			navn:0
		}
	}
	//改变导航栏颜色的方法
	change(index,item){
		this.setState({
			navn:index
		})
		//使用仓库ALL方法传参下标
		this.props.Check(item)
	}
	render(){
		let {list}=this.props
		return <div className='bigBox'>
				<div className="container">
					<ul className="navs">
						{
							list.map((item,index)=>{
								return <li style={{background:this.state.navn==index?"#236cff":""}} key={index} onClick={this.change.bind(this,index,item)}>{item}</li>
							})
						}
					</ul>
				</div>
				
				 <Show/>
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
		Check(index){
			dispatch(actionCreator.Check(index))
		}
	}
}

export default connect(mapstate,mapDispatchToProps)(Shopping)