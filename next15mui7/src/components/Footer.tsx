import { Box, Divider, Typography, Link as MuiLink } from "@mui/material";

export default function Footer() {
  return (
  <Box component="footer">
    <Divider variant='middle' sx={{ my: 1 }} />
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
      {'Copyright © '}
      <MuiLink color="inherit" href="https://mui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  </Box>
  )
}
