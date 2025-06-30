import { FC, ReactNode, useState } from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Typography, Collapse } from "@mui/material";
//import MuiLink from '@mui/material/Link';
import NextLink from 'next/link';
// icons
import InfoIcon from '@mui/icons-material/InfoOutline';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import HomeIcon from '@mui/icons-material/Home'
import MenuGroupIcon from '@mui/icons-material/GridViewRounded'

export default function NavMenu() {
  async function logoutAsync() {
    // to call server action to logout.
    alert('登出未實作。')
  }

  return (
    <Box sx={{ overflow: 'auto' }}>
      <Divider textAlign="left">
        <Box component="span" typography="body2">功能選單</Box>
      </Divider>
      <List component="nav">
        <ListMenuGroup label='展示功能'>
          <ListMenuItem label='展示功能０１' href='/demo/demo001' />
          <ListMenuItem label='展示功能０２' href='/demo/demo002' />
          <ListMenuItem label='展示功能０３' href='/demo/demo003' />
          <ListMenuItem label='展示功能０４' href='/demo/demo004' />
          <ListMenuItem label='展示功能０５' href='/demo/demo005' />
          <ListMenuItem label='Lab 01' href='/lab01' />
          <ListMenuItem label='Lab 02' href='/lab02' />
          <ListMenuItem label='Counter' href='/counter' />
        </ListMenuGroup>

        <ListMenuGroup label='展示功能２'>
          <ListMenuItem label='Counter 1' href='/counter' />
          <ListMenuItem label='Fetch data 1' href='/fetch-data' />
          <ListMenuItem label='Counter 2' href='/counter' />
          <ListMenuItem label='Fetch data 2' href='/fetch-data' />
          <ListMenuItem label='Counter ' href='/counter' />
          <ListMenuItem label='Fetch data 3' href='/fetch-data' />
        </ListMenuGroup>

        <ListMenuGroup label='超多功能選單'>
          <ListMenuItem label='Counter 1' href='/counter' />
          <ListMenuItem label='Fetch data 1' href='/fetch-data' />
          <ListMenuItem label='Counter 2' href='/counter' />
          <ListMenuItem label='Fetch data 2' href='/fetch-data' />
          <ListMenuItem label='Counter ' href='/counter' />
          <ListMenuItem label='Fetch data 3' href='/fetch-data' />
          <ListMenuItem label='Counter 1' href='/counter' />
          <ListMenuItem label='Fetch data 1' href='/fetch-data' />
          <ListMenuItem label='Counter 2' href='/counter' />
          <ListMenuItem label='Fetch data 2' href='/fetch-data' />
          <ListMenuItem label='Counter ' href='/counter' />
          <ListMenuItem label='Fetch data 3' href='/fetch-data' />
          <ListMenuItem label='Counter 1' href='/counter' />
          <ListMenuItem label='Fetch data 1' href='/fetch-data' />
          <ListMenuItem label='Counter 2' href='/counter' />
          <ListMenuItem label='Fetch data 2' href='/fetch-data' />
          <ListMenuItem label='Counter ' href='/counter' />
          <ListMenuItem label='Fetch data 3' href='/fetch-data' />
        </ListMenuGroup>
      </List>
      <Divider textAlign="left">
        <Box component="span" typography="body2">系統</Box>
      </Divider>
      <List component="nav">
        <ListItemButton component={NextLink} href="/">
          <ListItemIcon children={<HomeIcon color='primary' />} />
          <ListItemText primary='首頁' />
        </ListItemButton>
        <ListItemButton component={NextLink} href="/login">
          <ListItemIcon children={<LoginIcon color='primary' />} />
          <ListItemText primary='登入' />
        </ListItemButton>
        <ListItemButton onClick={async () => await logoutAsync()}>
          <ListItemIcon children={<LogoutIcon color='primary' />} />
          <ListItemText primary='登出' />
        </ListItemButton>
        <ListItemButton component={NextLink} href="/about">
          <ListItemIcon children={<InfoIcon color='primary' />} />
          <ListItemText primary='關於我們' />
        </ListItemButton>
      </List>
    </Box>
  )
}

//-----------------------------------------------------------------------------
const ListMenuGroup: FC<{ label: string, children: ReactNode }> = (props) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <ListItemButton onClick={() => setOpen(f => !f)}>
        <ListItemIcon children={<MenuGroupIcon color='primary' />} />
        <ListItemText primary={props.label} />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.children}
          {/*
          <ListItemButton sx={{ pl: 4 }} component={NextLink} href='/demo/demo002'  >
            <ListItemText primary='Demo002' />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} component={NextLink} href='/about'  >
            <ListItemText primary='關於我們' />
          </ListItemButton>          
          */}
        </List>
      </Collapse>
    </>
  )
}

/*
  <ListItemButton sx={{ pl: 4 }} component={NextLink} href={props.href}  >
    <ListItemText primary={props.label} />
  </ListItemButton>
*/
const ListMenuItem: FC<{
  label: string,
  href: string
}> = (props) => (
  <ListItemButton sx={{ pl: 4 }} component={NextLink} href={props.href}  >
    <ListItemText primary={props.label} />
  </ListItemButton>
)