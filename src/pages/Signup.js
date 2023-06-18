import React, { useState } from "react";
import Logo from "../media/logo.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "../media/features/victor-freitas-hOuJYX2K5DA-unsplash.jpg";
import "./Signup.css";
import { Link } from "react-router-dom";

function Signup() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const registerHandler = async (e) => {
		e.preventDefault();
		alert("registration submitted");
	};

	return (
		<section className="signup__section p-3 my-3">
			<div className="container text-dark pt-lg-0 p-5 pt-lg-4 my-4 py-4 d-flex  text-center">
				<Form
					className="signup__form d-flex flex-column justify-content-center"
					onSubmit={registerHandler}>
					<h1>Sign Up Now!</h1>
					<Form.Group>
						<img
							className="my-4 img-fluid"
							src={Image}
							alt=""
						/>

						<div className="form-floating">
							<input
								type="email"
								className="form-control"
								id="floatingInput"
								placeholder="name@example.com"
							/>
							<Form.Label>Email address</Form.Label>
						</div>
					</Form.Group>
					<div className="form-floating">
						<Form.Control
							type="password"
							className="form-control"
							id="floatingPassword"
							placeholder="Password"
						/>
						<Form.Label>Password</Form.Label>
					</div>
					<Button
						className="w-100 btn btn-lg btn-primary"
						type="submit">
						Register
					</Button>
					<div className="row py-3">
						<div className="col">
							Already have an account? <Link to="/login">Sign In</Link>
						</div>
					</div>
				</Form>
			</div>
		</section>
	);
}

export default Signup;
