import { DonationHistoryTable } from '@/app/_lib/shared/components/donation-history/DonationHistoryTable';
import { LineChart } from '@/app/_lib/shared/components/layout/dashboard/charts/LineChart';
import { DisplayAvatars } from '@/app/_lib/shared/components/layout/dashboard/primitives/DisplayAvatars';
import { ImportantCard } from '@/app/_lib/shared/components/layout/dashboard/primitives/ImportantCard';
import { StatsList } from '@/app/_lib/shared/components/layout/dashboard/primitives/StatsList';
import { FlexBox } from '@/app/_lib/shared/components/ui/primitives/FlexBox';
import { DisplayAvatarsMock } from '@/app/_lib/shared/mocks/DispayAvatarsMock';
import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';

const Dashboard = () => {
  const t = useTranslations('Admin');
  return (
    <FlexBox flexDirection={'column'} width={'100%'} gap={'1.5rem'}>
      <FlexBox width={'100%'} gap={'1.5rem'}>
        <FlexBox width={'50%'}>
          <LineChart />
        </FlexBox>
        <FlexBox width={'50%'} gap={'0.8rem'}>
          <FlexBox flexDirection={'column'} flexGrow={'1'} gap={'0.8rem'}>
            <FlexBox width={'100%'} gap={'0.8rem'} flexGrow={1}>
              <ImportantCard
                variant='primary'
                value='$10000'
                title={t('monthly_donations')}
              />
              <ImportantCard
                variant='secondary'
                value='$2000'
                title={t('weekly_donations')}
              />
            </FlexBox>
            <DisplayAvatars {...DisplayAvatarsMock} />
          </FlexBox>
          <StatsList />
        </FlexBox>
      </FlexBox>

      <DonationHistoryTable />
    </FlexBox>
  );
};

export default Dashboard;
