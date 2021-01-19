import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Join from './pages/Join';
import Testimonials from './pages/Testimonials';
import Landlords from './pages/Landlords';


const BaseRouter = ({ home, ethos, testimonials }) => (
	<div >
		<Route exact path='/' render={(props) => <Home {...props} data={home} ethos={ethos} />} />
		<Route exact path='/gallery' component={Gallery} />
		<Route exact path='/join' component={Join} />
		<Route exact path='/testimonials' render={(props) => <Testimonials {...props} data={testimonials} />}  />
		<Route exact path='/landlords' component={Landlords} />

	</div>
)

export default BaseRouter

