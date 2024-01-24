import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home.tsx";
import Auth from "./pages/Auth.tsx";

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/callback" element={<Home />} />
			<Route path="/auth" element={<Auth />} />
		</Routes>
	);
}