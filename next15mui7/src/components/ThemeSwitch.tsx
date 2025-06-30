"use client"
import { useMemo, useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SystemModeIcon from '@mui/icons-material/Brightness4';

export default function MenuAppBar() {
  const { mode, setMode } = useColorScheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null)
  };

  const handleChange = (value: string) => {
    setMode(value as any)
    setAnchorEl(null)
  }

  const ModeIcon = useMemo(() => {
    return mode === 'light' ? LightModeIcon
      : mode === 'dark' ? DarkModeIcon
        : SystemModeIcon
  }, [mode])

  if (!mode) return null;

  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <ModeIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleChange('system')}>System</MenuItem>
        <MenuItem onClick={() => handleChange('light')}>Light</MenuItem>
        <MenuItem onClick={() => handleChange('dark')}>Dark</MenuItem>
      </Menu>
    </div>
  );
}
