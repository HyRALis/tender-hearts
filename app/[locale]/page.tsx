import { Box, Container, Grid, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../_lib/shared/components/ui/language-switcher/LanguageSwitcher';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import { DemoCard } from '../_lib/landing/components/ui/DemoCard';

const Index = ({ params }: { params: { locale: string } }) => {
  const t = useTranslations('Index');

  return (
    <Box width={'100%'} height={'100%'} marginTop={'2rem'}>
      <Container
        sx={{
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
          <DemoCard
            text={t('admin')}
            link={`/${params.locale}/admin/dashboard`}
          >
            <AdminPanelSettingsIcon
              sx={{ marginTop: '1.2rem', fontSize: '3rem' }}
            />
          </DemoCard>
          <DemoCard
            text={t('donor')}
            link={`/${params.locale}/donor/dashboard`}
          >
            <VolunteerActivismIcon
              sx={{ marginTop: '1.2rem', fontSize: '3rem' }}
            />
          </DemoCard>
          <DemoCard
            text={t('requester')}
            link={`/${params.locale}/requester/dashboard`}
          >
            <RequestPageIcon sx={{ marginTop: '1.2rem', fontSize: '3rem' }} />
          </DemoCard>
          <DemoCard
            text={t('reviewer')}
            link={`/${params.locale}/reviewer/dashboard`}
          >
            <TrackChangesIcon sx={{ marginTop: '1.2rem', fontSize: '3rem' }} />
          </DemoCard>
        </Grid>
      </Container>
    </Box>
  );
};

export default Index;
