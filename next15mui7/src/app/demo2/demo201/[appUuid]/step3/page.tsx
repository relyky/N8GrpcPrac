import { Box, Button, ButtonGroup, Container, Link, Paper, Stack, Typography } from "@mui/material";
import NextLink from "next/link";
import Image from 'next/image'
import * as act from '../../actions'

export default async function Demo201Step3Page(props: {
  params: Promise<{ appUuid: string }>
}) {
  const { appUuid } = await props.params
  await new Promise((resolve) => setTimeout(resolve, 800)) // 測試 loading 是否有效。正式版請移除。

  return (
    <Container maxWidth="sm">
      <Typography variant='h4' gutterBottom>開戶申請 3/4</Typography>
      <Box typography="body2" color="text.secondary">
        申請編號: {appUuid}<br />
        上傳附件。
      </Box>

      <Typography variant="h6" gutterBottom>
        身份證正面
      </Typography>
      <Paper variant="outlined" sx={{ p: { xs: 2, sm: 4 } }}>
        <Box sx={{ width: '100%', maxWidth: 600 }}>
          <Image
            src="/images/ROC_mibunsho.jpg"
            alt="ROC_mibunsho"
            width={451}
            height={284}
            style={{
              width: '100%',
              height: 'auto',
            }}
            sizes="100vw"
            priority
          />
        </Box>
      </Paper>

      <Typography variant="h6" gutterBottom>
        身份證背面
      </Typography>
      <Paper variant="outlined" sx={{ p: { xs: 2, sm: 4 } }}>
        <Box sx={{ width: '100%', maxWidth: 600 }}>
          <Image
            src="/images/ROC_mibunsho_ura.jpg"
            alt="ROC_mibunsho_ura"
            width={220}
            height={141}
            style={{
              width: '100%',
              height: 'auto',
            }}
            sizes="100vw"
            priority
          />
        </Box>
      </Paper>

      <Typography variant="h6" gutterBottom>
        健保卡或駕照
      </Typography>
      <Paper variant="outlined" sx={{ p: { xs: 2, sm: 4 } }}>
        <Box sx={{ width: '100%', maxWidth: 600 }}>
          <Image
            src="/images/ROC_healthcard.jpg"
            alt="ROC_healthcard"
            width={1600}
            height={990}
            style={{
              width: '100%',
              height: 'auto',
            }}
            sizes="100vw"
            priority
          />
        </Box>
      </Paper>

      <Typography variant="h6" gutterBottom>
        存摺
      </Typography>
      <Paper variant="outlined" sx={{ p: { xs: 2, sm: 4 } }}>
        <Box sx={{ width: '100%', maxWidth: 600 }}>
          <Image
            src="/images/passbook_cover.jpg"
            alt="ROC_healthcard"
            width={1755}
            height={1233}
            style={{
              width: '100%',
              height: 'auto',
            }}
            sizes="100vw"
            priority
          />
        </Box>
      </Paper>

      <form action={act.handleCommitStep3} >
        <Stack alignItems='center' spacing={3} >

          <input type='hidden' name='appUuid' value={appUuid} />

          <ButtonGroup variant="contained" color='primary' size='large' fullWidth>
            <Button href='./step2' LinkComponent={NextLink} type='button'>
              上一步
            </Button>
            <Button type='submit'>
              下一步
            </Button>
          </ButtonGroup>

        </Stack>
      </form>
    </Container>
  )
}