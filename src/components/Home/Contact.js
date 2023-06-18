import React from "react";
import "./Contact.css";

function Contact() {
	return (
		<>
			<div className="row g-4">
				<h2 className="text-center m-2">Contact Info</h2>
				<div className="col-md d-flex justify-content-center align-items-center ">
					<ul className="list-group list-group-flush lead ">
						<li className="list-group-item">
							<span className="fw-bold">Main Contact:</span> Calvin Thang
						</li>
						<li className="list-group-item">
							<span className="fw-bold">Email Address:</span> cthang@calvietech.com
						</li>
						<li className="list-group-item">
							<span className="fw-bold">GitHub:</span>
							<a
								href="https://github.com/calvieTech"
								className="text-decoration-none">
								{" "}
								Link
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Contact;
