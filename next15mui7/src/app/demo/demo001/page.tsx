import { Alert, Box, Button, Container, Typography } from "@mui/material";

export default async function Demo001Page() {


  return (
    <Container>
      <Typography variant="h3">Demo001</Typography>
      <Box typography="body1">next.js 為 SSR/MPA 網站。<br />此畫面伺服器端生成後才送下來。</Box>

      <Alert severity="info" sx={{ my: 3 }}>
        此畫面伺服器端生成後才送下來。
      </Alert>

      <Button variant='contained' color='primary'>按鈕</Button>

    </Container>
  )
}