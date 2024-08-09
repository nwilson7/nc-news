import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-api-0bcj.onrender.com/api",
});

function getArticles() {
  return api.get("/articles").then((articles) => {
    return articles;
  });
}
function getArticlesById(article_id) {
  return api.get(`/articles/${article_id}`).then((article) => {
    return article;
  });
}

function getCategories() {
  return api.get("/topics").then((topics) => {
    return topics;
  });
}

function getComments() {
  return api.get("/articles/:article_id/comments").then((comments) => {
    return comments;
  });
}
export { getArticles, getCategories, getArticlesById, getComments };
