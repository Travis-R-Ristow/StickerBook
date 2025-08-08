import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./Home";

export const MyRouter = () => (
	<BrowserRouter>
		<Routes>
			<Route index element={<Home />} />
		</Routes>
	</BrowserRouter>
);
