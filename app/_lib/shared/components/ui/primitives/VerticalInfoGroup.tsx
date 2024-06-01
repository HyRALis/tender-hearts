import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { COLORS } from '../../../utils/consts';
import { FC } from 'react';

export type TAlignment = 'left' | 'right' | 'center';

export interface VerticalInfoGroupProps {
  title: string;
  value: string | number;
  alignment?: TAlignment;
}

export const VerticalInfoGroup: FC<VerticalInfoGroupProps> = ({
  title,
  value,
  alignment = 'center',
}) => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      flexDirection={'column'}
      justifyContent={alignment}
      flexShrink={1}
      whiteSpace={'pre-wrap'}
    >
      <Typography
        component={'p'}
        fontSize={'0.75rem'}
        fontWeight={'bold'}
        color={grey['400']}
        textTransform={'capitalize'}
        textAlign={alignment}
      >
        {title}
      </Typography>
      <Typography
        component={'p'}
        fontSize={'1.2rem'}
        fontWeight={'bold'}
        color={COLORS.ACCENT}
        textAlign={'center'}
      >
        {value}
      </Typography>
    </Box>
  );
};
