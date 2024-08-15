import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ArticleList from "./components/ArticleList";
import ArticlePage from "./components/ArticlePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:articleId" element={<ArticlePage />} />
      </Routes>
    </>
  );
}

export default App;
