import React from 'react';
import RevealContainer from '../components/RevealContainer';
import ImageThumb from '../components/Image';
import Lightbox from 'react-image-lightbox';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false,
        }
    }

    render() {
        const { photoIndex, isOpen } = this.state
        const { fields, includes } = this.props
        
        const ethosSorted = fields.pgwValues && fields.pgwValues.map((item, i) => {
          return includes.Entry && includes.Entry.filter(entry => 
                entry.sys.id === item.sys.id)[0]
        })

        const coverPhotosSorted = fields.homePagePhotos && fields.homePagePhotos.map((item, i) => {
            return includes.Asset && includes.Asset.filter(entry => 
            entry.sys.id === item.sys.id)[0]
        })
        const imageUrls = []

        return (
            <div className="tc ph2">
                <div className="ph2-ns ph2 pb2-ns f4-ns f4" >
                    {documentToReactComponents(fields.introduction)}
                </div>
                { ethosSorted && ethosSorted.map((item, i) => {
                        return(
                            <RevealContainer key={i} title={item.fields.headline} content={item.fields.body}/>
                            )
                })}
            <div className="flex-ns justify-center mw8 cf mv4">
                {coverPhotosSorted && coverPhotosSorted.map((photo, i) => {
                    const url = photo.fields.file.url
                    imageUrls.push(url)
                    return(     
                           <ImageThumb 
                            onClick={() => this.setState({ isOpen: true, photoIndex: i})} 
                            key={i} 
                            url={url} 
                            isGallery/>
                         )
                })}
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
            <div className="bt b--black-20 pt4 pb2 mt4">
                {documentToReactComponents(fields.outro)}
	        </div>	
	        </div>
        );
    }
}
export default Home;