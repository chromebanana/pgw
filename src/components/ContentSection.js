import React from 'react';
import Emoji from './Emoji';



export const AboutSection = ({ emoji, emojidesc, title, content }) => {

  return(
 <div className="w-100 mv3">
 <h2 className="ma1 f4 f3-ns"><Emoji desc={emojidesc} emoji={emoji}/> {title}</h2>
    <div className="ph4-ns ph2 pv3 lh-copy">
    {content}
    </div>
  </div>
  )
}


export const InfoSection = ({ title, intro, list, outro }) => {

  return(
 <div className="w-100 pt1">
 <h2 className="mb2 mt0 f4 f4-ns center">{title}</h2>
    <div className="">
    <div className= { intro ? "lh-copy":""}>
    <p>{intro}</p></div>
	   {  list.map((item, i) => {
	       return (
	         <p className="lh-copy pb1 mv0" key={i}>{item}</p>
	         )
	         })}
    <p>{outro}</p>
    </div>
  </div>
  )
}
