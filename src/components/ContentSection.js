import React from 'react';



export const AboutSection = ({ emoji, emojidesc, title, content }) => {

  return(
 <div className="w-100 mv3">
 <h2 className="ma1 f4 f3-ns"><span role="img" aria-label={emojidesc}>{emoji}</span> {title}</h2>
    <div className="ph4-ns ph2 pv3 lh-copy">
    {content}
    </div>
  </div>
  )
}


export const InfoSection = ({ title, intro, list, outro }) => {

  return(
 <div className="w-100 pt1">
 <h2 className="mb2 mt0 f4 f3-ns">{title}</h2>
    <div className="">
    <div className= { intro ? "pt2":""}>
    {intro}</div>
    <ul>
	   {  list.map((item, i) => {
	       return (
	         <li className="lh-copy" key={i}>{item}</li>
	         )
	         })}
    </ul>
    {outro}
    </div>
  </div>
  )
}
