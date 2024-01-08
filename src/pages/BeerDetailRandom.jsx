import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ArrowLeft from "../components/svg/ArrowLeft";

const BeerDetailRandom = () => {
  const [beerDataRandom, setBeerDataRandom] = useState(null);

  useEffect(() => {
    const fetchRandomBeer = async () => {
      try {
        const response = await fetch("https://api.punkapi.com/v2/beers/random");
        const data = await response.json();

        if (
          data[0].image_url === null ||
          data[0].image_url === "https://images.punkapi.com/v2/keg.png"
        ) {
          // Wenn das Bild ungültig ist, erneut nach einem zufälligen Bier suchen
          fetchRandomBeer();
        } else {
          setBeerDataRandom(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchRandomBeer();
  }, []);

  return (
    <div className="smartphone">
      <div className="content">
        <section className="section__beer__detail">
          {beerDataRandom ? (
            <div>
              <article className="beer__product_detail">
                <div className="product__image">
                  <img src={beerDataRandom[0].image_url} alt={beerDataRandom[0].name} />
                </div>
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
                <p className="description">{beerDataRandom[0].description}</p>
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