import React from 'react';



const ImageThumb = ({ url, onClick, isGallery }) => {
  return(
 <div className={isGallery ? "fl w-25-l w-third pv2-ns pb1 pr3-ns pr1 center dim pointer" : "fl-ns w-25-ns w-70 pv2-ns pv3 ph1-ns center dim pointer"}>
    <div className="aspect-ratio aspect-ratio--1x1">
      <img onClick={onClick} id="imgthumb" alt="" style={{'backgroundImage':'url('+url+')'}}
        className="bg-center cover aspect-ratio--object" />
    </div>
  </div>
  )
}

export default ImageThumb;