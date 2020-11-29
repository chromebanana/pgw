import React from 'react';
import ContentSectionSmall from '../components/ContentSectionSmall';
import ContentSectionBig from '../components/ContentSectionBig';


	// <h1 className="mt1 mt3-l mt3-m">Peoples General Woodhouse</h1>

class Home extends React.Component {
    render() {
        return (
            <div>

	<p className="pa2 lh-copy">The People’s General Woodhouse is a collective of woodworkers and other traders working in Sussex. We believe in:</p>
	<ContentSectionSmall emoji="🌱" emojidesc="seedling" title="Eco-friendly building options" content="All our timber is FSC approved. We always consider how we can do the job in a more sustainable way. This could involve using recycled timber, biodegradable finishes, avoiding composite boards, etc."/>
	<ContentSectionSmall emoji="🤝" emojidesc="handshake" title="Diversity and mutual aid in the trading community" content="We want to see more women and people of diverse ethnicities and abilities involved in the trades. Our collective is a way for traders to share knowledge, tools, work and space for the benefit of everyone."/>
	<ContentSectionSmall emoji="💷" emojidesc="bank note" title="Transparency and Respect" content="We’ll always give itemised quotes and strive to be flexible to meet people’s budgets. We’re respectful of the space when working in clients’ homes and we’ll always tidy up when the job is done."/>

		
	<div className="bt b--black-20">
	<h2 className="mb2 f4 f3-ns">Our Services</h2>
	
		<ul className="mt0">
			<li className>Kitchens</li>
			<li>Bespoke Shelving</li>
			<li>Cabinetry</li>
			<li>Furniture including: Tables, Desks, Benches and Beds</li>
			<li>Outdoor builds including: Sheds, lean-tos and gates</li>
			<li>Woodturning</li>
			<li>Picture Framing</li>
			<li>Furniture Restoration</li>
		</ul>

	</div>
		<div className="bb b--black-20">

	<h2 className="mb2 f4 f3-ns">Landlords</h2>
	<p className="mt0">We provide fast turn-around work for rented accommodation, covering the following areas:	
	<ul>
		<li>Painting and decorating</li>
		<li>Furniture assembly and removal</li>
		<li>Garden maintenance</li>
		<li>General repairs</li>
	</ul>	
	If you let your property in Brighton and Hove and would like quick, professional help, <a href="mailto:thepeoplesgeneralwoodhouse@gmail.com">please email us.</a>
	</p>
	</div>	
	</div>
        );
    }
}
export default Home;