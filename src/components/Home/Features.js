import React from "react";
import Workout1 from "../../media/features/victor-freitas-hOuJYX2K5DA-unsplash.jpg";
import Workout2 from "../../media/features/gursimrat-ganda-TT042bOytlU-unsplash.jpg";
import Workout3 from "../../media/features/bruce-mars-y0SMHt74yqc-unsplash.jpg";
import "./Features.css";

function Features() {
	return (
		<>
			<div className="row text-center">
				<div className="col-md">
					<div className="card bg-dark text-light h-100">
						<div className="h1 mb-2 d-flex">
							<img
								className="p-2 features__img flex-fill"
								src={Workout1}
								alt="feature1"
							/>
						</div>
						<span className="border border-white"></span>
						<h3 className="features__header card-title my-3">Weight Lifting</h3>
						<p className="card-text mb-3 mx-3">
							Unleash your strength potential with our weightlifting-focused app. Explore diverse
							exercises, track progress, and achieve impressive results. Elevate your lifting game
							now!
						</p>
					</div>
				</div>
				<div className="col-md">
					<div className="card bg-dark text-light h-100">
						<div className="h1 mb-2 d-flex">
							<img
								className="p-2 features__img flex-fill"
								src={Workout2}
								alt="feature1"
							/>
						</div>
						<span className="border border-white"></span>
						<h3 className="features__header card-title my-3">All Types of Levels</h3>
						<p className="card-text mb-3 mx-3">
							Our full-stack gym app caters to all fitness levels, providing beginner-friendly
							features and advanced exercises for intermediates and experts alike. Evolve your
							fitness journey with us!
						</p>
					</div>
				</div>
				<div className="col-md">
					<div className="card bg-dark text-light h-100">
						<div className="h1 mb-2 d-flex">
							<img
								className="p-2 features__img flex-fill"
								src={Workout3}
								alt="feature1"
							/>
						</div>
						<span className="border border-white"></span>
						<h3 className="features__header card-title my-3">Log Your Workouts</h3>
						<p className="card-text mb-3 mx-3">
							Effortlessly track, time, and share your workouts with our full-stack gym app. Log
							your sessions, time your exercises, and easily share your progress with friends.
							Simplify your fitness journey with our intuitive features.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Features;
