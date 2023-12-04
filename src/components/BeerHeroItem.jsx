import { Link } from "react-router-dom";

const BeerHeroItem = ({ url, img, alt, title, description }) => {
	return (
		<article className="article__beer">
			<Link to={url}>
				<img src={img} alt={alt} />
			</Link>
			<h2>{title}</h2>
			<p>{description}</p>
		</article>
	);
};

export default BeerHeroItem;
