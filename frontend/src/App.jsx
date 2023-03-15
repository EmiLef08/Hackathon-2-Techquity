import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Account from "./pages/Account";

export default function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/faq' element={<Questions />} />
				<Route path='/account' element={<Account />} />
			</Routes>
		</>
	);
}
