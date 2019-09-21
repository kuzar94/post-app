import React, { useState, useEffect } from "react";
import CommentList from "./CommentList";
import CommenTextField from "./CommentTextField";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: 40,
    maxWidth: 500,
    marginLeft: "auto",
    marginRight: "auto"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: "red"
  },
  avatarComment: {
    height: "30px",
    width: "30px",
    backgroundColor: "red",
    fontSize: "15px"
  },
  favouriteIcon: {
    marginLeft: "auto"
  },
  fab: {
    margin: theme.spacing(1),
    maxHeight: "30px",
    maxWidth: "30px",
    minHeight: "30px",
    minWidth: "30px",
    marginLeft: "auto"
  }
}));

function getFirstLetter(stringData) {
  return stringData.charAt(0);
}

export default function RecipeReviewCard(props) {
  const numberOfComments = 6;
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://jsonplaceholder.typicode.com/comments?_start=0&_limit=${numberOfComments}`
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [expandCommentsText, setExpandCommentsText] = useState("Show comments");
  function handleExpandClick() {
    setExpanded(!expanded);
    if (expanded) {
      setExpandCommentsText("Show comments");
    } else {
      setExpandCommentsText("Hide comments");
    }
  }
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {getFirstLetter(props.postData.name)}
          </Avatar>
        }
        action={
          <Fab aria-label="delete" className={classes.fab}>
            <DeleteIcon />
          </Fab>
        }
        title={props.postData.name}
        subheader={props.postData.email}
      />
      <CardMedia
        className={classes.media}
        image="https://via.placeholder.com/500"
        title="Some Photo"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.postData.body}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
        >
          <ExpandMoreIcon />
        </IconButton>
        <Typography className={classes.toggleComments}>
          {expandCommentsText}
        </Typography>
        <IconButton className={classes.favouriteIcon}>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded}>
        <CardContent>
          <CommentList commentData={data} />
          <CommenTextField />
        </CardContent>
      </Collapse>
    </Card>
  );
}
