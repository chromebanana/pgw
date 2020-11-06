import React from 'react';
import me from '../images/me.jpeg'


class Home extends React.Component {

 render() {
 	return (
       <div>
        <h1 className="mt1 mt3-l mt3-m">Peoples General Woodhouse</h1>
        <p>The People’s General Woodhouse is a collective of woodworkers and other traders working in Sussex. We believe in:
        <ul>
       <li>Eco-friendly building options</li> 
       <li>Diversity and mutual aid in the trading community</li>
       <li>Transparent pricing and respect for clients</li>
        </ul>
		All the timber we buy is FSC approved. We’ll always consider how we can do the job in a more sustainable way. This could involve using recycled timber, biodegradable finishes, avoiding composite boards, etc.
		We want to see more women and people of diverse ethnicities and abilities to be involved in the trades. Our collective is a way for traders to share knowledge, tools, work and space for the benefit of everyone. 
		We’ll always give itemised quotes and strive to be flexible to meet people’s budgets. We’re respectful of the space when working in clients’ homes and we’ll always tidy up when the job is done. </p>
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
       </div>   
    );
 } 
}

export default Home;