import React from 'react';

class Testimonials extends React.Component {

 render() {
 	const { testimonials, data } = this.props
    const testimonialsSorted = testimonials && testimonials.map((item, i) => {
      return data.Entry && data.Entry.filter(entry => 
            entry.sys.id === item.sys.id)[0]
    })
 	return (
       <div className="tc lh-copy ph2">
        <h1>Testimonials</h1>
            { testimonialsSorted && testimonialsSorted.map((item, i) => {
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