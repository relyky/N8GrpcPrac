import { Alert, Box, Button, Container, Typography } from "@mui/material";
import { Metadata } from "next/types";

/**
 * html meta for SEO.
 */
export const metadata: Metadata = {
  title: '開戶申請展示 | 亞洲志遠',
  description: '開戶申請的展示頁面。',
}

/**
 * SSR page
 * next.js 天生為 sessionless 設計。
 */
export default async function Demo001Page(
  props: {
    params: Promise<{ }>,
    searchParams: URLSearchParams
  }
) {

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