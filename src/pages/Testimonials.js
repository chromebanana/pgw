import React from 'react';

class Testimonials extends React.Component {

 render() {
 	const { data } = this.props
 	return (
       <div className="Fill2 tc lh-copy ph2">
        <h1>Testimonials</h1>
            { data && data.map((item, i) => {
            return(
            	<div key={i}>
            	<p className="lh-copy">{item.fields.body}</p>
                <p>{item.fields.name} {item.fields.date}</p>
                </div>
                )
    })}

       </div>   
    );
 } 
}

export default Testimonials;