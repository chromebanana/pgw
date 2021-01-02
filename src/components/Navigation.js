import React from 'react';
import { Link } from 'react-router-dom';
import pgwname from '../images/pgw-name.png';
import Emoji from './Emoji';


export const Navigation = () => {
  return (
  	<header id="nav" className=" pv3 ba-ns br3-ns WhiteFilter b--black-20">
	<img className="w-100" alt="pgw"src={pgwname}/>
  	<div className="pl4-ns pl3 pb2">
	<div>
		<nav  className="mh0 mv2 pb1 db f3 b underline">
		<Link className='dim black dib mr3 pointer mv2 link' to="/">Home</Link>
		<Link className='dim black dib mr3 pointer mv2 link' to="/gallery">Gallery</Link>
		<Link className='dim black dib mr3 pointer mv2 link' to="/join">Join Us</Link>
		<Link className='dim black dib mr3 pointer mv2 link' to="/testimonials">Testimonials</Link>
		<Link className='dim black dib mr3 pointer mv2 link' to="/landlords">Landladys/lords</Link>

		</nav>
	<div className="mt1 db ">
	<a className="link black-90 f4-ns mb2 f5 flex pv dib dim" href="tel:+447543498864" title="phone the pgw">
		<div className="f3-ns pr2-ns"><Emoji emoji="📞" desc="Phone Emoji"/> </div><span className="flex ph2 ph1-ns">07543 498 864</span>
	</a>
	<a className="link black-90 f4-ns mb2 f6 flex pv0 dim" href="mailto:thepeoplesgeneralwoodhouse@gmail.com" title="email thepeoplesgeneralwoodhouse@gmail.com">
		<div className="f3-ns pr2-ns"> <Emoji className="pr6" emoji="✉️" desc="Envelope Emoji"/></div><span className="ph2 ph1-ns" >thepeoplesgeneralwoodhouse@gmail.com</span>
	</a>
	<a className="f4-ns black-90 hover f5 mb3 link flex items-center pv0 dim" href="https://www.instagram.com/thepgw/" title="Instagram @thepgw">
		<svg className="w1 w2-ns" fill="black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"/></svg>
		<span className="ph2 ph1-ns">@thepgw</span>
	</a>
	</div>
	</div>
	</div>
  	</header>
    )
}