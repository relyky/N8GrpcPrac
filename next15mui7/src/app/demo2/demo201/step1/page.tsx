import { Button, Container, Stack, Typography } from "@mui/material";
import NextLink from "next/link";

export default function Demo201Step1Page() {

  return (
    <Container>
      <Typography variant='h4' gutterBottom>開戶申請 1/4</Typography>

      
      <Stack direction='row' justifyContent='center'>
        <Button LinkComponent={NextLink} href="/demo2/demo201/step2" color="secondary">下一步</Button>        
      </Stack>
    </Container>
  )
}