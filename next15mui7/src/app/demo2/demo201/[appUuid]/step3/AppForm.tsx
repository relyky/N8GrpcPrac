"use client"
import { useState } from "react";
import { Box, Button, ButtonGroup, Container, Paper, Stack, Toolbar, Typography } from "@mui/material";
import NextLink from "next/link";
import Image from 'next/image'
import PhotographIconButton from "@/components/PhotographIconButton";
import * as act from '../../actions'

export default function AppForm(props: {
  appUuid: string
}) {
  const { appUuid } = props

  const [photo1Src, setPhoto1Src] = useState<string>('/images/ROC_mibunsho.jpg') // 身份證正面
  const [photo2Src, setPhoto2Src] = useState<string>('/images/ROC_mibunsho_ura.jpg') // 身份證反面
  const [photo3Src, setPhoto3Src] = useState<string>('/images/ROC_healthcard.jpg') // 健保卡 or 駕照
  const [photo4Src, setPhoto4Src] = useState<string>('/images/passbook_cover.jpg') // 存摺封面

  return (
    <Container maxWidth="sm">
      <Typography variant='h4' gutterBottom>開戶申請 3/4</Typography>
      <Box typography="body2" color="text.secondary">
        申請編號: {appUuid}<br />
        上傳附件。
      </Box>

      <Toolbar>
        <Typography variant="h6">
          身份證正面
        </Typography>
        <PhotographIconButton onTakePhoto={handleTakePhoto1} />
      </Toolbar>
      <Paper variant="outlined" sx={{ p: { xs: 2, sm: 3 } }}>
        <Box sx={{ width: '100%', maxWidth: 600 }}>
          <Image
            src={photo1Src}
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

      <Toolbar>
        <Typography variant="h6">
          身份證背面
        </Typography>
        <PhotographIconButton onTakePhoto={handleTakePhoto2} />
      </Toolbar>
      <Paper variant="outlined" sx={{ p: { xs: 2, sm: 3 } }}>
        <Box sx={{ width: '100%', maxWidth: 600 }}>
          <Image
            src={photo2Src}
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

      <Toolbar>
        <Typography variant="h6">
          健保卡或駕照
        </Typography>
        <PhotographIconButton onTakePhoto={handleTakePhoto3} />
      </Toolbar>
      <Paper variant="outlined" sx={{ p: { xs: 2, sm: 3 } }}>
        <Box sx={{ width: '100%', maxWidth: 600 }}>
          <Image
            src={photo3Src}
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

      <Toolbar>
        <Typography variant="h6">
          存摺封面
        </Typography>
        <PhotographIconButton onTakePhoto={handleTakePhoto4} />
      </Toolbar>
      <Paper variant="outlined" sx={{ p: { xs: 2, sm: 3 } }}>
        <Box sx={{ width: '100%', maxWidth: 600 }}>
          <Image
            src={photo4Src}
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

  function handleTakePhoto1(imageUri: string) {
    setPhoto1Src(imageUri)
    // 上傳到後端...未實作
  }

  function handleTakePhoto2(imageUri: string) {
    setPhoto2Src(imageUri)
    // 上傳到後端...未實作
  }

  function handleTakePhoto3(imageUri: string) {
    setPhoto3Src(imageUri)
    // 上傳到後端...未實作
  }

  function handleTakePhoto4(imageUri: string) {
    setPhoto4Src(imageUri)
    // 上傳到後端...未實作
  }
}
