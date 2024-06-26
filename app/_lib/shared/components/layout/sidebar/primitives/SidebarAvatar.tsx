import { Box } from '@mui/material';
import Image from 'next/image';
import React, { FC } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { FlexBox } from '../../../ui/primitives/FlexBox';
import { COLORS } from '@/app/_lib/shared/utils/consts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
    <FlexBox
      borderRadius={'50%'}
      width={`${baseSize + 2}px`}
      height={`${baseSize + 2}px`}
      border={`1px solid ${COLORS.ACCENT}`}
      position={'relative'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <FlexBox
        borderRadius={'50%'}
        width={`${baseSize}px`}
        height={`${baseSize}px`}
        overflow={'hidden'}
        textAlign={'center'}
        justifyContent={'center'}
        alignItems={'center'}
        color={COLORS.ACCENT}
      >
        {imageSrc ? (
          <Image
            width={50}
            height={50}
            src={imageSrc}
            alt={`${username} avatar`}
          />
        ) : (
          <AccountCircleIcon />
        )}
      </FlexBox>
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
    </FlexBox>
  );
};
