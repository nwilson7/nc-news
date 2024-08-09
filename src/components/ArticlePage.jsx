import { useEffect, useState } from "react";
import { getArticlesById } from "../api";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import CommentList from "./CommentList";

function ArticlePage() {
  const [article, setArticle] = useState();
  const { articleId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticlesById(articleId).then(({ data }) => {
      setArticle(data.article);
      setIsLoading(false);
    });
  }, []);
  if (isLoading === true) {
    return <p>Loading</p>;
  }
  return (
    <>
      <Nav />
      <h1>{article.title}</h1>
      <p>Written by: {article.author}</p>
      <img src={article.article_img_url} />
      <p>{article.body}</p>
      <CommentList />
    </>
  );
}

export default ArticlePage;
