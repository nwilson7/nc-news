import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Signin from "./components/Signin";
import Home from "./components/Home";
import ArticleList from "./components/ArticleList";
import { getCategories } from "./api";

function App() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getCategories().then(({ data }) => {
      setCategory(data);
    });
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route
          path="/home"
          element={<Home category={category} setCategory={setCategory} />}
        />
        <Route path="/articles" element={<ArticleList />} />
      </Routes>
    </>
  );
}

export default App;
