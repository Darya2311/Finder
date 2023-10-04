import './index.css';

interface IItem {
	src: string;
	title: string;
	id?: number;
}

export const Item = ({ src, title }: IItem) => {
	return (
		<div className="itemContainer">
			<a className="homeLink" href="https://www.finder.com.au/.">
				<div className="icon">
					<img src={src} alt="pic" />
				</div>
				<p className="title">{title}</p>
			</a>
		</div>
	);
};
