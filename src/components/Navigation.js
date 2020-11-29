import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

import pgwname from '../images/pgw-name.png';



export const Navigation = () => {

  useEffect(() => {
    const header = document.getElementById("header");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);


  return (
  	<div className="pv4-ns pv3 bb b--black-20 ">

	<img class="w-100" alt="pgw"src={pgwname}/>
	<div id="header">
		<nav  className="mw7 mh0 mv2 db tr">
		<Link className='dim black underline f2-ns f3 dib ml3 pointer mv2' to="/">Home</Link>
		<Link className='dim black underline f2-ns f3 dib ml3 pointer mv2' to="/gallery">Gallery</Link>
		<Link className='dim black underline f2-ns f3 dib ml3 pointer mv2' to="/join">Join Us</Link>
		<Link className='dim black underline f2-ns f3 dib ml3 pointer mv2' to="/testimonials">Testimonials</Link>
		</nav>
	<div className="mt1 tr f3-ns lh-copy">
	<div className="f3-ns f5">Get a quote: <a href="tel:+447543498864">07543 498 864</a></div>
	 <a className=" f3-ns pt1 f6" href="mailto:thepeoplesgeneralwoodhouse@gmail.com">thepeoplesgeneralwoodhouse@gmail.com</a>
	</div>
  		</div>
  	</div>
    )
}



