import { Container, Typography, Link, Box, Button, Stack } from "@mui/material";
//import { redirect } from 'next/navigation'
import NextLink from "next/link";

export default async function Demo201SuccessPage(props: {
  params: Promise<{ appUuid: string }>
}) {
  const { appUuid } = await props.params
  await new Promise((resolve) => setTimeout(resolve, 800)) // 測試 loading 是否有效。正式版請移除。

  return (
    <Container>
      <Typography variant='h3' gutterBottom align='center'>開戶申請 - 成功</Typography>
      <p>{appUuid}</p>

      <Typography variant='h4' gutterBottom align='center'>恭禧開戶成功。接下來可以進行...等等。</Typography>

      <Stack alignItems='center'>
        <Link href="/" color="secondary" component={NextLink}>
          回首頁
        </Link>
      </Stack>
    </Container>

  )
}

