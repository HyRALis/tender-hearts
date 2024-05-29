import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import Link from 'next/link';
import { ReactNode } from 'react';

export const DemoCard = ({
  text,
  children,
  link,
}: {
  link: string;
  text: string;
  children?: ReactNode;
}) => {
  return (
    <Grid item xs={1}>
      <Link href={link}>
        <Card
          variant='elevation'
          style={{
            background: grey[800],
            color: grey[50],
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
            cursor: 'pointer',
          }}
        >
          <CardContent
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              flexDirection: 'column',
              fontSize: '40px',
            }}
          >
            <Typography variant='h5' component='h3'>
              {text}
            </Typography>
            <Box
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '1rem',
              }}
            >
              {children}
            </Box>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};
