import { useEffect, useState } from 'react';
import './index.css';
import { Item } from '../Item';
import { LINKS } from '../../shared/constants/links';

export const Content = () => {
	const [isHidden, setIsHidden] = useState(true);
	const [screenWwidth, setScreenWwidth] = useState(window.screen.width);
	const preview = screenWwidth > 900 || screenWwidth < 600 ? LINKS.slice(0, 6) : LINKS.slice(0, 4);

	useEffect(() => {
		const handleResize = (event: Event) => {
			const target = event.target as Window;
			setScreenWwidth(target.screen.width);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

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
