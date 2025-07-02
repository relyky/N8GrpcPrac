import { Container, Typography, Link, Box, Button, Stack } from "@mui/material";
//import { redirect } from 'next/navigation'
import NextLink from "next/link";
import * as act from './actions'

export default async function Demo201Page() {

  return (
    <Container>
      <Typography variant='h3' gutterBottom align='center'>開戶申請</Typography>

      <form action={act.handleGoApply} >
        
        <Stack alignItems='center' spacing={6} >
          <Button type='submit' size='large' color="primary">
            開戶申請 Go
          </Button>

          <Link href="/" color="secondary" component={NextLink}>
            回首頁
          </Link>
        </Stack>
      </form>
    </Container>

  )
}

