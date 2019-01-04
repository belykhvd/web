import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<menu>
					<ul className="payment-api__ul">
						<li><Link to="/PaymentAnyBankCard">Заплатить</Link>
							<ul>
								<li><Link to="/PaymentAnyBankCard">C карты любого банка</Link></li>
								<li>-------</li>
							</ul>
						</li>
						<li><Link to="/PaymentRequest">Запросить платеж</Link></li>
					</ul>
				</menu>
			</header>
		)
	}
}