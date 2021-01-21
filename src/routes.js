import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Join from './pages/Join';
import Testimonials from './pages/Testimonials';
import Landlords from './pages/Landlords';


const BaseRouter = ({ fields, includes }) => (
	<div >
		<Route exact path='/' render={(props) => <Home {...props} fields={fields} includes={includes}/>} />
		<Route exact path='/gallery' render={(props) => <Gallery {...props} fields={fields} includes={includes} />} />
		<Route exact path='/join' render={(props) => <Join {...props} fields={fields} includes={includes} />}  />
		<Route exact path='/testimonials' render={(props) => <Testimonials {...props} data={includes} testimonials={fields.testimonials} />}  />
		<Route exact path='/landlords' render={(props) => <Landlords {...props} data={fields.landlords} />} />

	</div>
)

export default BaseRouter

