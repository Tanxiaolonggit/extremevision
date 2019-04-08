import React,{Component} from "react";
import store from "../../store/store";
import "./case.css"
export default class Case extends Component{
	render(){
		console.log(store.getState().Case)
		return(
			<div>
				{
					store.getState().Case.list.map((item,index)=>{
						return <div key={index}  style={{background:item.bgurl}} className="box">
								<div className={index%2===0?"left1":"left"}>
										<img src={item.logo} />
										<p>{item.content}</p>
								</div>
								<div className={index%2===0?"right1":"right"}>
									<article>
										<h2>{item.name}</h2>
										<p>{item.describe}</p>
									</article>
								</div>
						</div>
					})
				}
			</div>
		)
	}
}
