import { Button, Container, Link, Stack, Typography, TextField, Box, Paper, ButtonGroup } from "@mui/material";
import NextLink from "next/link";
import * as act from '../../actions'
import ApplySteper from "../../applyStepper";

export default async function Demo201Step2Page(props: {
  params: Promise<{ appUuid: string }>
}) {
  const { appUuid } = await props.params
  await new Promise((resolve) => setTimeout(resolve, 800)) // 測試 loading 是否有效。正式版請移除。

  return (
    <Container maxWidth="sm">
      <ApplySteper activeStep={1} />
      
      {/* <Typography variant='h4' gutterBottom>開戶申請 2/4</Typography> */}
      <Box typography="body2" color="text.secondary">
        申請編號: {appUuid}
      </Box>

      <Paper sx={{ p: { xs: 2, sm: 4 } }}>
        <Typography variant="h6" gutterBottom>
          基本資料二
        </Typography>
        <form action={act.handleCommitStep2} >
          <Stack alignItems='center' spacing={3} >

            <input type='hidden' name='appUuid' value={appUuid} />

            <TextField
              name="dateOfBirth"
              label="生日"
              variant="outlined"
              type="date"
              defaultValue="2000-01-01"
              required
              fullWidth
            />
            <TextField
              name="permanentAddress"
              label="戶籍地址"
              variant="outlined"
              defaultValue="台北市信義區沒有這條路999號"
              required
              fullWidth
            />
            <TextField
              name="mailingAddress"
              label="通訊地址"
              variant="outlined"
              defaultValue="台北市信義區沒有這條路999號"
              required
              fullWidth
            />
            <TextField
              name="companyName"
              label="公司名稱"
              variant="outlined"
              defaultValue="Skynet Studio"
              fullWidth
            />
            <TextField
              name="occupation"
              label="職業別"
              variant="outlined"
              defaultValue="軟體工程師"
              fullWidth />
            <TextField
              name="jobTitle"
              label="職務名稱"
              variant="outlined"
              defaultValue="資深工程師"
              fullWidth />
            <TextField
              name="salesperson"
              label="銷售人員"
              variant="outlined"
              defaultValue="甄美麗"
              fullWidth />


            <ButtonGroup variant="contained" color='primary' size='large' fullWidth>
              <Button href='./step1' LinkComponent={NextLink} type='button'>
                上一步
              </Button>
              <Button type='submit'>
                下一步
              </Button>
            </ButtonGroup>

            {/*
            <Link component={NextLink} href="/" color="secondary" textAlign='center'>
              回首頁
            </Link>            
            */}

          </Stack>
        </form>

      </Paper>
    </Container>
  )
}
