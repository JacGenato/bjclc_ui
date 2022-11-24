import React, { Component } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';

import Button from '@mui/material/Button';

interface Props {
  findPosts: Function;
}

export class BlogSearch extends Component<Props, any> {
  state = {
    text: '',
  };

  onSubmit = (e: any) => {
    e.preventDefault();
    if (this.state.text !== '') {
      this.props.findPosts(this.state.text);
    }
  };

  onChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          name="text"
          placeholder="Search Blogs"
          onChange={this.onChange}
          value={this.state.text}
        />

        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        <Button variant="contained" onClick={this.onSubmit}>
          Search
        </Button>
      </Paper>
    );
  }
}

export default BlogSearch;
