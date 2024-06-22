import { FC } from 'react';
import { colors, Paper, Typography } from '@mui/material';
import { FlexBox } from '@/app/_lib/shared/components/ui/primitives/FlexBox';
import { BORDER_RADIUS, COLORS, PADDING } from '@/app/_lib/shared/utils/consts';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import BarChartIcon from '@mui/icons-material/BarChart';
import { grey } from '@mui/material/colors';

interface ImportantCardProps {
  variant: 'primary' | 'secondary' | 'white';
  value: string;
  title: string;
}

export const ImportantCard: FC<ImportantCardProps> = ({
  variant,
  value,
  title,
}) => {
  return (
    <Paper
      sx={{
        width: '100%',
        height: '100%',
        borderRadius: BORDER_RADIUS,
        flexGrow: 1,
        padding: PADDING,
        backgroundColor:
          variant === 'primary'
            ? COLORS.PRIMARY_LIGHT
            : variant === 'secondary'
            ? COLORS.ACCENT
            : 'white',
      }}
      elevation={6}
    >
      <FlexBox flexDirection={'column'} gap={'0.8rem'}>
        <FlexBox>
          <FlexBox
            justifyContent={'center'}
            alignItems={'center'}
            width={'45px'}
            height={'45px'}
            sx={{
              backgroundColor: 'white',
              borderRadius: BORDER_RADIUS,
              color:
                variant === 'primary' ? COLORS.ACCENT : COLORS.PRIMARY_LIGHT,
            }}
          >
            {variant === 'primary' ? <DonutLargeIcon /> : <BarChartIcon />}
          </FlexBox>
        </FlexBox>
        <Typography
          component={'p'}
          fontSize={'1.5rem'}
          fontWeight={'bold'}
          textTransform={'capitalize'}
          color={'white'}
        >
          {value}
        </Typography>
        <Typography
          component={'p'}
          fontSize={'1rem'}
          fontWeight={'bold'}
          textTransform={'capitalize'}
          color={variant === 'secondary' ? grey[800] : grey[400]}
        >
          {title}
        </Typography>
      </FlexBox>
    </Paper>
  );
};
