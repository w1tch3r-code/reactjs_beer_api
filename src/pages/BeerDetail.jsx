import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import ArrowLeft from "../components/svg/ArrowLeft";

const BeerDetail = () => {
	const [beerData, setBeerData] = useState(null);

	const { beerID } = useParams();

	// * Wir Fetchen mit UseEffect
	useEffect(() => {
		fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerID}`)
			.then((res) => res.json())
			.then((data) => setBeerData(data))
			.catch((err) => console.error(err));
	}, [beerID]);

	if (!beerData) {
		return <p>Laden....</p>;
	}

	return (
		<section className="section__beer__detail">
			<article className="beer__product_detail">
				<div className="product__image">
					<img src={beerData.image_url} alt={beerData.name} />
				</div>
				<h2>{beerData.name}</h2>
				<h3>{beerData.tagline}</h3>
				<div className="brewed__level">
					<p>First Brewed: </p>
					<p>{beerData.first_brewed}</p>
				</div>
				<div className="brewed__level">
					<p>Attenuation level: </p>
					<p>{beerData.attenuation_level}</p>
				</div>
				<p className="description">{beerData.description}</p>
				<NavLink to="/beerapi">
					<ArrowLeft />
				</NavLink>
			</article>
			<Navbar />
		</section>
	);
};

export default BeerDetail;
