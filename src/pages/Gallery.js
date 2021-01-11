import React from 'react';
import ImageThumb from '../components/Image';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'

function importAll(r) {
  return r.keys().map(r);
}

const Bespoke = { images: importAll(require.context('../images/Gallery/Bespoke', false, /\.(png|jpe?g|svg)$/)), category: 'Bespoke' };
const Cabinetry = { images: importAll(require.context('../images/Gallery/Cabinetry', false, /\.(png|jpe?g|svg)$/)), category: 'Cabinetry' };
const Carving = { images: importAll(require.context('../images/Gallery/Carving', false, /\.(png|jpe?g|svg)$/)), category: 'Carving' };
const Framing = { images: importAll(require.context('../images/Gallery/Framing', false, /\.(png|jpe?g|svg)$/)), category: 'Framing' };
const Kitchens = { images: importAll(require.context('../images/Gallery/Kitchens', false, /\.(png|jpe?g|svg)$/)), category: 'Kitchens' };
const Lamps = { images: importAll(require.context('../images/Gallery/Lamps', false, /\.(png|jpe?g|svg)$/)), category: 'Lamps' };
const Outdoor = { images: importAll(require.context('../images/Gallery/OutdoorBuilds', false, /\.(png|jpe?g|svg)$/)), category: 'Outdoor Builds' };
const Shelving = { images: importAll(require.context('../images/Gallery/Shelving', false, /\.(png|jpe?g|svg)$/)), category: 'Shelving' };
const Woodturning = { images: importAll(require.context('../images/Gallery/Woodturning', false, /\.(png|jpe?g|svg)$/)), category: 'Woodturning' };
const Workshop = { images: importAll(require.context('../images/Gallery/Workshop', false, /\.(png|jpe?g|svg)$/)), category: 'Workshop' };

const categories = [
            Bespoke, Cabinetry, Carving, Framing, Kitchens, Lamps, Outdoor, Shelving, Woodturning, Workshop
            ]

var images = []
// eslint-disable-next-line
 categories.forEach((category) => {
    category.images.map((image) => {
// eslint-disable-next-line
      return images.push(image.default)
    })
  })


class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: [
            Bespoke, Cabinetry, Carving, Framing, Kitchens, Lamps, Outdoor, Shelving, Woodturning, Workshop
            ],
            photoIndex: 0,
            isOpen: false
        }
    }


    render() {
        var categories = this.state.categories
        const { photoIndex, isOpen } = this.state
        var counter = 0
        return (
            <div className="tc">

  <h1>Gallery</h1>
  {
  categories.map((category, i) => {
    return (
      <div>
      <h2 key={i}>{category.category}</h2>
      <main className="cf w-100">
      {       
        category.images.map((image, j) => {
              counter += 1
              j = counter
              return( 
                <div>         
                <ImageThumb onClick={() => this.setState({ isOpen: true, photoIndex: j-1})} key={j+12} url={image.default} isGallery/>
             </div> 
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