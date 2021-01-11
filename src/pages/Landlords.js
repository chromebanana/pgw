import React from 'react';
import List from '../components/List';

class Landlords extends React.Component {

 render() {
 	return (
       <div className="Fill tc">
       <h1>Landladies/lords</h1>
<List  
	intro="We provide fast turn-around work for rented accommodation, covering the following areas:	" 
	list={['Painting and Decorating', 'Furniture Assembly and Removal', 'Garden Maintenance', 'General Repairs']} 
	outro={[" If you let your property in Brighton and Hove and would like quick, professional help ", <a href="mailto:thepeoplesgeneralwoodhouse@gmail.com">please email us.</a>]}/>

       </div>   
    );
 } 
}

export default Landlords;