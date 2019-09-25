import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createComment } from "../actions/commentActions";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DoneIcon from "@material-ui/icons/Done";

class CommentForm extends Component {
  componentStyles = {
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    typography: {
      fontSize: "20px",
      textAlign: "center",
      marginTop: "5px"
    },
    textField: {
      marginLeft: "auto",
      marginRight: "auto"
    },
    button: {
      marginLeft: "auto",
      marginRight: "8px"
    }
  };
  state = {
    name: "",
    title: "",
    comment: ""
  };
  handleOnChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleOnSubmit = e => {
    e.preventDefault();
    const comment = {
      name: this.state.name,
      email: this.state.title,
      body: this.state.comment,
      postId: this.props.postNumber
    };
    this.props.createComment(comment, this.props.postNumber);
  };
  render() {
    console.log(this.props.postNumber);
    return (
      <div>
        <Typography style={this.componentStyles.typography}>
          Your comment
        </Typography>
        <form
          style={this.componentStyles.container}
          autoComplete="off"
          onSubmit={this.handleOnSubmit}
        >
          <TextField
            id="name"
            label="Name"
            height="50%"
            placeholder="Type your name"
            style={this.componentStyles.textField}
            margin="normal"
            variant="outlined"
            onChange={this.handleOnChange}
            value={this.state.name}
          />
          <TextField
            id="title"
            label="Title"
            placeholder="Type comment title"
            style={this.componentStyles.textField}
            margin="normal"
            variant="outlined"
            value={this.state.title}
            onChange={this.handleOnChange}
          />
          <TextField
            id="comment"
            label="Comment"
            placeholder="Type your comment"
            variant="outlined"
            style={{ margin: 5 }}
            fullWidth
            value={this.state.comment}
            onChange={this.handleOnChange}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={this.componentStyles.button}
          >
            SEND <DoneIcon style={this.componentStyles.rightIcon} />
          </Button>
        </form>
      </div>
    );
  }
}
CommentForm.propTypes = {
  createComment: PropTypes.func.isRequired
};
export default connect(
  null,
  { createComment }
)(CommentForm);
