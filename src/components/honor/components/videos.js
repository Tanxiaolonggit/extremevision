import React,{Component} from 'react';
import "./videos.css"
import {connect} from 'react-redux'
export default class Videos extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[
                ["1月 甲子光年“最具投资价值AI公司”","1月 亿欧“200家中国人工智能代表性企业榜单”","4月 中国投资协会“十大最具价值”智能交互创新创业项目","5月 证券时报“中国创业企业年度新锐企业奖”","6月 亿欧“2018中国人工智能商业落地100强榜单”","8月 CEO陈振杰入选“福布斯中国30 Under 30”","10月 德勤&深商联“2018深圳高科技高成长暨明日之星20强”","12月 CSDN2018年优秀AI应用案例"],
                ["  ","  ","  ","1月 Xtecher“2017国内最值得关注AI视觉创业项目Top20”","6月 首届中国产业互联网创新创业大赛季军","9月 2017胡润百富中国最具投资价值新星企业百强榜深圳50强","11月 做客“一刻talks”","11月 中国硬件创新创客大赛一等奖"],
                ["  ","  ","1月 天英汇创新创业大赛头奖","4月 做客CCTV2《创业英雄汇》","6月 港科大百万奖金创业大赛（深圳）冠军","9月 深港青年创业大赛行业赛一等奖","11月 乌镇互联网大会“最佳创客”","12月 亿欧“中国人工智能创业公司Top50”"]
            ],
            arr:["2018年","2017年","2016年"],
            n:0

        }
    }
    fo=(index)=>{
        this.setState({
            n:index
        })
        switch(index){
            case 0:
            this.dt.style.paddingLeft=0;
            break;
            case 1:
            this.dt.style.paddingLeft="33.3%";
            break;
            case 2:
            this.dt.style.paddingLeft="67%";
            break;
        }
    }
    render(){
        return(
            <section className="videosNews">
                <div className="div">
                    <h1>获奖情况</h1>
                    <div ref={node=>this.dt=node}>
                    {
                        this.state.list[this.state.n].map((v,i)=>{
                        return(
                                <p key={i}>{v}</p>
                        )  
                        })
                    }
                    </div>
                    
                    <ul>
                    {
                        this.state.arr.map((v,index)=>{
                            return(
                                    <li key={index} onClick={this.fo.bind(this,index)}>
                                        <i className="fa fa-drupal fa-3x" aria-hidden="true"></i>
                                        <p>{v}</p>
                                    </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </section>
        )
    }
}