import React,{Component} from 'react';
import "./profoot.css"
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
class Profoot extends Component{	
	render(){
        let {plist,type}=this.props;
		return (
			<section className="profoot">
                {
                    plist[type].map((v,i)=>{
                        return  <dl key={i}>
                          <img src={v.img} />
                          <h2>{v.title}</h2>
                          <ul>
                          {
                              v.list.map((val,key)=>{
                                  return <li key={key}>{val}</li>
                              })
                          }
                          </ul>
                        </dl>
                   })
                }
			</section>
		)
	}
}
//映射属性
var mapStateToProps = (state)=>{
	return{
		plist:state.product.plist
	}
}
//映射方法
var mapDispatchToProps=(dispatch)=>{//映射方法 映射需要的
	return {
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Profoot)

