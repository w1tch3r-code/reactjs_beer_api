import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ArrowLeft from "../components/svg/ArrowLeft";

const BeerDetailRandom = () => {
	const [beerDataRandom, setBeerDataRandom] = useState(null);

	// * Wir fetchen mit UseEffect
	useEffect(() => {
		fetch("https://ih-beers-api2.herokuapp.com/beers/random")
			.then((res) => res.json())
			.then((data) => setBeerDataRandom(data))
			.catch((err) => console.error(err));
	}, []);

	if (!beerDataRandom) {
		return <p>Laden....</p>;
	}

	return (
		<div class="smartphone">
			<div class="content">
				<section className="section__beer__detail">
					<article className="beer__product_detail">
						<div className="product__image">
							<img
								src={beerDataRandom.image_url}
								alt={beerDataRandom.name}
							/>
						</div>
						<h2>{beerDataRandom.name}</h2>
						<h3>{beerDataRandom.tagline}</h3>
						<div className="brewed__level">
							<p>First Brewed: </p>
							<p>{beerDataRandom.first_brewed}</p>
						</div>
						<div className="brewed__level">
							<p>Attenuation level: </p>
							<p>{beerDataRandom.attenuation_level}</p>
						</div>
						<p className="description">
							{beerDataRandom.description}
						</p>
						<Link to="/">
							<ArrowLeft />
						</Link>
					</article>
					<Navbar />
				</section>
			</div>
		</div>
	);
};

export default BeerDetailRandom;
