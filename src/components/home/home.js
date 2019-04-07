import React,{Component} from 'react';
import Video from "./components/video"
import News from "./components/news"
export default class Home extends Component{
	render(){
		return (
			<section>
				<Video/>
				<News />
				<footer className="homefooter">
                        <h2>服务客户</h2>
                        <div class="img page_w">
                        <img src="https://static2.extremevision.com.cn/images/lion/index/logo_0321.png" />
                </div>
                </footer>
			</section>
		)
	}
}
