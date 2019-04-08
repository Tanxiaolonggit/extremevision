import React,{Component} from 'react';
import "./video.css"
export default class Home extends Component{
    componentDidMount(){
        console.log(this.videobg)
        console.log(document.documentElement.clientHeight || document.body.clientHeight)
        let videTop=document.getElementsByTagName("video")[0];
        videTop.style.height=(document.documentElement.clientHeight || document.body.clientHeight)+10+"px";
    }
	render(){
		return (
            <section className="videTop ">
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
               <section className="suanfa ">
               <h1 className="color_title">国内首家视觉算法商城</h1>
               <div className="suanfalist">
                   <dl>
                    <dt className="icon"><i className="fa fa-ship" aria-hidden="true"></i></dt>
                    <dd>智慧工业</dd>
                   </dl>
                   <dl>
                    <dt className="icon"><i className="fa fa-shopping-cart" aria-hidden="true"></i></dt>
                    <dd>智慧零售</dd>
                   </dl>
                   <dl>
                    <dt className="icon"><i className="fa fa-hospital-o" aria-hidden="true"></i></dt>
                    <dd>智慧楼宇</dd>
                   </dl>
                   <dl>
                    <dt className="icon"><i className="fa fa-newspaper-o" aria-hidden="true"></i></dt>
                    <dd>智慧办公</dd>
                   </dl>
                   <dl>
                    <dt className="icon"><i className="fa fa-font" aria-hidden="true"></i></dt>
                    <dd>智慧文体</dd>
                   </dl>
                   <dl>
                    <dt className="icon"><i className="fa fa-tachometer" aria-hidden="true"></i></dt>
                    <dd>智慧城市</dd>
                   </dl>
               </div>
               <div className="content_footer">
                    <ul className="clearfix">
                            <li ><p >500+</p><p>算法累计</p></li>
                            <li ><p >1000+</p><p>服务企业</p></li>
                            <li ><p >30+</p><p >行业覆盖</p></li>
                            <li ><p >85%</p><p >行业推荐率</p></li>
                    </ul>
               </div>
               </section>
               <section className="section-feature clearfloat">
               <h1 className="color_title">量身定制开发</h1>
               <p className="subtitle">专注图像识别&nbsp;&nbsp;深入细分场景</p>
               <img  src="https://static2.extremevision.com.cn/images/lion/index/cus_devp_0321.png?201903211626" />
                <div className="icon_text_wrapper iconOne">
                    <img className="targetTog" src="https://static2.extremevision.com.cn/images/lion/index/cus_dev_1_0321.png?201903211626" />
                    <p>丰富算法自由组合</p>
                </div>
                <div className="icon_text_wrapper iconTwo">
                    <img className="targetTog" src="https://static2.extremevision.com.cn/images/lion/index/cus_dev_2_0321.png?201903211626" />
                    <p>平均8周快速开发</p>
                </div>
                <div className="icon_text_wrapper iconThree">
                    <img className="targetTog" src="https://static2.extremevision.com.cn/images/lion/index/cus_dev_3_0321.png?201903211626" />
                    <p>API/SDK等多种交付方式</p>
                 </div>
                 <div className="icon_text_wrapper iconFour">
                    <img className="targetTog" src="https://static2.extremevision.com.cn/images/lion/index/cus_dev_4_0321.png?201903211626" />
                    <p>兼容各类设备镜头</p>
                 </div>
                 </section>
            </section>
		)
	}
}