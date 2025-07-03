import { Container, Typography } from "@mui/material";
import TakePicture from "./TakePicture";

export default async function Demo004Page() {

  return (
    <Container>
      <Typography>Demo004 - 照像練習</Typography>

      <TakePicture />

    </Container>
  )

}