import React from 'react';
import axios from 'axios';
import ImageThumb from '../components/Image';
import kitchen1 from '../images/kitchen-photo-1.jpg'
import kitchen2 from '../images/kitchen-photo-2.jpg'
import kitchen3 from '../images/kitchen-photo-3.jpg'
import kitchen4 from '../images/kitchen-photo-4.jpg'

class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {
            photosData: []
        }
    }
    componentDidMount() {
        axios.get('https://picsum.photos/v2/list')
            .then(res => {
                this.setState({
                    photosData: res.data
                })
            })
    }
    render() {
        var images = this.state.photosData

        return (
            <div>
  <h1>Gallery</h1>
  {
              images.map((image, i) => {
              return(
                <ImageThumb key={i} url={image.download_url}></ImageThumb>
                   )
                })
  }
  <h2>Shelving</h2>
  <h2>Kitchens</h2>
  <main className="cf w-100">
    <ImageThumb url={kitchen1} ></ImageThumb>
    <ImageThumb url={kitchen2} ></ImageThumb>
    <ImageThumb url={kitchen3} ></ImageThumb>
    <ImageThumb url={kitchen4} ></ImageThumb>
  </main>
  <h2>Cabinetry</h2>
  <h2>Woodturning</h2>
  <h2>Furniture</h2>
  <h2>Carving</h2>
  <h2>Outdoor Builds</h2>
  <h2>Workshop</h2>
  <h2>Framing</h2>
</div>

        );
    }
}
export default Gallery;