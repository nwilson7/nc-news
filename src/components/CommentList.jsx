import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments, postComment } from "../api";
import CommentCard from "./CommentCard";
import "../css modules/comment-list.css";
import Divider from "@mui/material/Divider";
import { useUser } from "../Contexts/UserContext";

function CommentList() {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const { articleId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    getComments(articleId)
      .then(({ data }) => {
        setComments(data.comments);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching comments", error);
      });
  }, [articleId]);

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    if (!user) {
      alert("You must be logged in to post comment");
      return;
    }

    const newComment = {
      username: user.username,
      body: commentText,
    };
    setIsSubmitting(true);

    postComment(articleId, newComment)
      .then((response) => {
        if (response.data && response.data.body) {
          setComments((prevComments) => [response.data, ...prevComments]);
          setCommentText("");
        }
      })
      .catch((error) => {
        console.log("Error posting comment", error);
        alert("Failed to post comment");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  if (isLoading === true) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Divider />
      <h2>Comments</h2>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add a comment"
        />
        <button type="submit">Post</button>
      </form>
      <ul className="comment-list">
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <CommentCard comment={comment} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default CommentList;
