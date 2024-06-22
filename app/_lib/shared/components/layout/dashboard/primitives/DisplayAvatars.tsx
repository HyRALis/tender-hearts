import React, { FC } from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Paper, Typography, Link as LinkMui } from '@mui/material';
import { FlexBox } from '../../../ui/primitives/FlexBox';
import Link from 'next/link';
import { BORDER_RADIUS, COLORS, PADDING } from '@/app/_lib/shared/utils/consts';

type TAvatar = {
  name: string;
  src: string;
};

type THyperlink = {
  label: string;
  redirect: string;
};

export interface DisplayAvatarsProps {
  title: string;
  avatars: TAvatar[];
  hyperlink: THyperlink;
}

export const DisplayAvatars: FC<DisplayAvatarsProps> = ({
  title,
  avatars,
  hyperlink,
}) => {
  return (
    <Paper
      sx={{
        padding: PADDING,
        borderRadius: BORDER_RADIUS,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
      }}
    >
      <FlexBox justifyContent={'space-between'} alignItems={'center'}>
        <Typography
          component={'p'}
          variant='body1'
          fontWeight={'bold'}
          color={COLORS.PRIMARY}
        >
          {title}
        </Typography>
        <Link href={hyperlink.redirect}>
          <LinkMui component={'p'}>{hyperlink.label}</LinkMui>
        </Link>
      </FlexBox>
      <AvatarGroup max={5}>
        {avatars.map(({ name, src }) => (
          <Avatar key={`${name}_${src}`} alt={name} src={src} />
        ))}
      </AvatarGroup>
    </Paper>
  );
};
