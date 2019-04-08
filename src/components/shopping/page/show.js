import React, { Component } from 'react';
//引入react-redux的connect组件
import {connect} from 'react-redux'
//引入react-redux的bindActionCreators组件
import {bindActionCreators} from 'redux'
//引入react-redux动作
import actionCreator from '../../../store/shopping/actionCreator'
//引入css
import './show.css'
class Show extends Component {
	componentWillMount(){
		this.props.All()
	}
	liClick(index){
		this.props.readPlus(index)
	}
	render(){		
		let {CurList}=this.props
		return <div className="showBox">
					<ul>
						{
							CurList.map((item,index)=>{
								return <li onClick={this.liClick.bind(this,index)} key={index}>
											<img src={item.imgUrl}/>
											<div>
												<section>
													<p>{item.name}</p>
													<p></p>
													<p>{item.keyword}</p>
												</section>
											</div>
											<p>阅读 {item.read}</p>
									   </li>
							})
						}
					</ul>
			   </div>
	}
}
//映射属性

var mapstate = (state)=>{
	return{
		CurList:[...state.shopdata.CurList],
	}
}
//映射方法
var mapDispatchToProps=(dispatch)=>{//映射方法 映射需要的
	return {
		All(){
			dispatch(actionCreator.All())
		},
		readPlus(index){
			dispatch(actionCreator.readPlus(index))
		}
	}
}
export default connect(mapstate,mapDispatchToProps)(Show)