import { getArticles } from "../api";
import { useEffect, useState } from "react";
import "../css modules/article-list.css";
import ArticleCard from "./ArticleCard";
import Nav from "./Nav";

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then(({ data }) => {
      setArticles(data.articles);
    });
  }, []);

  return (
    <>
      <Nav />
      <ul className="article-list">
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <ArticleCard article={article} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ArticleList;
