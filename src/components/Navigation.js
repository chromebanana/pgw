import React from 'react';
import { Link } from 'react-router-dom';
import pgwname from '../images/pgw-name.png';
import Emoji from './Emoji';


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
	<div className="f3-ns f4 flex items-center  justify-center"><Emoji emoji="📞" desc="Phone Emoji"/>  <a className="pl2" href="tel:+447543498864" title="phone the pgw">07543 498 864</a></div>
	<div className=" f3-ns f4-m f6 flex items-center  justify-center"> <Emoji className="pr6" emoji="✉️" desc="Envelope Emoji"/><a className="pl2"  href="mailto:thepeoplesgeneralwoodhouse@gmail.com" title="email thepeoplesgeneralwoodhouse@gmail.com">thepeoplesgeneralwoodhouse@gmail.com</a></div>
	<div className=" f3-ns f4-m f6 pb2 flex items-center justify-center">
		<svg className="w1 w2-ns  pv1 pr2 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"/></svg>
		<a href="https://www.instagram.com/thepgw/" title="Instagram @thepgw">@thepgw</a>
	</div>
</div>
	
  		</div>
  	</div>
    )
}



// v-top v-mid-m