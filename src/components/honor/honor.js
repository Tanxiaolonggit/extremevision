import React,{Component} from 'react';
import News from './components/news'
import Video from './components/video'
import Videos from './components/videos'
import Botton from './components/botton'
export default class Home extends Component{
	render(){
		return (
			<section>
                <News/>
                <Video/>
                <Videos/>
                <Botton/>
			</section>
		)
	}
}