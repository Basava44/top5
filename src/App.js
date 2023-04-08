import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Main/Main";
import NotFound from "./components/NotFound/NotFound";
import GameZone from "./components/GameZone/GameZone";

import "./App.css";

const App = () => {
  return (
    <div className="mainWrapper">
      <div className="adSection">Ads</div>
      <div className="mainContent">
        <BrowserRouter>
          <Routes>
            <Route path="/top5" index element={<Main />} />
            <Route path="/gamezone" element={<GameZone />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div className="adSection">Ads</div>
      <div className="adSection__bottom">Ads</div>
    </div>
  );
};

export default App;
