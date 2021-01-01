import React from 'react';



const MemberCard = ({ name, trades, tool, img }) => {
  return(
 <article className="mw5 center bg-white br3 pa3 pa4-ns mv2 ba b--black-10">
 	<div className="tc">
 	<img src={img} className="br-100 h4 w4 dib" title={"Photo of "+name} alt={"photo of "+name}/>
	<h1 className="f4">{name}</h1>
	<hr className="mw3 bb bw1 b--black-10"/>
 	</div>
 	<div className="lh-copy measure center f5 black-70">
   <p><span className="b">Trades:</span> {trades}</p>
   <p className="mb0"><span className="b">Favourite Tool:</span> {tool}</p>
  </div>
  </article>
  )
}

export default MemberCard;

