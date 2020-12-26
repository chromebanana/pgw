import React from 'react';
import {AboutSection, InfoSection} from '../components/ContentSection';
import ImageThumb from '../components/Image';
import kitchen1 from '../images/kitchen-photo-1.jpg';
import kitchen2 from '../images/kitchen-photo-2.jpg';
import kitchen3 from '../images/kitchen-photo-3.jpg';
import Lightbox from 'react-image-lightbox';


	// <h1 className="mt1 mt3-l mt3-m">Peoples General Woodhouse</h1>

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            photosData: [kitchen1, kitchen2, kitchen3],
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

	<p className="ph2 pb2"><span className="b">The People’s General Woodhouse</span> is a collective of woodworkers and other traders working in Sussex. We believe in:</p>
	<AboutSection emoji="🌱" emojidesc="seedling" title="Eco-friendly building options" content="All our timber is FSC approved. We always consider how we can do the job in a more sustainable way. This could involve using recycled timber, biodegradable finishes, avoiding composite boards, etc."/>
	<AboutSection emoji="🤝" emojidesc="handshake" title="Diversity and mutual aid in the trading community" content="We want to see more women and people of diverse ethnicities and abilities involved in the trades. Our collective is a way for traders to share knowledge, tools, work and space for the benefit of everyone."/>
	<AboutSection emoji="💷" emojidesc="bank note" title="Transparency and Respect" content="We’ll always give itemised quotes and strive to be flexible to meet people’s budgets. We’re respectful of the space when working in clients’ homes and we’ll always tidy up when the job is done."/>
	<div className="tc cf">
	<ImageThumb onClick={() => this.setState({ isOpen: true, photoIndex: 0})} url={kitchen1}/>
	<ImageThumb onClick={() => this.setState({ isOpen: true, photoIndex: 1})} url={kitchen2}/>
	<ImageThumb onClick={() => this.setState({ isOpen: true, photoIndex: 2})} url={kitchen3}/>
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
  	<a className="link hover-silver black-80 dib mt4 mb3 w4 tc " href="https://www.instagram.com/thepgw/" title="Instagram @thepgw">
    	<svg className="w3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"/></svg>
  		<p className="mt2 lh-copy">Follow us on Instagram</p>
  	</a>
 	</div>

		
	<div className="bt b--black-20 pt3">
	<InfoSection title="Our Services" list={['Kitchens', 'Bespoke Shelving', 'Cabinetry', 'Furniture including: Tables, Desks, Benches and Beds', 'Outdoor builds including: Sheds, lean-tos and gates', 'Woodturning', 'Picture Framing', 'Furniture Restoration']}/>
	
	</div>	
	</div>
        );
    }
}
export default Home;