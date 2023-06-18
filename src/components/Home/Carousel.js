import React from "react";
import { Carousel as Slideshow } from "bootstrap";
import Workout1 from "../../media/showcase/anastase-maragos-9dzWZQWZMdE-unsplash.jpg";
import Workout2 from "../../media/showcase/anastase-maragos-9dzWZQWZMdE-unsplash.jpg";
import Workout3 from "../../media/showcase/anastase-maragos-9dzWZQWZMdE-unsplash.jpg";

function Carousel() {
	const slideshowDiv = document.getElementById("gymc__slideshow");

	const slideShow = () => {
		return (
			<div className="gymc__slideshow">
				<img
					src={Workout1}
					alt=""
					className="p-2 img-fluid gymc__workout w-50 d-none d-sm-block"
				/>
				<img
					src={Workout2}
					alt=""
					className="p-2 img-fluid gymc__workout w-50 d-none d-sm-block"
				/>
				<img
					src={Workout3}
					alt=""
					className="p-2 img-fluid gymc__workout w-50 d-none d-sm-block"
				/>
			</div>
		);
	};

	return <div>Carousel</div>;
}
export default Carousel;
