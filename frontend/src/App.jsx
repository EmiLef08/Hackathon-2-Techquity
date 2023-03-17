import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Profile from "./pages/Profile";
import Form1 from "./pages/Form1";
import Recondition from "./pages/Recondition";
import Recyclable from "./pages/Recyclable";
import Result from "./pages/Result";
import Visualisation from "./pages/Visualisation";

export default function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/' element={<Home />} />
				<Route path='/visualisation' element={<Visualisation />} />
				<Route path='/formulaire' element={<Form1 />} />
				<Route path='/resultat' element={<Result />} />
				<Route path='/faq' element={<Questions />} />
				<Route path='/account' element={<Login />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/recyclable' element={<Recyclable />} />
				<Route path='/recondition' element={<Recondition />} />
			</Routes>
			<Footer />
		</>
	);
}
