import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyATsNsLecO9z1uIbiDaV3vf5wKm_ga_A7M';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'something just like this'}, (videos) => {
			this.setState({ videos });
		});
	}
	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}


ReactDOM.render(<App />, document.querySelector('.container'));