import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import WikiHome from "./pages/WikiHome";
import WikiAdd from "./pages/WikiAdd";
import WikiDetail from "./pages/WikiDetail";
import WikiEdit from "./pages/WikiEdit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WikiHome />} />
        <Route path="/wikiAdd" element={<WikiAdd />} />
        <Route path="/wikiDetail/:wikiId" element={<WikiDetail />} />
        <Route path="/wikiEdit" element={<WikiEdit />} />
      </Route>
    </Routes>
  );
}

export default App;
