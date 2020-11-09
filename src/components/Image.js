import React from 'react';
import axios from 'axios';


class ImageThumb extends React.Component {
    constructor() {
        super();
        this.state = {
            image: '',
            error: undefined,
        }
    }
    componentDidMount() {
        console.log(this.props.url)


        axios.get(this.props.url)
            // const data = await response;
            .then(res => {
                this.setState({
                    image: res.data
                })
            })
            .catch();

    }

    render() {

        return (
            <div className="fl w-50 w-third-m w-25-ns">
    <div className="aspect-ratio aspect-ratio--1x1">
      <img alt="" style={{'backgroundImage':'url('+this.props.url+')'}}
        className="db bg-center cover aspect-ratio--object" />
    </div>
  </div>
        )
    }
}

export default ImageThumb;