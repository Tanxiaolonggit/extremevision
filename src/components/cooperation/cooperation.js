import React,{Component} from 'react';
import './cooperation.css'

import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
class Coop extends  Component {
	constructor(props){
		super(props);
		this.state={
			list:[]
		}
	}
	render(){
		let {list}=this.props;
		return <div className='coop'>
						<div className='coop1'>							
								{
									list.map((item,index)=>{
										return 	<div key={index}>
														<p>{item.content}</p>
														<p>{item.content1}</p>
														<p>{item.content2}</p>
														<p>{item.content3}</p>
														<p>{item.content4}</p>
														<p>{item.content5}</p>																													
													</div>													
									})
								}							
						</div>
						<div className='coop2'>
							<h3>四大强势保障</h3>
							<ul>
								<li>
								<div><img src={require("../../assets/coopimg/1.png")} /></div>
								<p>高额奖金激励</p>
								<p>成功推荐项目即获极视角奖励金（不设上限），无需额外投入人力财力</p>
								</li>
								<li>
								<div><img src={require("../../assets/coopimg/2.png")}/></div>
								<p>高额奖金激励</p>
								<p>成功推荐项目即获极视角奖励金（不设上限），无需额外投入人力财力</p>
								</li>
								<li>
								<div><img src={require("../../assets/coopimg/3.png")} /></div>
								<p>高额奖金激励</p>
								<p>成功推荐项目即获极视角奖励金（不设上限），无需额外投入人力财力</p>
								</li>
								<li>
								<div><img src={require("../../assets/coopimg/4.png")}/></div>
								<p>高额奖金激励</p>
								<p>成功推荐项目即获极视角奖励金（不设上限），无需额外投入人力财力</p>
								</li>
							</ul>
						</div>
						
						<div className="coop3">
							<div className="coop31">
								<div>
									<img src={require("../../assets/coopimg/6.png")}/>
									<p>洞见</p>
									<span>了解行业应用场景，具备图像识别、<br/>视频分析项目资源或人脉</span>
								</div>
								<div>只要你</div>
								<div>
									<img src={require("../../assets/coopimg/7.png")}/>
									<p>远见</p>
									<span>了解行业应用场景，具备图像识别、<br/>视频分析项目资源或人脉</span>
								</div>
							</div>
						</div>
						
						<div className="coop4">
							<h3>合作流程</h3>
							<ul>
								<li><img src={require("../../assets/coopimg/8.png")}/>
										<p>提交申请</p>
								</li>
								<li><img src={require("../../assets/coopimg/9.png")}/></li>
								<li><img src={require("../../assets/coopimg/8.png")}/>
										<p>提交申请</p>
								</li>
								<li><img src={require("../../assets/coopimg/9.png")}/></li>
								<li><img src={require("../../assets/coopimg/8.png")}/>
										<p>提交申请</p>
								</li>
								<li><img src={require("../../assets/coopimg/9.png")}/></li>
								<li><img src={require("../../assets/coopimg/8.png")}/>
										<p>提交申请</p>
								</li>
								<li><img src={require("../../assets/coopimg/9.png")}/></li>
								<li><img src={require("../../assets/coopimg/8.png")}/>
										<p>提交申请</p>
								</li>
							</ul>							
						</div>
						
						<div className="coop5">
							<div> 						
								<h3>成功合作案列</h3>
								<ul>
									<li>
										<img src={require("../../assets/coopimg/11.png")}/>
										<p>某IT公司高管</p>
										<p>接洽极视角公司之后，将非其业务范围内的算法需求项目，全程交由极视角商务团队进行跟进，项目签单后，获得合伙人奖励金。</p>
									</li>
									<li>
										<img src={require("../../assets/coopimg/12.png")}/>
										<p>某IT公司高管</p>
										<p>接洽极视角公司之后，将非其业务范围内的算法需求项目，全程交由极视角商务团队进行跟进，项目签单后，获得合伙人奖励金。</p>
									</li>
									<li>
										<img src={require("../../assets/coopimg/13.png")}/>
										<p>某IT公司高管</p>
										<p>接洽极视角公司之后，将非其业务范围内的算法需求项目，全程交由极视角商务团队进行跟进，项目签单后，获得合伙人奖励金。</p>
									</li>
								</ul>
							</div>							
						</div>
						
						<div className="coop6">
							<div>
								<h3>合作伙伴</h3>
								<img src={require("../../assets/coopimg/15.png")}/>
							</div>
							
							
						</div>
					</div>
	}
}

var mapStateToProps = (state)=>{
	return{
		list:state.List.List
	}
}
//映射方法
var mapDispatchToProps=(dispatch)=>{//映射方法 映射需要的
	return {
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Coop)