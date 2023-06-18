import React from "react";
import Workout1 from "../../media/showcase/victor-freitas-vjkM-0m34KU-unsplash.jpg";
import { Link } from "react-router-dom";
import "./Showcase.css";

function Showcase() {
	return (
		<>
			<div className="d-sm-flex align-items-center justify-content-between">
				<div>
					<h1 className="my-2 text-center">
						Build your <span className="showcase__emphasis">dream body</span> today!
					</h1>
					<p className="lead my-4">
						Introducing GYMC, the ultimate full-stack workout app. Discover exercises, track
						workouts, and achieve your fitness goals effortlessly. Search for exercises based on
						your preferences, log your workouts, and monitor your progress over time. GYMC is your
						go-to solution for exercise exploration and seamless workout tracking. Get ready to
						transform your fitness journey with GYMC!
					</p>
					<div className="d-flex justify-content-center">
						<Link to="/signup">
							<button className="btn btn-primary btn-lg">Start Lifting Now!</button>
						</Link>
					</div>
				</div>
				<img
					src={Workout1}
					alt=""
					className="px-2 img-fluid gymc__workout w-50 d-none d-md-block"
				/>
			</div>
		</>
	);
}

export default Showcase;
