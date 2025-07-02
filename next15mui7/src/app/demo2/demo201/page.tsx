import { Container, Typography, Link, Box } from "@mui/material";
import NextLink from "next/link";

export default function Demo201Page() {

  return (
    <Container>
      <Typography variant='h3' gutterBottom align='center'>開戶申請</Typography>

      <Box textAlign='center'>
        <Link href="/demo2/demo201/step1" color="secondary" component={NextLink}>
          開戶申請 Go
        </Link>
      </Box>
    </Container>

  )
}

