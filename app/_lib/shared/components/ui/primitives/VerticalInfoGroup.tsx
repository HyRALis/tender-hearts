import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { COLORS } from '../../../utils/consts';
import { FC } from 'react';
import { TAlignmentText } from '@/app/_lib/types/shared';
import { convertAlignmentMap } from '../../../utils/maps';

export interface VerticalInfoGroupProps {
  title: string;
  value: string | number;
  alignment?: TAlignmentText;
}

export const VerticalInfoGroup: FC<VerticalInfoGroupProps> = ({
  title,
  value,
  alignment = 'center',
}) => {
  return (
    <Box
      display={'flex'}
      alignItems={convertAlignmentMap[alignment]}
      flexDirection={'column'}
      flexShrink={1}
      whiteSpace={'pre-wrap'}
    >
      <Typography
        component={'p'}
        fontSize={'0.75rem'}
        fontWeight={'bold'}
        color={COLORS.NATURAL_TWO}
        textTransform={'capitalize'}
        textAlign={alignment}
      >
        {title}
      </Typography>
      <Typography
        component={'p'}
        fontSize={'1.2rem'}
        fontWeight={'bold'}
        color={COLORS.NATURAL}
        textAlign={alignment}
      >
        {value}
      </Typography>
    </Box>
  );
};
