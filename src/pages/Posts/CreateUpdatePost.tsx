import * as React from 'react';
import Box from '@mui/material/Box';

import { TextField, Container, Button, Stack, Typography } from '@mui/material';

export default function CreateUpdatePost() {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
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
            placeholder="Title"
            multiline
          />
        </div>
        <div>
          <TextField
            fullWidth
            id="outlined-textarea"
            label="Description"
            placeholder="Description"
            multiline
          />
        </div>{' '}
        <div>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="Content"
            multiline
            rows={10}
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
            <Button variant="contained">Create</Button>
          </Stack>
        </div>
      </Box>
    </Container>
  );
}
