import "./App.css";
import Header from "./components/Navigation/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/shared/Footer";

function App() {
	const routes = (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/login"
				element={<Login />}
			/>
			<Route
				path="/signup"
				element={<Signup />}
			/>
		</Routes>
	);

	return (
		<div className="app">
			<Router>
				<Header />
				{routes}
				<Footer />
			</Router>
		</div>
	);
}

export default App;
