import React from 'react';
import { Link } from 'react-router-dom';
import pgwname from '../images/pgw-name.png';


export const Navigation = () => {
  return (
  	<div id="nav" className="pv4-ns pv3 bb b--black-20 mb4">

	<img class="w-100" alt="pgw"src={pgwname}/>
	<div>
		<nav  className="mw7 mh0 mv2 db tr">
		<Link className='dim black underline f2-ns f3 dib ml3 pointer mv2' to="/">Home</Link>
		<Link className='dim black underline f2-ns f3 dib ml3 pointer mv2' to="/gallery">Gallery</Link>
		<Link className='dim black underline f2-ns f3 dib ml3 pointer mv2' to="/join">Join Us</Link>
		<Link className='dim black underline f2-ns f3 dib ml3 pointer mv2' to="/testimonials">Testimonials</Link>
		<Link className='dim black underline f2-ns f3 dib ml3 pointer mv2' to="/landlords">Landlords</Link>

		</nav>
	<div className="mt1 tr lh-copy">
	<div className="f3-ns f4">Get a quote: <a href="tel:+447543498864">07543 498 864</a></div>
	 <a className=" f3-ns f4-m f6" href="mailto:thepeoplesgeneralwoodhouse@gmail.com">thepeoplesgeneralwoodhouse@gmail.com</a>
	</div>
  		</div>
  	</div>
    )
}



