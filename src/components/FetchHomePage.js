import React from "react";

export default class FetchRandomUser extends React.Component {
	
	state= {
		loading: true
	}

	async componentDidMount() {
		const url = "https://cdn.contentful.com/spaces/y0uwkglcua6i/environments/master/entries?access_token=ztJGb6glDhpqVfHxF1y1gsJircQO4uMcwFjDJz5zYYk&content_type=homePage";
		const response = await fetch(url);
		const data = await response.json();
		console.log(data.items[0].fields)
		this.setState({ homePage: data });
	}

	render() {
		return (
		<div>
			{this.state.loading || !this.state.person ? (
				<div>loading...</div> 
			) : (
          	  <div>
				<div>{this.state.homePage}</div>
           </div>
 		)}
 		</div>
		);
	}
}