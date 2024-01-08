import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ArrowLeft from "../components/svg/ArrowLeft";

const BeerDetail = () => {
	const [beerData, setBeerData] = useState(null);

	const { beerID } = useParams();

	useEffect(() => {
		fetch(`https://api.punkapi.com/v2/beers/${beerID}`)
			.then((res) => res.json())
			.then((data) => setBeerData(data))
			.catch((err) => console.error(err));
	}, [beerID]);

	return (
		<div className="smartphone">
			<div className="content">
				<section className="section__beer__detail">
					{beerData ? (
						<div>
							<article className="beer__product_detail">
								<div className="product__image">
									<img
										src={beerData[0].image_url}
										alt={beerData[0].name}
									/>
								</div>
								<h2>{beerData[0].name}</h2>
								<h3>{beerData[0].tagline}</h3>
								<div className="brewed__level">
									<p>First Brewed: </p>
									<p>{beerData[0].first_brewed}</p>
								</div>
								<div className="brewed__level">
									<p>Attenuation level: </p>
									<p>{beerData[0].attenuation_level}</p>
								</div>
								<p className="description">
									{beerData[0].description}
								</p>
								<Link to="/beerapi">
									<ArrowLeft />
								</Link>
							</article>
							<Navbar />
						</div>
					) : (
						<div className="logo__wrapper">
							<img
								src="/images/react.svg"
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

export default BeerDetail;
