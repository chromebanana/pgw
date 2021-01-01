import React from 'react';
import wood from '../images/wood-texture2.jpg';



const MemberCard = ({ name, trades, tool, img }) => {
  return(
 <div className="mw5 center br3 pa3 pa4-ns mv2 ba b--black-10" style={{'backgroundImage':`url(${wood})`}}>
 	<div className="tc">
 	<img src={img} className="br-100 h4 w4 dib" title={"Photo of "+name} alt={"photo of "+name}/>
	<div className=" bg-white-70 br3 ">
	<h1 className="f4 pt2 mb2">{name}</h1>
	<hr className="mw4 bb bw1 b--black-30 mv0"/>
 	<div className="lh-copy ma0 pa2 center f5 black-7">
   <p className="ma0 pv1"><span className="b">Trades:</span> {trades}</p>
   <p className="ma0 pv1"><span className="b">Favourite Tool:</span> {tool}</p>
 	</div>
 </div>
  </div>
  </div>
  )
}

export default MemberCard;

