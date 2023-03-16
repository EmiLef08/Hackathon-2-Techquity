import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
// import Account from "./pages/Account";
import Profile from "./pages/Profile";
import Form1 from "./pages/Form1";
import Recondition from "./pages/Recondition";

export default function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/formulaire' element={<Form1 />} />
				<Route path='/faq' element={<Questions />} />
				{/* <Route path='/account' element={<Account />} /> */}
				<Route path='/profile' element={<Profile />} />
				<Route path="/recondition" element={<Recondition />} />
			</Routes>
		</>
	);
}
