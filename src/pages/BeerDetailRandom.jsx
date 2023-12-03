import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ArrowLeft from "../components/svg/ArrowLeft";

const BeerDetailRandom = () => {
	const [beerDataRandom, setBeerDataRandom] = useState(null);

	// * Wir fetchen mit UseEffect
	useEffect(() => {
		fetch("https://api.punkapi.com/v2/beers/random")
			.then((res) => res.json())
			.then((data) => setBeerDataRandom(data))
			.catch((err) => console.error(err));
	}, []);

	const filteredProdukt = beerDataRandom?.filter(
		(item) => item.image_url !== null
	);

	return (
		<div className="smartphone">
			<div className="content">
				<section className="section__beer__detail">
					{beerDataRandom ? (
						<div>
							<article className="beer__product_detail">
								{filteredProdukt.length > 0 && (
									<div className="product__image">
										<img
											src={filteredProdukt[0].image_url.toString()}
											alt={beerDataRandom[0].name}
										/>
									</div>
								)}
								<h2>{beerDataRandom[0].name}</h2>
								<h3>{beerDataRandom[0].tagline}</h3>
								<div className="brewed__level">
									<p>First Brewed: </p>
									<p>{beerDataRandom[0].first_brewed}</p>
								</div>
								<div className="brewed__level">
									<p>Attenuation level: </p>
									<p>{beerDataRandom[0].attenuation_level}</p>
								</div>
								<p className="description">
									{beerDataRandom[0].description}
								</p>
								<Link to="/">
									<ArrowLeft />
								</Link>
							</article>
							<Navbar />
						</div>
					) : (
						<div className="logo__wrapper">
							<img
								src="/src/assets/react.svg"
								className="logo"
								alt="React logo"
							/>
						</div>
					)}
				</section>
			</div>
		</div>
	);
};

export default BeerDetailRandom;
