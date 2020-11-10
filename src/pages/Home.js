import React from 'react';
import pgw from '../images/pgw.png';

class Home extends React.Component {
    render() {
        return (
            <div>

	<div className="">
	<h1 className="mt1 mt3-l mt3-m">Peoples General Woodhouse</h1>
	<p>The People’s General Woodhouse is a collective of woodworkers and other traders working in Sussex. We believe in:
	<h3><span role="img" aria-label="seedling">🌱</span> Eco-friendly building options</h3>
	<p>All our timber is FSC approved. We’ll always consider how we can do the job in a more sustainable way. This could involve using recycled timber, biodegradable finishes, avoiding composite boards, etc.</p>
	<h3><span role="img" aria-label="love heart">❤️</span> Diversity and mutual aid in the trading community</h3>
	<p>We want to see more women and people of diverse ethnicities and abilities involved in the trades. Our collective is a way for traders to share knowledge, tools, work and space for the benefit of everyone.</p>
	<h3><span role="img" aria-label="bank note">💷</span> Transparent pricing and respect for clients</h3>
	<p>We’ll always give itemised quotes and strive to be flexible to meet people’s budgets. We’re respectful of the space when working in clients’ homes and we’ll always tidy up when the job is done. </p></p>
		
		
	
	<h2>Services</h2>
	<p>We have experience in the following:
		<ul>
			<li>Kitchens</li>
			<li>Bespoke Shelving</li>
			<li>Cabinetry</li>
			<li>Furniture including: Tables, Desks, Benches and Beds</li>
			<li>Outdoor builds including: Sheds, lean-tos and gates</li>
			<li>Woodturning</li>
			<li>Picture Framing</li>
			<li>Furniture Restoration</li>
		</ul>
	</p>
	<h2>Landlords</h2>
	<p>We provide fast turn-around work for rented accommodation, covering the following areas:	
	<ul>
		<li>Painting and decorating</li>
		<li>Furniture assembly and removal</li>
		<li>Garden maintenance</li>
		<li>General repairs</li>
	</ul>	
	If you let your property in Brighton and Hove and would like quick, professional help, please email <a href="mailto:thepeoplesgeneralwoodhouse@gmail.com">thepeoplesgeneralwoodhouse@gmail.com</a>
	</p>
</div>
<img class="w-100 pb4" alt="pgw"src={pgw}/>
	</div>
        );
    }
}
export default Home;