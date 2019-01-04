import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header/header.jsx';
import About from './about/about.jsx';
import Blog from './blog/blog.jsx';

import PaymentAnyBankCard from './paymentAnyBankCard/paymentAnyBankCard.jsx'
import PaymentRequest from './paymentRequest/paymentRequest.jsx'

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Header/>
					<main>
						<Switch>
                  			<Route path="/PaymentAnyBankCard" component={PaymentAnyBankCard} />
							<Route path="/PaymentRequest" component={PaymentRequest} />
							<Route path="/about" component={About}/>
							<Route path="/" component={Blog}/>
						</Switch>
					</main>
				</div>
			</Router>
		);
	}
}