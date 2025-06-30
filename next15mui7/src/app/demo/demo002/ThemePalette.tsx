import { Box, Button, capitalize, Paper, Stack, Typography, useTheme, Link as MuiLink } from "@mui/material";
import { FC } from "react";

export default function ThemePalette() {
  const { palette } = useTheme();

  return (
    <div>
      <Paper sx={{ p: 2 }}>
        <Box component="p">
          參考文件：@mui7 <MuiLink href="https://mui.com/material-ui/customization/palette/" target='_blank'>Palette</MuiLink>、<MuiLink href="https://mui.com/material-ui/customization/color/" target='_blank'>Color</MuiLink> 與 <MuiLink href="https://mui.com/material-ui/customization/default-theme/" target='_blank'>Default theme viewer</MuiLink>。
        </Box>

        <Stack direction="row" sx={{ gap: 8, mb: 2 }} flexWrap="wrap">
          <ColorShowcase color="primary" />
          <ColorShowcase color="secondary" />
          <ColorShowcase color="info" />
          <ColorShowcase color="success" />
          <ColorShowcase color="warning" />
          <ColorShowcase color="error" />
        </Stack>

        <Typography variant="h6" gutterBottom>Common</Typography>
        <Stack direction="row" sx={{ gap: 1, mb: 2 }} flexWrap="wrap">
          <Stack sx={{ alignItems: "center", border: 'solid 1px var(--mui-palette-common-white)' }}>
            <Typography variant="body1">black</Typography>
            <Box sx={{ bgcolor: 'common.black', width: 80, height: 40 }} />
          </Stack>
          <Stack sx={{ alignItems: "center", border: 'solid 1px var(--mui-palette-common-black)' }}>
            <Typography variant="body1">white</Typography>
            <Box sx={{ bgcolor: `common.white`, width: 80, height: 40 }} />
          </Stack>
        </Stack>

        <Typography variant="h6" gutterBottom>Background</Typography>
        <Stack direction="row" sx={{ gap: 1, mb: 2 }} flexWrap="wrap">
          <Stack sx={{ alignItems: "center", border: 'solid 1px var(--mui-palette-common-black)' }}>
            <Typography variant="body1">default</Typography>
            <Box sx={{ bgcolor: `background.default`, width: 80, height: 40 }} />
          </Stack>
          <Stack sx={{ alignItems: "center", border: 'solid 1px var(--mui-palette-common-black)' }}>
            <Typography variant="body1">paper</Typography>
            <Box sx={{ bgcolor: `background.paper`, width: 80, height: 40 }} />
          </Stack>
        </Stack>

        <Typography variant="h6" gutterBottom>Grey</Typography>
        <Stack direction="row" flexWrap="wrap" sx={{ mb: 2, border: 'solid 1px var(--mui-palette-common-black)' }}>
          {Object.keys(palette.grey).map((v, i) => (
            <Stack key={i} sx={{ alignItems: "center" }}>
              <Typography variant="body1">{v}</Typography>
              <Box sx={{ bgcolor: `grey.${v}`, width: 80, height: 40 }} />
            </Stack>
          ))}
        </Stack>
      </Paper>

      <pre>{JSON.stringify(palette, null, 2)}</pre>
    </div>

  )
}

//-----------------------------------------------------------------------------
const ColorShowcase: FC<{
  color: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
}> = (props) => {
  return (
    <Stack sx={{ gap: 2, alignItems: 'center' }}>
      <Button variant="contained" color={props.color} size='large'>
        {capitalize(props.color)}<br />
      </Button>
      <Stack direction="row" sx={{ gap: 1 }}>
        <Stack sx={{ alignItems: 'center' }}>
          <Typography variant="body2">light</Typography>
          <Box sx={{ bgcolor: `${props.color}.light`, width: 40, height: 20 }} />
        </Stack>
        <Stack sx={{ alignItems: 'center' }}>
          <Typography variant="body2">main</Typography>
          <Box sx={{ bgcolor: `${props.color}.main`, width: 40, height: 20 }} />
        </Stack>
        <Stack sx={{ alignItems: 'center' }}>
          <Typography variant="body2">dark</Typography>
          <Box sx={{ bgcolor: `${props.color}.dark`, width: 40, height: 20 }} />
        </Stack>
      </Stack>
    </Stack>
  );
}
