import { Button, Container, Stack, Typography } from "@mui/material";
import NextLink from "next/link";

export default function Demo201Step4Page() {

  return (
    <Container>
      <Typography variant='h4' gutterBottom>開戶申請 4/4</Typography>

      
      <Stack direction='row' justifyContent='center'>
        <Button color="secondary">送出</Button>        
      </Stack>
    </Container>
  )
}