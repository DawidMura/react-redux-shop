import "./App.scss";
import { PageWelcome } from "./pages/PageWelcome";
import { PageBooks } from "./pages/PageBooks";
import { PageCart } from "./pages/PageCart";

import { NavLink, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <h1>React Shop</h1>
        <hr />
        <NavLink to="/welcome">Welcome</NavLink> |{" "}
        <NavLink to="books">Books</NavLink> | {""}
        <NavLink to="cart">Cart</NavLink>
        <hr />
        <Routes>
          <Route path="/welcome" element={<PageWelcome />} />
          <Route path="/books" element={<PageBooks />} />
          <Route path="/cart" element={<PageCart />} />
          <Route path="/" element={<Navigate to="/welcome" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
