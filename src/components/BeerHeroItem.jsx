import { Link } from "react-router-dom";

const BeerHeroItem = (props) => {
	return (
		<article className="article__beer">
			<Link to={props.url}>
				<img src={props.img} alt={props.alt} />
			</Link>
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</article>
	);
};

export default BeerHeroItem;
