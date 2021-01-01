import React from 'react';
import {AboutSection, InfoSection} from '../components/ContentSection';
import ImageThumb from '../components/Image';
import door from '../images/door.JPG';
import table from '../images/table.jpg';
import shelf from '../images/shelf.JPG';
import Lightbox from 'react-image-lightbox';


	// <h1 className="mt1 mt3-l mt3-m">Peoples General Woodhouse</h1>

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            photosData: [door, table, shelf],
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
        const { photoIndex, isOpen } = this.state

        return (
            <div className="tc">

	<p className="ph2 pb2 f5-ns f4"><span className="b">The People’s General Woodhouse</span> is a collective of woodworkers and other traders working in Sussex. We believe in:</p>
	<AboutSection emoji="🌱" emojidesc="seedling" title="Eco-friendly building options" content="We aspire to design, build and install things in a way that has the least negative impact on our natural world. This often involves using recycled or FSC-approved timber, low-impact insulation, low-VOC paint, biodegradable finishes, avoiding composite boards, etc."/>
	<AboutSection emoji="🤝" emojidesc="handshake" title="Diversity and mutual aid in the trading community" content="We want to see more people of diverse genders, ethnicities, ages and abilities involved in the trades. Our collective should feel inclusive, encouraging and supportive for everyone involved. Additionally, as a collective, we promote cooperation over competition. This is better for everyone as it tends to increase happiness, learning, confidence, the quality of work, and reduces under-cutting, waste, overheads (and therefore the cost of work), etc."/>
	<AboutSection emoji="💷" emojidesc="bank note" title="Transparency and Respect" content="We want as many people as possible to access our services and we want people to understand what they are spending their money on. So, we strive to be flexible to meet people’s budgets and we always give itemised quotes. It's important for us to be respectful of the space when working in clients’ homes and always tidy up when the job is done!"/>
	<div className="tc cf">
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
	<InfoSection title="Our Services" list={['Kitchens', 'Bespoke Shelving', 'Cabinetry', 'Furniture including: Tables, Desks, Benches and Beds', 'Outdoor builds including: Sheds, lean-tos and gates', 'Woodturning', 'Picture Framing', 'Furniture Restoration', 'Home Repairs']}/>
	
	</div>	
	</div>
        );
    }
}
export default Home;