import React from "react";
import Carousel from "../components/Home/Carousel";
import Newsletter from "../components/Home/Newsletter";
import Showcase from "../components/Home/Showcase";
import Features from "../components/Home/Features";
import Faq from "../components/Home/Faq";
import Contact from "../components/Home/Contact";
import "./Home.css";

function Home() {
	return (
		<>
			<section className="bg-dark text-light p-5 pt-lg-4 text-center text-sm-start">
				<Showcase className="container" />
			</section>
			<section className="text-light p-5 newsletter__section">
				<Newsletter className="container" />
			</section>
			<section className="p-5 bg-light">
				<Features className="container" />
			</section>
			<section className="p-5 bg-dark">
				<Faq className="container" />
			</section>
			<section className="p-5 contact__section text-light">
				<Contact className="container" />
			</section>
		</>
	);
}

export default Home;
