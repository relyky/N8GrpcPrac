import { Button, Container, Link, Stack, Typography } from "@mui/material";
import NextLink from "next/link";
import * as act from '../../actions'

export default async function Demo201Step1Page(props: {
  params: Promise<{ appUuid: string }>
}) {
  // The params object is a Promise, so it must be awaited.
  const { appUuid } = await props.params
  // 測試 loading 是否有效。正式版請移除。
  await new Promise((resolve) => setTimeout(resolve, 800)) 

  return (
    <Container>
      <Typography variant='h4' gutterBottom>開戶申請 1/4 (2)</Typography>
      <p>{appUuid}</p>

      <form action={act.handleCommitStep1} >
        <Stack alignItems='center' spacing={6} >

          <input type='hidden' name='appUuid' value={appUuid} />
          <Button type='submit' size='large' color="primary">
            下一步
          </Button>

          <Link href="/" color="secondary" component={NextLink}>
            回首頁
          </Link>
        </Stack>
      </form>


      <hr />
      <label>for debug</label>
      <pre>
        {JSON.stringify({
          appUuid,
        }, null, 2)}
      </pre>
    </Container>
  )
}