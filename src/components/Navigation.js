import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
			<nav  className="mw7 pv3 mh0 db tr">
		<Link className='dim black underline f3 dib ml3 pointer mv2' to="/">Home</Link>
		<Link className='dim black underline f3 dib ml3 pointer mv2' to="/gallery">Gallery</Link>
		<Link className='dim black underline f3 dib ml3 pointer mv2' to="/testimonials">Testimonials</Link>
		<Link className='dim black underline f3 dib ml3 pointer mv2' to="/join">Join Us</Link>
		<Link className='dim black underline f3 dib ml3 pointer mv2' to="/contact">Contact Us</Link>
		</nav>
    )
}



