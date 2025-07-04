"use client"
import { useActionState, useState } from "react";
import { Button, Container, Stack, Typography, Box, Paper, TextField } from "@mui/material";
import NextLink from "next/link";
import { handleCommitStep1 } from '../../actions';
import ApplySteper from "../../applyStepper";

const initialState: IFormState<Demo201Values> = {
  success: false,
  errors: {},
  values: {
    appUuid: '',
    idNumber: 'A123456789',
    name: '甄美麗',
    phoneNumber: '0900123456',
    emailAddress: 'beauty@notmail.server',
  }
}

export default function AppForm(props: {
  appUuid: string,
}) {
  const { appUuid } = props;
  const [state, formAction, isPending] = useActionState(handleCommitStep1, initialState)
  const { values, errors } = state

  return (
    <Container maxWidth="sm">
      <ApplySteper activeStep={0} />

      {/* <Typography variant='h4' gutterBottom sx={{ textAlign: 'center', mt: 4, mb: 4 }}>
        開戶申請 1/4
      </Typography> */}

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
            defaultValue={values.idNumber}
            required
            fullWidth
            error={Boolean(errors.idNumber)}
            helperText={errors.idNumber?.join(', ')}
          />
          <TextField
            name="name"
            label="姓名"
            variant="outlined"
            defaultValue={values.name}
            required
            fullWidth
            error={Boolean(errors.name)}
            helperText={errors.name?.join(', ')}
          />
          <TextField
            name="phoneNumber"
            label="手機號碼"
            variant="outlined"
            defaultValue={values.phoneNumber}
            required
            fullWidth
            error={Boolean(errors.phoneNumber)}
            helperText={errors.phoneNumber?.join(', ')}
          />
          <TextField
            name="emailAddress"
            label="電子信箱"
            variant="outlined"
            defaultValue={values.emailAddress}
            required
            fullWidth
            error={Boolean(errors.emailAddress)}
            helperText={errors.emailAddress?.join(', ')}
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