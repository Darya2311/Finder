import { useState } from 'react';
import './index.css';
import { Item } from '../Item';
import { LINKS } from '../../shared/constants/links';

export const Content = () => {
	const [isHidden, setIsHidden] = useState(true);
	const preview = LINKS.slice(0, 6);

	return (
		<div className="contentContainer">
			<div className="mainContent">
				{isHidden
					? preview.map((link) => <Item src={link.src} title={link.title} key={link.id} />)
					: LINKS.map((link) => <Item src={link.src} title={link.title} key={link.id} />)}
			</div>

			<div className="expansionAreaToggler">
				{isHidden ? (
					<button onClick={() => setIsHidden(!isHidden)}>
						Show more categories
						<img src="./icons/down.svg" alt="down" />
					</button>
				) : (
					<button onClick={() => setIsHidden(!isHidden)}>
						Show less categories
						<img src="./icons/up.svg" alt="down" />
					</button>
				)}
			</div>
		</div>
	);
};
