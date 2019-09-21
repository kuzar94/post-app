import Card from "./Card";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: "40px"
  }
}));

export default function Table() {
  const classes = useStyles();
  const numberOfPosts = 2;
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        // Comment data work as posts
        `https://jsonplaceholder.typicode.com/comments?_start=0&_limit=${numberOfPosts}`
      );
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <Box className={classes.root}>
      <ul>
        {Object.keys(data).map(postNumber => {
          if (postNumber === "hits") {
            return <li key={5}>LOADING</li>;
          } else {
            return (
              <li key={postNumber}>
                <Card postData={data[postNumber]} />
              </li>
            );
          }
        })}
      </ul>
    </Box>
  );
}
