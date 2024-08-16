import IconButton from "@mui/material/IconButton";
import ArrowCircleDownSharpIcon from "@mui/icons-material/ArrowCircleDownSharp";
import ArrowCircleUpSharpIcon from "@mui/icons-material/ArrowCircleUpSharp";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { postVote } from "../api";

function Votes({ article }) {
  const [voteCount, setVoteCount] = useState(article.votes);
  const { articleId } = useParams();

  function handleUpvote() {
    setVoteCount((currVote) => {
      return currVote + 1;
    });

    postVote(articleId, 1)
      .then((result) => {})
      .catch((error) => {
        console.log(error);
        setVoteCount((currVote) => {
          return currVote - 1;
        });
      });
  }

  function handleDownvote() {
    setVoteCount((currVote) => {
      return currVote - 1;
    });

    postVote(articleId, -1)
      .then((result) => {
        console.log("done");
      })
      .catch((error) => {
        console.log(error);
        setVoteCount(voteCount);
      });
  }
  return (
    <p>
      Votes: {voteCount}
      <IconButton aria-label="upvote" onClick={handleUpvote}>
        <ArrowCircleUpSharpIcon />
      </IconButton>
      <IconButton aria-label="downvote" onClick={handleDownvote}>
        <ArrowCircleDownSharpIcon />
      </IconButton>
    </p>
  );
}

export default Votes;
