import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPost } from '../../__mock__/post';
import {
  Typography,
  Container,
  Card,
  Stack,
  Grid,
  Box,
  CardMedia,
} from '@mui/material';

import { styled } from '@mui/material/styles';

const CoverImgStyle = styled('img')({
  top: 0,
  width: '500',
  height: '450',
  rowHeight: 200,
  objectFit: 'cover',
  position: 'relative',
});

const Post = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');

  useEffect(() => {
    getPost(id).then((data) => {
      setTitle(data.title);
      setContent(data.content);
      setCoverImage(data.coverImage);
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
        <CardMedia component="img" height="500" image={coverImage} />{' '}
      </Stack>
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
