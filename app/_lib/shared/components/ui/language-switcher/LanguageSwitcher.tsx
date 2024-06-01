'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import { useParams, usePathname } from 'next/navigation';
import { locales } from '@/i18n';
import { grey } from '@mui/material/colors';

const LanguageSwitcher: React.FC = () => {
  const { push } = useRouter();
  const { locale } = useParams<{ locale: string }>();
  const pathname = usePathname();
  const t = useTranslations('Shared');

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedLocale = event.target.value as string;
    const path = pathname.split(`/${locale}`)[1];

    push(`/${selectedLocale}${path}`);
  };

  return (
    <FormControl variant='outlined' size='small'>
      <InputLabel id='language-switcher-label' sx={{ color: grey[300] }}>
        {t('language')}
      </InputLabel>
      <Select
        labelId='language-switcher-label'
        value={locale}
        onChange={handleChange}
        label={t('language')}
        sx={{ color: 'white' }}
      >
        {locales?.map((loc) => (
          <MenuItem key={loc} value={loc}>
            {t(loc)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSwitcher;
