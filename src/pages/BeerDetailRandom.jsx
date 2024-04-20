import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ArrowLeft from "../components/svg/ArrowLeft";

const BeerDetailRandom = () => {
	const [beerDataRandom, setBeerDataRandom] = useState(null);

	useEffect(() => {
		fetch("https://ih-beers-api2.herokuapp.com/beers/random")
			.then((res) => res.json())
			.then((data) => setBeerDataRandom(data))
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className="smartphone">
			<div className="content">
				<section className="section__beer__detail">
					{beerDataRandom ? (
						<div>
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
								<p className="description">{beerDataRandom.description}</p>
								<Link to="/">
									<ArrowLeft />
								</Link>
							</article>
							<Navbar />
						</div>
					) : (
						<div className="logo__wrapper">
							<img src="/images/react.svg" className="logo" alt="React logo" />
						</div>
					)}
				</section>
			</div>
		</div>
	);
};

export default BeerDetailRandom;
