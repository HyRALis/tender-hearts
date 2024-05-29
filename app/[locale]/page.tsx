'use client';
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../Shared/components/LanguageSwitcher';
import { useParams } from 'next/navigation';
import { grey } from '@mui/material/colors';
import { ReactNode } from 'react';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import Link from 'next/link';
import { DemoCard } from '../LandingPageUi/DemoCard';

export default function Index() {
  const t = useTranslations('Index');
  const { locale } = useParams<{ locale: string }>();

  return (
    <Box width={'100%'} height={'100%'} marginTop={'2rem'}>
      <Container
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant='h3'
          component='h1'
          marginBottom={'1rem'}
          width={'max-content'}
        >
          {t('title')}
        </Typography>
        <Typography
          variant='h5'
          component='h2'
          marginBottom={'3rem'}
          width={'max-content'}
        >
          {t('demo_page')}
        </Typography>
        <Box marginBottom={'2rem'}>
          <LanguageSwitcher />
        </Box>
        <Grid
          container
          width={'100%'}
          height={'100%'}
          spacing={{ xs: 8 }}
          columns={{ xs: 2 }}
        >
          <DemoCard text={t('admin')} link={`/${locale}/admin/dashboard`}>
            <AdminPanelSettingsIcon
              style={{ marginTop: '1.2rem', fontSize: '3rem' }}
            />
          </DemoCard>
          <DemoCard text={t('donor')} link={`/${locale}/donor/dashboard`}>
            <VolunteerActivismIcon
              style={{ marginTop: '1.2rem', fontSize: '3rem' }}
            />
          </DemoCard>
          <DemoCard
            text={t('requester')}
            link={`/${locale}/requester/dashboard`}
          >
            <RequestPageIcon
              style={{ marginTop: '1.2rem', fontSize: '3rem' }}
            />
          </DemoCard>
          <DemoCard text={t('reviewer')} link={`/${locale}/reviewer/dashboard`}>
            <TrackChangesIcon
              style={{ marginTop: '1.2rem', fontSize: '3rem' }}
            />
          </DemoCard>
        </Grid>
      </Container>
    </Box>
  );
}
