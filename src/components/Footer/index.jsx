import React from 'react';
import s from './index.module.css';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';

export default function Footer() {
	return (
		<footer className={['wrapper', s.footer].join(' ')} id="contacts">
			<div className={s.contacts}>
				<h2>Contact</h2>
				<p>+49 999 999 99 99</p>
				<div className={s.networcs}>
					<a href="/">
						<AiOutlineInstagram className={s.icons} />
						<p>instagram</p>
					</a>
					<a href="/">
						<AiOutlineWhatsApp className={s.icons} />
						<p>WhatsApp</p>
					</a>
				</div>
			</div>
			<div className={s.address}>
				<h2>Address</h2>
				<p>
					Linkstraße 2, 8 OG, 10785,
					<span>Berlin, Deutschland</span>
				</p>
				<p>
					Working Hours: <span className={s.accent}>24 hours a day</span>
				</p>
			</div>
		</footer>
	);
}
