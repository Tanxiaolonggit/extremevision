import React,{Component} from 'react';
import "./proHead.css"
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
class ProHead extends Component{	
	render(){
        let {hlist,type}=this.props;
		return (
			<div>
				<section>
	                <header className="proH">
		                <div>
		                   <h1>{hlist[type].title}</h1>
			                  <ul> 
			                    {
			                       hlist[type].conlist.map((v,i)=>{
			                           return <li key={i}>{v}</li>
			                       })
			                     }
			                   </ul>
		                </div>
	                </header>     
				</section>
				    <div className="neck">
						<div>
							<span>
								<img src="https://static2.extremevision.com.cn/images/lion/products/security/icon_1.png" alt="无人智慧安防降低隐患" />
								<p>无人智慧安防降低隐患</p>
							</span>
							<span>
								<img src="https://static2.extremevision.com.cn/images/lion/products/pass_flow/icon_2.png" alt="海量视频云端存储调用" />
								<p>海量视频云端存储调用</p>
							</span>
							<span>
								<img src="https://static2.extremevision.com.cn/images/lion/products/pass_flow/icon_3.png" alt="小样本数据高精度开发" />
								<p>小样本数据高精度开发</p>
							</span>
							<span>
								<img src="https://static2.extremevision.com.cn/images/lion/products/security/icon_4.png" alt="安保力量调度提升效率" />
								<p>安保力量调度提升效率</p>
							</span>
						</div>
	                </div>
			</div>
		)
	}
}
//映射属性
var mapStateToProps = (state)=>{
	return{
		hlist:state.product.hlist
	}
}
//映射方法
var mapDispatchToProps=(dispatch)=>{//映射方法 映射需要的
	return {
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ProHead)

