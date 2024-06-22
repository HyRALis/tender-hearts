import React, {
  cloneElement,
  FC,
  MouseEvent,
  PropsWithChildren,
  ReactElement,
  useMemo,
  useState,
} from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CustomizedMenu } from '../../../ui/primitives/CustomizedMenu';
import { useTranslations } from 'next-intl';

export interface StyledMenuProps extends PropsWithChildren {
  onChange: (value: string) => void;
  options: { value: string; label: ReactElement }[];
}

export const StyledMenu: FC<StyledMenuProps> = ({
  onChange,
  options,
  children,
}) => {
  const t = useTranslations('Shared');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const memoizedChildProps = useMemo(
    () => ({
      'aria-controls': open ? 'customized-menu' : undefined,
      'aria-haspopup': 'true',
      'aria-expanded': open ? 'true' : undefined,
      variant: 'contained',
      disableElevation: true,
    }),
    [open]
  );

  return (
    <div>
      {children ? (
        cloneElement(children as ReactElement, {
          ...memoizedChildProps,
          onClick: handleClick,
        })
      ) : (
        <Button
          aria-controls={open ? 'customized-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          variant='contained'
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
          Options
        </Button>
      )}
      <CustomizedMenu
        id='customized-menu'
        MenuListProps={{
          'aria-labelledby': 'customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map(({ value, label }) => (
          <MenuItem
            key={value}
            onClick={() => {
              onChange(value);
              handleClose();
            }}
            sx={{
              textTransform: 'capitalize',
            }}
            disableRipple
          >
            {label}
          </MenuItem>
        ))}
      </CustomizedMenu>
    </div>
  );
};
