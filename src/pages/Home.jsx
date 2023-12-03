import BeerHeroItem from "../components/BeerHeroItem";

const Home = () => {
	return (
		<div className="smartphone">
			<div className="content">
				<section className="beer__wrapper">
					<BeerHeroItem
						url={"/beerapi"}
						img={"/images/all-beers.jpg"}
						alt={"Alle Biere"}
						title={"Alle Biere"}
						description={
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fuga id, consequuntur cupiditate delectus ad."
						}
					/>

					<BeerHeroItem
						url={"/randombeer"}
						img={"/images/random-beer.jpg"}
						alt={"Zufällige Biere"}
						title={"Random Beer"}
						description={
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fuga id, consequuntur cupiditate delectus ad."
						}
					/>
				</section>
			</div>
		</div>
	);
};

export default Home;
