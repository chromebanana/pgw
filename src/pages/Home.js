import React from 'react';
import RevealContainer from '../components/RevealContainer';
import List from '../components/List';
import ImageThumb from '../components/Image';
import door from '../images/Gallery/OutdoorBuilds/OutdoorBuilds-2.jpg';
import table from '../images/Gallery/Furniture/Furniture-5.jpg';
import shelf from '../images/Gallery/Shelving/Shelving-1.jpg';
import Lightbox from 'react-image-lightbox';
import ReactMarkdown from "react-markdown";

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
        const { data } = this.props
        return (
            <div className="tc ph2">
    <ReactMarkdown className="ph2-ns ph2 pb2-ns f4-ns f4" source={data.intro}/>
    <RevealContainer emoji="🌱" 
    emojidesc="seedling" 
    title="Eco-friendly building options" 
    content="We aspire to design, build and install things in a way that has the least negative impact on our natural world. This often involves using recycled or FSC-approved timber, low-impact insulation, low-VOC paint, biodegradable finishes, avoiding composite boards, etc."

    />
	<RevealContainer emoji="🤝" emojidesc="handshake" title="Diversity and mutual aid in the trading community" content="We want to see more people of diverse genders, ethnicities, ages and abilities involved in the trades. Our collective should feel inclusive, encouraging and supportive for everyone involved. Additionally, as a collective, we promote cooperation over competition. This is better for everyone as it tends to increase happiness, learning, confidence, the quality of work, and reduces under-cutting, waste, overheads (and therefore the cost of work), etc."/>
	<RevealContainer emoji="💷" emojidesc="bank note" title="Transparency and Respect" content="We want as many people as possible to access our services and we want people to understand what they are spending their money on. So, we strive to be flexible to meet people’s budgets and we always give itemised quotes. It's important for us to be respectful of the space when working in clients’ homes and always tidy up when the job is done!"/>
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