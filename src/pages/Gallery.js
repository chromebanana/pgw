import React from 'react';
import ImageThumb from '../components/Image';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'
import kitchen1 from '../images/kitchen-photo-1.jpg';
import kitchen2 from '../images/kitchen-photo-2.jpg';
import kitchen3 from '../images/kitchen-photo-3.jpg';
import kitchen4 from '../images/kitchen-photo-4.jpg';


class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {
            photosData: [kitchen1, kitchen2, kitchen3, kitchen4],
            category: [
            // 'Shelving', 
            'Kitchens'
            // , 'Cabinetry', 'Woodturning', 'Furniture', 'Carving', 'Outdoor Builds', 'Workshop', 'Framing'
            ],
            photoIndex: 0,
            isOpen: false
        }
    }

    render() {
        var images = this.state.photosData
        var category = this.state.category
        const { photoIndex, isOpen } = this.state



        return (
            <div>

  <h1>Gallery</h1>
  {
  category.map((category, i) => {
    return (
      <div>
      <h2 key={i}>{category}</h2>
      <main className="cf w-100">
      {       
        images.map((image, i) => {
              return( 
          
                <ImageThumb onClick={() => this.setState({ isOpen: true, photoIndex: i})} key={i} url={image} isGallery/>
 
               
             
                )})

  }
              
   
      </main>
         {isOpen && (
          <Lightbox className="center"
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
      )
  })
}

</div>

        );
    }
}

export default Gallery;