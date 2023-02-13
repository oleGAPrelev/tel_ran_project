import React from 'react';
import Button from '../../UI/Button';
import s from './index.module.css';
import logo from './media/garden_logo.png';
import { SlHandbag } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { Link as Lscroll } from 'react-scroll';

export default function Nav() {
	return (
		<nav className={['wrapper', s.nav_block].join(' ')}>
			<div className={s.logo_btn}>
				<Link to="/">
					<img src={logo} alt="logo" />
				</Link>
				<Link to="/catalog">
					<Button>Catalog</Button>
				</Link>
			</div>

			<ul className={s.nav_menu}>
				<Link to="/categories">Catalogs</Link>
				<Lscroll
					to="coupon"
					className={s.scroll}
					spy={true}
					smooth={true}
					offset={50}
					duration={900}
				>
					Coupon
				</Lscroll>
				<Lscroll
					to="stock"
					className={s.scroll}
					spy={true}
					smooth={true}
					offset={50}
					duration={900}
				>
					Sale
				</Lscroll>
				<Lscroll
					to="contacts"
					className={s.scroll}
					spy={true}
					smooth={true}
					offset={50}
					duration={900}
				>
					Contact
				</Lscroll>
				<Link to="/cart">
					<SlHandbag className={s.bad} />
				</Link>
			</ul>
		</nav>
	);
}
