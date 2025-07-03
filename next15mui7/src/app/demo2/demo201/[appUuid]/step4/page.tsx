import { Box, Button, ButtonGroup, Container, Link, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import NextLink from "next/link";
import * as act from '../../actions'

export default async function Demo201Step4Page(props: {
  params: Promise<{ appUuid: string }>
}) {
  const { appUuid } = await props.params
  await new Promise((resolve) => setTimeout(resolve, 800)) // 測試 loading 是否有效。正式版請移除。

  return (
    <Container maxWidth="sm">
      <Typography variant='h4' gutterBottom>開戶申請 4/4</Typography>
      <Box typography="body2" color="text.secondary">
        申請編號: {appUuid}<br />
        確認申請文件並送出。
      </Box>

      <TableContainer component={Paper} variant="outlined">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                身份證號
              </TableCell>
              <TableCell align="left">
                {`A123456789`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                姓名
              </TableCell>
              <TableCell align="left">
                {`王〇〇`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                生日
              </TableCell>
              <TableCell align="left">
                {`1990-01-01`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                行動電話
              </TableCell>
              <TableCell align="left">
                {`0912345678`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                戶籍地址
              </TableCell>
              <TableCell align="left">
                {`台北市信義區沒有這條路999號`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                通訊地址
              </TableCell>
              <TableCell align="left">
                {`台北市信義區沒有這條路999號`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                電子信箱
              </TableCell>
              <TableCell align="left">
                {`smart@notmail.server`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                公司名稱
              </TableCell>
              <TableCell align="left">
                {`某某科技股份有限公司`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                職業別
              </TableCell>
              <TableCell align="left">
                {`軟體工程師`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                職務名稱
              </TableCell>
              <TableCell align="left">
                {`資深工程師`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                銷售人員
              </TableCell>
              <TableCell align="left">
                {`張三`}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <form action={act.handleCommitStep4}>
        <Stack alignItems='center' spacing={3} >
          <input type='hidden' name='appUuid' value={appUuid} />
          <Button type='submit' variant="contained" size='large' color="primary" fullWidth>
            送出
          </Button>
          <Button href='./step3' LinkComponent={NextLink} type='button' size='large' color="primary" fullWidth>
            上一步
          </Button>
        </Stack>
      </form>
    </Container>
  )
}