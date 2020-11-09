import React from 'react';
import axios from 'axios';
import ImageThumb from '../components/Image';

class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {
            photosData: ['1325', '22', '3666', '436', '57474', '622', '72', '86'],
            category: ['Shelving', 'Kitchens', 'Cabinetry', 'Woodturning', 'Furniture', 'Carving', 'Outdoor Builds', 'Workshop', 'Framing']
        }
    }

    render() {
        var images = this.state.photosData
        var category = this.state.category

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
                
                <ImageThumb key={i} url={'https://picsum.photos/seed/'+ image +'/150'}/>
             
                )})

  }
   
      </main>
      </div>
      )
  })
}

</div>

        );
    }
}

export default Gallery;