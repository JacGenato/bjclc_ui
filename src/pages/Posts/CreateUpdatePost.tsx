import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';

import { createPost } from '../../__mock__/post';
import { TextField, Container, Button, Stack, Typography } from '@mui/material';

export default function CreateUpdatePost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');

  const onSubmit = (e: any) => {
    e.preventDefault();
    let post = {
      title: title,
      description: description,
      content: content,
      coverImage: '/static/mock-images/covers/cover_4.jpg',
    };
    createPost(post);
  };

  const handleChange = (e: any) => {
    console.log(e.target.value);
    if (e.target.name == 'title') {
      setTitle(e.target.value);
    } else if (e.target.name == 'description') {
      setDescription(e.target.value);
    } else if (e.target.name == 'content') {
      setContent(e.target.value);
    }
  };

  return (
    <Container>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '500' },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h4" gutterBottom>
          New Post
        </Typography>
        <div>
          <TextField
            fullWidth
            id="outlined-textarea"
            label="Title"
            name="title"
            placeholder="Title"
            multiline
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            fullWidth
            id="outlined-textarea"
            label="Description"
            name="description"
            placeholder="Description"
            multiline
            onChange={handleChange}
          />
        </div>{' '}
        <div>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="Content"
            name="content"
            multiline
            rows={10}
            onChange={handleChange}
          />
        </div>
        <div>
          <Button variant="contained" component="label">
            Upload Image Cover
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </div>
        <div>
          <Stack direction="row" justifyContent="flex-end" mb={5}>
            <Button variant="contained" onClick={onSubmit}>
              Create
            </Button>
          </Stack>
        </div>
      </Box>
    </Container>
  );
}
