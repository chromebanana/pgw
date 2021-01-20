import React from 'react';
import RevealContainer from '../components/RevealContainer';
import List from '../components/List';
import ImageThumb from '../components/Image';
import door from '../images/Gallery/OutdoorBuilds/OutdoorBuilds-2.jpg';
import table from '../images/Gallery/Furniture/Furniture-5.jpg';
import shelf from '../images/Gallery/Shelving/Shelving-1.jpg';
import Lightbox from 'react-image-lightbox';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photosData: [door, table, shelf],
            photoIndex: 0,
            isOpen: false,
        }
    }

    render() {
        var images = this.state.photosData
        const { photoIndex, isOpen } = this.state
        const { data, ethos } = this.props
        return (
            <div className="tc ph2">
            <div className="ph2-ns ph2 pb2-ns f4-ns f4" >
        {documentToReactComponents(data.introduction)}
    </div>
    { ethos && ethos.map((item, i) => {
            return(
                <RevealContainer key={i} title={item.fields.headline} content={item.fields.body}/>
                )
    })}
   <div className="flex-ns justify-center mw8 cf mv4">
	<ImageThumb onClick={() => this.setState({ isOpen: true, photoIndex: 0})} url={door}/>
	<ImageThumb onClick={() => this.setState({ isOpen: true, photoIndex: 1})} url={table}/>
	<ImageThumb onClick={() => this.setState({ isOpen: true, photoIndex: 2})} url={shelf}/>
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

		
	<div className="bt b--black-20 pt4 pb2 mt4">
	{data.ourServices && (<List title="Our Services" list={data.ourServices}/>)}
	
	</div>	
	</div>
        );
    }
}
export default Home;