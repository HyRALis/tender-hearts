import { Box } from '@mui/material';
import Image from 'next/image';
import React, { FC } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { COLORS } from '../../../utils/consts';

export interface SidebarAvatarProps {
  username: string;
  imageSrc?: string;
}

export const SidebarAvatar: FC<SidebarAvatarProps> = ({
  username,
  imageSrc,
}) => {
  const baseSize = 40;
  return (
    <Box
      borderRadius={'50%'}
      width={`${baseSize + 2}px`}
      height={`${baseSize + 2}px`}
      border={`1px solid ${COLORS.ACCENT}`}
      position={'relative'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Box
        borderRadius={'50%'}
        width={`${baseSize}px`}
        height={`${baseSize}px`}
        overflow={'hidden'}
        textAlign={'center'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Image
          width={50}
          height={50}
          src={
            imageSrc
              ? imageSrc
              : 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
          alt={`${username} avatar`}
        />
      </Box>
      <Box
        position={'absolute'}
        top={'-2px'}
        right={'-6px'}
        borderRadius={'50%'}
        bgcolor={COLORS.ACCENT}
        border={`1px solid ${COLORS.NATURAL}`}
        color={COLORS.NATURAL}
        width={`${baseSize / (baseSize / 10) + baseSize / 10}px`}
        height={`${baseSize / (baseSize / 10) + baseSize / 10}px`}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        fontSize={'12px'}
        zIndex={10}
      >
        <ArrowUpwardIcon fontSize='inherit' />
      </Box>
    </Box>
  );
};
