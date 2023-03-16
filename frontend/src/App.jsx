import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Profile from "./pages/Profile";
import Form1 from "./pages/Form1";
import Form2 from "./pages/Form2";
import Reconditionnement from "./pages/Reconditionnement";
import Recyclage from "./pages/Recyclage";

export default function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/' element={<Home />} />
				<Route path='/formulaire' element={<Form1 />} />
				<Route path='/faq' element={<Questions />} />
				<Route path='/account' element={<Login />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/recyclable' element={<Recyclable />} />
				<Route path="/recondition" element={<Recondition />} />
			</Routes>
		</>
	);
}
