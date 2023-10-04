import './index.css';
import { Content } from '../../components/Content';

export const HomePage = () => {
	return (
		<div className="homeSection">
			<h1> Join 2 million+ Australians finding better</h1>
			<p className="homeDesc">
				{`Finder's`} team of 40+ experts will help you find the right choices in over 100
				categories.
			</p>
			<Content />
		</div>
	);
};
