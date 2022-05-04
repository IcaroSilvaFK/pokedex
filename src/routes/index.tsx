import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Poke } from "../pages/Poke";

export function RoutesApplication() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/poke/:id' element={<Poke />} />
      </Routes>
    </BrowserRouter>
  );
}
