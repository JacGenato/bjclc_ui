import React, { useState, useEffect } from 'react';
import { getPost } from '../../__mock__/post';
import { Typography, Container, Card, Stack, Grid, Box } from '@mui/material';

const Post = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    getPost().then((data) => {
      setTitle(data.title);
      setContent(data.content);
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
          {title}
        </Typography>
      </Stack>

      <Grid item xs={12} md={6} lg={8}>
        <Card>
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            <Typography variant="subtitle1" gutterBottom>
              {content}
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Container>
  );
};

export default Post;
