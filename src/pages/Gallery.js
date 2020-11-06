import React from 'react';
import kitchen1 from '../images/kitchen-photo-1.jpg'
import kitchen2 from '../images/kitchen-photo-2.jpg'
import kitchen3 from '../images/kitchen-photo-3.jpg'
import kitchen4 from '../images/kitchen-photo-4.jpg'


class Gallery extends React.Component {

 render() {
 	return (
		<div>
          <h1>Gallery</h1>
          <h2>Shelving</h2>
          <h2>Kitchens</h2>
    <main className="cf w-100">
  <div className="fl w-50 w-third-m w-25-ns">
    <div className="aspect-ratio aspect-ratio--1x1">
      <img alt="" style={{'background-image':'url('+kitchen1+')'}}
        className="db bg-center cover aspect-ratio--object" />
    </div>
  </div>
  <div className="fl w-50 w-third-m w-25-ns">
    <div className="aspect-ratio aspect-ratio--1x1">
      <img alt="" style={{'background-image':'url('+kitchen2+')'}}
        className="db bg-center cover aspect-ratio--object" />
    </div>
  </div>
  <div className="fl w-50 w-third-m w-25-ns">
    <div className="aspect-ratio aspect-ratio--1x1">
      <img alt="" style={{'background-image':'url('+kitchen3+')'}}
        className="db bg-center cover aspect-ratio--object" />
    </div>
  </div>
  <div className="fl w-50 w-third-m w-25-ns">
    <div className="aspect-ratio aspect-ratio--1x1">
      <img alt="" style={{'background-image':'url('+kitchen4+')'}}
        className="db bg-center cover aspect-ratio--object" />
    </div>
  </div>
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