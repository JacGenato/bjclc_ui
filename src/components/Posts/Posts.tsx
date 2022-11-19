import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { getPosts } from '../../__mock__/post';
// material
import {
  Grid,
  Button,
  Container,
  Stack,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import BlogPostCard from '../../sections/blog/BlogPostCard';

const Posts = () => {
  const [posts, setPosts] = useState<
    { id: number; title: string; coverImage: string; createdDate: string }[]
  >([]);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4" gutterBottom>
          Blog
        </Typography>
      </Stack>

      <Stack
        mb={5}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      ></Stack>

      <Grid container spacing={3}>
        {posts.map((post) => (
          <BlogPostCard {...post} key={post.id} />
        ))}
      </Grid>
    </Container>
  );
};

export default Posts;
