import React from 'react';
import wood from '../images/wood-texture2.jpg';



const MemberCard = ({ name, trades, tool, img }) => {
  return(
 <div className="mw5 center br3 pa3 pa4-ns mv2 ba b--black-10" style={{'backgroundImage':`url(${wood})`}}>
 	<div className="tc">
 	<img src={img} className="br-100 h4 w4 dib" title={"Photo of "+name} alt={"photo of "+name}/>
	<h1 className="f4">{name}</h1>
	<hr className="mw4 bb bw1 b--black-30 mb3"/>
 	</div>
 	<div className="lh-copy ma0 pa2 center f5 black-70 bg-white-70 br3">
   <p className="ma0 pv1"><span className="b">Trades:</span> {trades}</p>
   <p className="ma0 pv1"><span className="b">Favourite Tool:</span> {tool}</p>
  </div>
  </div>
  )
}

export default MemberCard;

