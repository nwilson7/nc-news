import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../api";
import CommentCard from "./CommentCard";
import "../css modules/comment-list.css";
import Divider from "@mui/material/Divider";

function CommentList() {
  const [comments, setComments] = useState([]);
  const { articleId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getComments(articleId).then(({ data }) => {
      setComments(data.comments);
      setIsLoading(false);
    });
  }, []);
  if (isLoading === true) {
    return <p>Loading</p>;
  }
  return (
    <>
      <Divider />
      <h2>Comments</h2>
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
