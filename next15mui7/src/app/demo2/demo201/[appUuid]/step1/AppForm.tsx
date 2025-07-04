"use client"
import { useActionState, useState } from "react";
import { Button, Container, Stack, Typography, Box, Paper, TextField } from "@mui/material";
import NextLink from "next/link";
import { handleCommitStep1 } from '../../actions';

const initialState: IDemo201Step1_FomrStae = {
  success: false,
  errors: {},
  appUuid: '',
  idNumber: 'A123456789',
  name: '甄美麗',
  phoneNumber: '0900123456',
  emailAddress: 'beauty@notmail.server',
}

export default function AppForm(props: {
  appUuid: string,
}) {
  const { appUuid } = props;
  const [state, formAction, isPending] = useActionState(handleCommitStep1, initialState)

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

        <Stack component="form" action={formAction} alignItems='center' spacing={3} >

          <input type='hidden' name='appUuid' value={appUuid} />

          <TextField
            name="idNumber"
            label="身份證字號"
            variant="outlined"
            defaultValue={state.idNumber}
            required
            fullWidth
            error={Boolean(state.errors.idNumber)}
            helperText={state.errors.idNumber?.join(', ')}
          />
          <TextField
            name="name"
            label="姓名"
            variant="outlined"
            defaultValue={state.name}
            required
            fullWidth
            error={Boolean(state.errors.name)}
            helperText={state.errors.name?.join(', ')}
          />
          <TextField
            name="phoneNumber"
            label="手機號碼"
            variant="outlined"
            defaultValue={state.phoneNumber}
            required
            fullWidth
            error={Boolean(state.errors.phoneNumber)}
            helperText={state.errors.phoneNumber?.join(', ')}
          />
          <TextField
            name="emailAddress"
            label="電子信箱"
            variant="outlined"
            defaultValue={state.emailAddress}
            required
            fullWidth
            error={Boolean(state.errors.emailAddress)}
            helperText={state.errors.emailAddress?.join(', ')}
          />

          <Button type='submit' size='large' variant="contained" color="primary" fullWidth
            disabled={isPending}>
            下一步
          </Button>

          <Button type='button' href='../' LinkComponent={NextLink} fullWidth
            disabled={isPending}>
            取消
          </Button>

        </Stack>

      </Paper>

      {/* <hr />
      <label>formState</label>
      <pre>
        {JSON.stringify(state, null, 2)}
      </pre> */}
    </Container>
  );
}