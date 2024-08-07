import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-api-0bcj.onrender.com/api",
});

function getArticles() {
  return api.get("/articles").then((articles) => {
    return articles;
  });
}

function getCategories() {
  return api.get("/topics").then((topics) => {
    return topics;
  });
}
export { getArticles, getCategories };
