import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
import { Link } from "react-router-dom";
import Image from "../media/showcase/victor-freitas-vqDAUejnwKw-unsplash.jpg";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const loginHandler = async (e) => {
		e.preventDefault();
		alert(e.target.value);
	};

	return (
		<section className="login__section p-3 my-3">
			<div className="container-fluid pt-lg-0 p-5 pt-lg-4 my-4 py-4 d-flex  text-center">
				<Form
					className="login__form d-flex flex-column justify-content-center"
					onSubmit={loginHandler}>
					<h1 className="text-light">Sign In Now!</h1>
					<Form.Group>
						<img
							className="my-4 img-fluid"
							src={Image}
							alt=""
						/>

						<div className="form-floating">
							<Form.Control
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

					<div className="checkbox my-3">
						<Form.Label className="text-light">
							<input
								className="mx-1"
								type="checkbox"
								value="remember-me"
							/>
							Remember me
						</Form.Label>
					</div>
					<Button
						className="w-100 btn btn-lg btn-primary"
						type="submit">
						Login
					</Button>
					<div className="row py-3">
						<div className="col text-light">
							Already have an account? <Link to="/signup">Sign Up</Link>
						</div>
					</div>
				</Form>
			</div>
		</section>
	);
}

export default Login;
