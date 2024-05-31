'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { MenuItem, Box, Menu, Button } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useParams, usePathname } from 'next/navigation';
import { locales } from '@/i18n';
import { COLORS } from '../../../utils/consts';

const LanguageSwitcherMenuVariant: React.FC = () => {
  const { push } = useRouter();
  const { locale } = useParams<{ locale: string }>();
  const pathname = usePathname();
  const t = useTranslations('Shared');

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.target as HTMLLIElement;
    if (target.attributes && target.attributes[3]) {
      changeLanguage(target.attributes[3].value);
    }
    setAnchorEl(null);
  };

  const changeLanguage = (string: string) => {
    const path = pathname.split(`/${locale}`)[1];

    push(`/${string}${path}`);
  };

  return (
    <Box>
      <Button
        aria-controls={open ? 'language-switcher-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{
          color: COLORS.NATURAL,
          textTransform: 'uppercase',
          padding: '5px',
        }}
      >
        {locale}
      </Button>
      <Menu
        aria-labelledby='language-switcher-button'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        {locales?.map((loc) => (
          <MenuItem key={loc} onClick={(e) => handleClose(e)} value={loc}>
            {t(loc)}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default LanguageSwitcherMenuVariant;
