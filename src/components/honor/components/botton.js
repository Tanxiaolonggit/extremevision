import React,{Component} from 'react';
import "./botton.css"
import {connect} from 'react-redux'
export default class Botton extends Component{
    render(){
        return(
            <section className="bottonNews">
                <div>
                    <h1>合作院校</h1>
                    <img src="https://static2.extremevision.com.cn/images/lion/honor/school_0321.png" alt=""/>
                </div>
            </section>
        )
    }
}