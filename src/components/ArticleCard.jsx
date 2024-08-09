import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

function ArticleCard(prop) {
  const { article } = prop;

  return (
    <Link
      to={`/articles/${article.article_id}`}
      style={{ textDecoration: "none", display: "block", height: "100%" }}
    >
      <Card
        sx={{
          width: 345,
        }}
      >
        <CardActionArea
          sx={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <CardMedia
            component="img"
            height="140"
            image={article.article_img_url}
            alt={article.title}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="div">
              {article.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

export default ArticleCard;
