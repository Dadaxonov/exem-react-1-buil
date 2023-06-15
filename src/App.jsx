import { useState } from "react";
import "./style/style.css";

import { MainLayaut } from "./layaut/MainLayaut";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Card } from "./pages/card/card";
import { Admin } from "./pages/admin/Admin";
import { Login } from "./pages/login/login";
function App() {
  const [tek, setTek] = useState(false);
  return (
    <>
      <MainLayaut>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />

          <Route
            path="/admin"
            element={!tek ? <Login setTek={setTek} /> : <Admin />}
          />
          <Route
            path="*"
            element={<hi style={{ color: "red" }}>NOT PAGES!!</hi>}
          />
        </Routes>
      </MainLayaut>
    </>
  );
}

export default App;
