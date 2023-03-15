import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Account from "./pages/Account";
import Profile from "./pages/Profile";

export default function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/faq' element={<Questions />} />
				<Route path='/account' element={<Account />} />
				<Route path='/profile' element={<Profile />} />
			</Routes>
		</>
	);
}
