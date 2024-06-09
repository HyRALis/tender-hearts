import React, { useState } from 'react';
import { RoleEnum } from '../../types/shared';
import { RoleSwitcherProps } from '../components/ui/primitives/RoleSwitcher';

export const useRole = () => {
  const [role, setRole] = useState<RoleEnum>(RoleEnum.Donor);

  const onRoleChange = React.useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>, newRole: RoleEnum) => {
      setRole((prevRole) => newRole);
    },
    []
  );

  return { role, onRoleChange } as RoleSwitcherProps;
};
