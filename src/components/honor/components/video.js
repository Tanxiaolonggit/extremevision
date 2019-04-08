import React,{Component} from 'react';
import "./video.css"
import {connect} from 'react-redux'

export default class Video extends Component{
    render(){
        return(
            <section className="videoNews">
                <h1>企业在前沿技术上的创新性和行业引领能力</h1>
                <div>
                    <ul>
                        <li>
                            <img src="https://static2.extremevision.com.cn/images/lion/honor/tech_0307.png" alt=""/>
                            <p>
                            国家高新技术企业
                            <br/>
                            资质认定
                            </p>
                        </li>
                        <li>
                            <img src="https://static2.extremevision.com.cn/images/lion/honor/patent_0307.png" alt=""/>
                            <p>40项专利申请</p>
                        </li>
                        <li>
                            <img src="https://static2.extremevision.com.cn/images/lion/honor/software_0307.png" alt=""/>
                            <p>10项软件著作权</p>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}