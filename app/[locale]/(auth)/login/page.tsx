import {
  Avatar,
  Box,
  Grid,
  Link,
  Paper,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { ProviderLoginButtons } from './_components/ProviderLoginButtons';
import { LoginForm } from './_components/LoginForm';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { SignIn } from './_components/SignIn';
import { useTranslations } from 'next-intl';

function Copyright(props: any) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignInSide() {
  const t = useTranslations('Index');

  return (
    <Grid container component='main' sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        lg={9}
        sx={{
          backgroundImage:
            'url(https://images.pexels.com/photos/6646847/pexels-photo-6646847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: grey[50],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        lg={3}
        component={Paper}
        elevation={6}
        square
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            {t('login')}
          </Typography>
          <SignIn />
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Grid>
    </Grid>
  );
}
