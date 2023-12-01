import BeerIcon from "./svg/BeerIcon";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="beer__nav">
			<NavLink to="/">
				<BeerIcon />
			</NavLink>
		</nav>
	);
};

export default Navbar;
