import React,{Component} from 'react';
import './news.css'
import {connect} from 'react-redux';

export default class News extends Component{
    render(){
        return (
            <section className="honorNews">
                <div>
                    <h1>深耕全产业链的整合者，落地算法服务的执行者</h1>
                    <p>深圳极视角科技有限公司（Extreme Vision）成立于2015年，打造国内首家视觉算法平台，致力于开拓人工智能在不同行业及领域的开发与应用，旨在为企业提供最丰富的人工智能算法及解决方案。极视角总部位于中国深圳，并在北京、香港、澳门、珠海设有分部。公司管理及核心技术团队均来自腾讯、华为、香港科技大学、北京大学等顶尖企业及实验室，技术研发与世界领先水平接轨。</p>
                </div>
            </section>
        )
    }
}
