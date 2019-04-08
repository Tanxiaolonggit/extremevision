import React,{Component} from 'react';
import "./news.css"
//引入react-redux的connect组件
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
class News extends Component{
    constructor(props){
        super(props);
        this.state={
            newList:[]
        }
    }
	render(){
        var {list}=this.props;
		return (
			<section className="homeNews">
                <h2>新闻资讯</h2>
                <div className="newsList">
                <aside>
                  <dl className="leftDl">
                     <img src="http://www.extremevision.com.cn/img/index/img_news_23.png"/>
                     <dt>2019-03-06</dt>
                     <dd>
                     <a href="http://m.cpspew.com/?from=singlemessage&amp;isappinstalled=0#/news/main?id=992523" target="_blank">《AI算法赋能行业 智慧安防让危险降到最低》 CPS警用装备网</a>
                      <p>首届“中国国际进口博览会”在上海国家会展中心举办。超大规模的展会和持续5天的巨大人流量无疑给场馆的安保工作带来了不小难度。在本届进博会上，由极视角提供核心算法的“AI智慧安检仪”首次亮相，为本次大会构筑起一道安全屏障。</p>
                      </dd>
                      </dl>
                </aside>
                <article className="rightList">
                  {
                      list.map((v,i)=>{
                          return (
                              <dl key={i}>
                                 <dt><img src={v.img} /></dt>
                                 <dd>
                                    <h4>{v.title}&nbsp;&nbsp;&nbsp;{v.time}</h4>
                                    <section><a href={v.path}>{v.pathContext}</a></section> 
                                    <p>{v.context}</p>
                                </dd>
                              </dl>
                          )
                      })
                  }
                </article>
                </div>
			</section>
		)
	}
}
//映射属性
var mapStateToProps = (state)=>{
	return{
		list:state.newsList.newList
	}
}
//映射方法
var mapDispatchToProps=(dispatch)=>{//映射方法 映射需要的
	return {
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(News)