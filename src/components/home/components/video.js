import React,{Component} from 'react';
import "./video.css"
export default class Home extends Component{
    componentDidMount(){
        console.log(this.videobg)
        console.log(document.documentElement.clientHeight || document.body.clientHeight)
        let videTop=document.getElementsByClassName("videTop")[0];
        videTop.style.height=(document.documentElement.clientHeight || document.body.clientHeight)+"px";
    }
	render(){
		return (
            <section className="videTop">
               <video ref={node=>this.videobg=node} className="videobg" autoPlay loop="loop" muted="muted" src="https://static.extremevision.com.cn/lion/home_video.mp4"></video>
               <div className="videobottom">
                   <div className="divfirst">
                        <h1>让AI算法赋能你的行业</h1>
                        <h2 className="en_title">Let AI Empower Your Industry</h2>
                   </div>
                   <div>
                        <h1>极视角</h1>
                        <h3 className="en_title">Extreme Vision</h3>
                   </div>
               </div>
               <section className="suanfa">
               <h1 className="color_title">国内首家视觉算法商城</h1>
               <div className="suanfalist">
                   <dl>
                    <dt className="icon"><i class="fa fa-ship" aria-hidden="true"></i></dt>
                    <dd>智慧工业</dd>
                   </dl>
                   <dl>
                    <dt className="icon"><i class="fa fa-shopping-cart" aria-hidden="true"></i></dt>
                    <dd>智慧零售</dd>
                   </dl>
                   <dl>
                    <dt className="icon"><i class="fa fa-hospital-o" aria-hidden="true"></i></dt>
                    <dd>智慧楼宇</dd>
                   </dl>
                   <dl>
                    <dt className="icon"><i class="fa fa-newspaper-o" aria-hidden="true"></i></dt>
                    <dd>智慧办公</dd>
                   </dl>
                   <dl>
                    <dt className="icon"><i class="fa fa-font" aria-hidden="true"></i></dt>
                    <dd>智慧文体</dd>
                   </dl>
                   <dl>
                    <dt className="icon"><i class="fa fa-tachometer" aria-hidden="true"></i></dt>
                    <dd>智慧城市</dd>
                   </dl>
               </div>
               <div className="content_footer">
                    <ul className="clearfix">
                            <li ><p >500+</p><p class="text">算法累计</p></li>
                            <li ><p >1000+</p><p class="text">服务企业</p></li>
                            <li ><p >30+</p><p class="text">行业覆盖</p></li>
                            <li ><p >85%</p><p class="text">行业推荐率</p></li>
                    </ul>
               </div>
               </section>
            </section>
		)
	}
}