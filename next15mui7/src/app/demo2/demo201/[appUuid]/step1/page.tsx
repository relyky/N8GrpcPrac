import { Button, Container, Link, Stack, Typography, Divider, Box, Paper, TextField } from "@mui/material";
import NextLink from "next/link";
import { handleCommitStep1 } from '../../actions';

export default async function Demo201Step1Page(props: {
  params: Promise<{ appUuid: string }>
}) {
  const { appUuid } = await props.params;

  // 測試 loading 是否有效。正式版請移除。
  await new Promise((resolve) => setTimeout(resolve, 800));

  return (
    <Container maxWidth="sm">
      <Typography variant='h4' gutterBottom sx={{ textAlign: 'center', mt: 4, mb: 4 }}>
        開戶申請 1/4
      </Typography>

      <Paper sx={{ p: { xs: 2, sm: 4 } }}>
        <Typography variant="h6" gutterBottom>
          基本資料
        </Typography>
        <Box typography="body2" color="text.secondary">
          申請編號: {appUuid}
        </Box>

        <form action={handleCommitStep1}>
          <Stack alignItems='center' spacing={3} >

            <input type='hidden' name='appUuid' value={appUuid} />

            <TextField
              name="idNumber"
              label="身份證字號"
              variant="outlined"
              defaultValue={'A123456789'}
              required
              fullWidth
            />
            <TextField
              name="name"
              label="姓名"
              variant="outlined"
              defaultValue={'郝聰明'}
              required
              fullWidth
            />
            <TextField
              name="phoneNumber"
              label="手機號碼"
              variant="outlined"
              defaultValue={'0900123456'}
              required
              fullWidth
            />
            <TextField
              name="emailAddress"
              label="電子郵件"
              variant="outlined"
              defaultValue={'smart@notmail.server'}
              required
              fullWidth
            />

            <Button type='submit' size='large' variant="contained" color="primary" fullWidth>
              下一步
            </Button>

            <Button href='../' LinkComponent={NextLink} type='button' fullWidth>
              取消
            </Button>

            {/* 
            <Link component={NextLink} href="/" color="secondary" textAlign='center'>
              回首頁
            </Link>
            */}
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}