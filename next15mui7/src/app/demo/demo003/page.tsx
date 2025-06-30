import { Button, Container, Typography } from "@mui/material";

export default async function Demo003Page() {

  return (
    <Container>
      <Typography variant='h3'>Demo003 - gRPC Basic Demo</Typography>

      <Button>gRPC sayHello</Button>      
      <Button>gRPC sayHello(insecure)</Button>      

    </Container>
  )
}