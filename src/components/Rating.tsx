import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating({rating}:{rating:number}) {
  const [value, setValue] = React.useState<number | null>(rating);

  return (
    <Box sx={{ '& > legend': { my: 2 } }}>
      
      <Rating sx={{my:"4px"}} name="read-only" value={value} readOnly />
      
    </Box>
  );
}
