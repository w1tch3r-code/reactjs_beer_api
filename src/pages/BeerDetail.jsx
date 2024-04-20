import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ArrowLeft from "../components/svg/ArrowLeft";

const BeerDetail = () => {
	const [beerData, setBeerData] = useState(null);

	const { beerID } = useParams();

	useEffect(() => {
		fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerID}`)
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
								<Link to="/beerapi">
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

export default BeerDetail;
