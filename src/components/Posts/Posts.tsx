import React, { useState, useEffect } from 'react';
import { getPosts } from '../../__mock__/post';
import { findPost } from '../../__mock__/post';
// material
import { Grid, Container, Stack, Typography } from '@mui/material';
import BlogPostCard from '../../sections/blog/BlogPostCard';
import BlogSearch from '../../sections/blog/BlogSearch';

const Posts = () => {
  const [posts, setPosts] = useState<
    { id: number; title: string; coverImage: string; createdDate: string }[]
  >([]);

  function searchPost(text: string) {
    findPost(text).then((data) => {
      setPosts(data);
    });
  }

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
      >
        <BlogSearch findPosts={searchPost} />
      </Stack>

      <Grid container spacing={3}>
        {posts.map((post) => (
          <BlogPostCard {...post} key={post.id} />
        ))}
      </Grid>
    </Container>
  );
};

export default Posts;
