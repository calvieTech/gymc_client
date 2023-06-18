import React from "react";
import "./Newsletter.css";

function Newsletter() {
	return (
		<div className="d-md-flex justify-content-between align-items-center newsletter__container">
			<h2 className="mb-3 mb-md-0 text-dark">Join Our Newsletter!</h2>
			<div className="input-group mb-3 newsletter__input">
				<input
					type="text"
					className="form-control"
					placeholder="Email Address"
					aria-label="Email Address"
				/>
				<button
					className="btn bg-dark-subtle btn-lg text-emphasis"
					type="button"
					id="button-addon2">
					Join Now!
				</button>
			</div>
		</div>
	);
}

export default Newsletter;
