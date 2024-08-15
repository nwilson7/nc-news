import Nav from "./Nav";
import { getSortedArticlesByDate } from "../api";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import "../css modules/home.css";

function Home() {
  const [latestArticles, setLatestArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSortedArticlesByDate().then((lastCreatedArticles) => {
      setLatestArticles(lastCreatedArticles.slice(0, 4));
      setIsLoading(false);
    });
  }, []);
  if (isLoading === true) {
    return <p>Loading</p>;
  }
  return (
    <>
      <Nav />
      <h2>Latest News</h2>
      <div className="featured-articles">
        {latestArticles.length > 0 && (
          <>
            <div className="featured-article">
              <ArticleCard article={latestArticles[0]} large />
            </div>
            <div className="side-articles">
              {latestArticles.slice(1, 4).map((article) => (
                <div key={article.article_id} className="side-article">
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default Home;
