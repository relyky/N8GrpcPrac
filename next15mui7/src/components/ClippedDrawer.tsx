"use client"
import { useReducer } from 'react';
import {
  AppBar,
  Box,
  Drawer,
  Toolbar,
  Typography,
  IconButton,
  styled,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ThemeSwitch from './ThemeSwitch';
import Footer from './Footer'

// icons
import MenuIcon from '@mui/icons-material/Menu';
import NavMenu from './NavMenu';

const drawerWidth = 240;

interface Props {
  children: React.ReactNode;
}

export default function ClippedDrawer(props: Props) {
  const theme = useTheme();
  const matchUp = useMediaQuery(theme.breakpoints.up('sm'));
  const [f_openDrawer, toggleDrawer] = useReducer((f: boolean, _: void) => !f, true);

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => toggleDrawer()}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Clipped drawer
          </Typography>

          <ThemeSwitch />
        </Toolbar>
      </AppBar>
      <Drawer
        variant={matchUp ? "persistent" : "temporary"}
        anchor='left'
        open={f_openDrawer}
        onClose={() => toggleDrawer()}
        aria-hidden={false}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box'
          },
        }}
        slotProps={{
          root: {
            keepMounted: true, // Better open performance on mobile.
          },
        }}
      >
        <Toolbar />
        <NavMenu />
      </Drawer>
      <Main open={f_openDrawer} matchUp={matchUp} >
        <Toolbar />
        <Box component="article" sx={{ minHeight: 'calc(100vh - 110px)' }}>
          {props.children}
        </Box>
        <Footer />
      </Main>
    </Box>
  );
}

//-----------------------------------------------------------------------------

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' && prop !== 'matchUp' })<{
  open: boolean;
  matchUp: boolean;
}>(({ theme, open, matchUp }) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: open
      ? theme.transitions.easing.easeOut
      : theme.transitions.easing.sharp,
    duration: open
      ? theme.transitions.duration.enteringScreen
      : theme.transitions.duration.leavingScreen,
  }),
  marginLeft: open || !matchUp ? 0 : `-${drawerWidth}px`,
}));
