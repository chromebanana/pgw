import React from 'react';



const ImageThumb = ({ url }) => {
	console.log(url)
  return(
 <div className="fl w-50 w-third-m w-25-ns">
    <div className="aspect-ratio aspect-ratio--1x1">
      <img alt="" style={{'backgroundImage':'url('+url+')'}}
        className="db bg-center cover aspect-ratio--object" />
    </div>
  </div>
  )
}

export default ImageThumb;