import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

class Landlords extends React.Component {
 render() {
 	const { data } = this.props
 	return (
       <div className="tc pa2">
       {
       	documentToReactComponents(data)
       }
       </div>   
    );
 } 
}

export default Landlords;