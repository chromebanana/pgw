import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Join from './pages/Join';

const BaseRouter = () => (
	<div>
		<Route exact path='/' component={Home} />
		<Route exact path='/gallery' component={Gallery} />
		<Route exact path='/testimonials' component={Testimonials} />
		<Route exact path='/join' component={Join} />
	</div>
)

export default BaseRouter;