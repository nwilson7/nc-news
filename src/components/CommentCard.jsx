import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function CommentCard(prop) {
  const { comment } = prop;
  return (
    <List
      sx={{
        maxWidth: "100%",
        bgcolor: "background.paper",
      }}
    >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            sx={{
              width: 100,
              justifyContent: "center",
              margin: 1,
              fontSize: 10,
            }}
          >
            {comment.author}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography variant="body2">{comment.body}</Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
export default CommentCard;
