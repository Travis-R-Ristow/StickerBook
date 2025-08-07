import { BrowserRouter, Route, Routes } from "react-router";

export const Router = () => (
	<BrowserRouter>
		<Routes>
			<Route index element={<Home />} />
		</Routes>
	</BrowserRouter>
);
