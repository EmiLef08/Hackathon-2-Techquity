import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Account from "./pages/Account";
import Form1 from "./pages/Form1";

export default function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/formulaire' element={<Form1 />} />
				<Route path='/faq' element={<Questions />} />
				<Route path='/account' element={<Account />} />
			</Routes>
		</>
	);
}
