import React from "react";
import Card from "./card.jsx"
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
		<main className="container">
			<div><Navbar/></div>
			<div className="mb-3"><Jumbotron/></div>
			<div className="row">
				<div className="col-sm-3 mb-3"><Card text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
				</div>
				<div className="col-sm-3 mb-3"><Card text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
				</div>
				<div className="col-sm-3 mb-3"><Card text="Led do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat nibh sed."/>
				</div>
				<div className="col-sm-3 mb-3"><Card text="Led do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat nibh sed."/>
				</div>
			</div>
			<div><Footer/></div>
		</main>
		</div>
	);
};

export default Home;
