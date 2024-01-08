import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BeerHeroItem = ({ url, img, alt, title, description }) => {
	return (
		<article className="article__beer">
			<Link to={url}>
				<img src={img} alt={alt} />
				<h2>{title}</h2>
			</Link>
			<p>{description}</p>
		</article>
	);
};

BeerHeroItem.propTypes = {
	url: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default BeerHeroItem;
