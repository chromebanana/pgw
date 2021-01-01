import React from 'react';

const List = ({ title, intro, list, outro }) => {

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

export default List;