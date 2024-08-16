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

function getSortedArticlesByDate() {
  return api.get("/articles").then(({ data }) => {
    const sortedArticles = data.articles.sort((a, b) => new Date(b.created_at));
    return sortedArticles;
  });
}

function getCategories() {
  return api.get("/topics").then((topics) => {
    return topics;
  });
}

function getComments(article_id) {
  return api.get(`/articles/${article_id}/comments`).then((comments) => {
    return comments;
  });
}

function postVote(article_id, increment) {
  return api
    .patch(`/articless/${article_id}`, {
      inc_votes: increment,
    })
    .then((response) => {
      return response.data;
    });
}

function postComment(article_id, commentData) {
  return api
    .post(`/articles/${article_id}/comments`, commentData)
    .then((response) => {
      return response;
    });
}

export {
  getArticles,
  getCategories,
  getArticlesById,
  getComments,
  getSortedArticlesByDate,
  postVote as postVote,
  postComment,
};
