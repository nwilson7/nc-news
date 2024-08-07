import { getArticles } from "../api";
import { useEffect, useState } from "react";
import "../css modules/article-list.css";

function ArticleList() {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getArticles().then(({ data }) => {
      setArticle(data.articles);
    });
  }, []);
  return (
    <section className="article-list-section">
      {article.map((article) => {
        const {
          title,
          comment_count,
          author,
          created_at,
          article_id,
          article_img_url,
        } = article;

        return (
          <article className="article-list" key={article_id}>
            <h2>{title}</h2>
            <img className="article-img" src={article_img_url} />
            <ul className="article-list-items">
              <li> Written by: {author}</li>
              <li>Comments:{comment_count}</li>
              <li>Uploaded on:{created_at}</li>
            </ul>
          </article>
        );
      })}
    </section>
  );
}

export default ArticleList;
