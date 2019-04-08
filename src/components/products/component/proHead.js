import React,{Component} from 'react';
import "./proHead.css"
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
class ProHead extends Component{	
	render(){
        let {hlist,type}=this.props;
		return (
			<section>
                <header className="proH">
                   <h1>{hlist[type].title}</h1>
                  <ul> 
                   {
                      hlist[type].conlist.map((v,i)=>{
                          return <li key={i}>{v}</li>
                      })
                    }
                  </ul>
                </header>
			</section>
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

