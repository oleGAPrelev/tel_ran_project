import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Button from '../../UI/Button';
import s from './index.module.css';

export default function Modal({ modal, setModal }) {
	return (
		<div className={[s.modal, modal ? s.active : ''].join(' ')}>
			<div className={s.modal_content}>
				<AiOutlineCloseCircle
					className={s.cross_icon}
					onClick={() => setModal(false)}
				/>

				<div className={s.info_text}>
					<h2>Learn more</h2>
					<div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Consequatur nostrum voluptas rerum excepturi, vel fugit architecto
							veritatis debitis in voluptates dolores quasi, perferendis dolore.
							Animi, mollitia. Earum aliquam quia eveniet? Lorem ipsum dolor sit
							amet consectetur adipisicing elit. Porro unde commodi rem qui,
							architecto magni voluptatem inventore odit voluptates velit
							assumenda atque sunt quasi quaerat expedita repudiandae,
							reprehenderit excepturi distinctio!
						</p>
					</div>
				</div>

				<div className={s.modal_button}>
					<Button onClick={() => setModal(false)}>Close</Button>
				</div>
			</div>
		</div>
	);
}
