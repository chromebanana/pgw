import React from 'react';
import ImageThumb from '../components/Image';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'



class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {
            photoIndex: 0,
            isOpen: false
        }
    }


    render() {
        const { photoIndex, isOpen } = this.state
        const { fields, includes } = this.props

        const gallerySorted = fields.gallery && fields.gallery.map((item, i) => {
          return includes.Entry && includes.Entry.filter(entry => 
              entry.sys.id === item.sys.id)[0]
          })

        var numCategories = 0
        var counter = 0
        const imageUrls = []
        return (
            <div className="tc">
            <h1>Gallery</h1>
            {
            gallerySorted && gallerySorted.map((category, i) => {
              numCategories = gallerySorted.length
              return (
                <div className="mb3">
                <main className="cf w-100"> 
                <h2 key={i}>{category.fields.categoryName}</h2>
                {
                  category.fields.photos && category.fields.photos.map((asset, j) => {
                    const photoUrl = includes.Asset && includes.Asset.filter(image => 
                        image.sys.id === asset.sys.id)[0].fields.file.url
                    imageUrls.push(photoUrl)
                    j = counter
                    counter += 1
                    return(     
                           <ImageThumb 
                            onClick={() => this.setState({ isOpen: true, photoIndex: j})} 
                            key={j+numCategories} 
                            url={photoUrl} 
                            isGallery/>
                         )
                  })
                }
            </main>
                </div>
                )
            })
            }
                        
             
               {isOpen && (
                    <Lightbox className="center"
                      mainSrc={imageUrls[photoIndex]}
                      nextSrc={imageUrls[(photoIndex + 1) % imageUrls.length]}
                      prevSrc={imageUrls[(photoIndex + imageUrls.length - 1) % imageUrls.length]}
                      onCloseRequest={() => this.setState({ isOpen: false })}
                      onMovePrevRequest={() =>
                        this.setState({
                          photoIndex: (photoIndex + imageUrls.length - 1) % imageUrls.length,
                        })
                      }
                      onMoveNextRequest={() =>
                        this.setState({
                          photoIndex: (photoIndex + 1) % imageUrls.length,
                        })
                      }
                    />
                  )}
            </div>
                )
            }
          }


          

          export default Gallery;