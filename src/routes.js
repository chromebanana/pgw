import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Portfolio from './pages/Portfolio';
import { Contact } from './pages/Contact';

const BaseRouter = () => (
	<div>
		<Route exact path='/' component={Home} />
		<Route exact path='/gallery' component={Gallery} />
		<Route exact path='/portfolio' component={Portfolio} />
		<Route exact path='/contact' component={Contact} />
	</div>
)

export default BaseRouter;