import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Join from './pages/Join';
import Testimonials from './pages/Testimonials';
import Landlords from './pages/Landlords';


const BaseRouter = () => (
	<div >
		<Route exact path='/' component={Home} />
		<Route exact path='/gallery' component={Gallery} />
		<Route exact path='/join' component={Join} />
		<Route exact path='/testimonials' component={Testimonials} />
		<Route exact path='/landlords' component={Landlords} />

	</div>
)

export default BaseRouter;