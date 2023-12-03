import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const BeerApi = () => {
	const [beerData, setBeerData] = useState(null);

	//   * Wir Fetchen mit UseEffect
	useEffect(() => {
		fetch("https://api.punkapi.com/v2/beers")
			.then((res) => res.json())
			.then((data) => setBeerData(data))
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className="smartphone">
			<div className="content">
				<section className="section__beers">
					{beerData ? (
						<div>
							{beerData.map((item, index) => (
								<article className="beer__product" key={index}>
									<div className="beer__image">
										<img src={item.image_url} />
									</div>
									<div className="beer__infos">
										<h2>{item.name}</h2>
										<h3>{item.tagline}</h3>
										<p>Created by: {item.name}</p>
										<Link to={`/beers/${item.id}`}>
											<button>Details</button>
										</Link>
									</div>
								</article>
							))}
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

export default BeerApi;
