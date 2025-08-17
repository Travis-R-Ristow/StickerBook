import { BrowserRouter, Route, Routes } from "react-router";

import { Home } from "./Home";
import { MyCollection } from "./MyCollection";

export const MyRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/my-collection" element={<MyCollection />} />
    </Routes>
  </BrowserRouter>
);
