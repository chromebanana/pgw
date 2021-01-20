import React from 'react';
import List from '../components/List';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

class Landlords extends React.Component {
  constructor(props) {
        super(props);
    }


 render() {
 	const { data } = this.props
 	return (
       <div className="Fill tc pa2">
       {
       	documentToReactComponents(data)
       }
       </div>   
    );
 } 
}

export default Landlords;