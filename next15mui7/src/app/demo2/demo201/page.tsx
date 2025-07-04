import { Container, Typography, Link, Box, Button, Stack } from "@mui/material";
//import { redirect } from 'next/navigation'
import NextLink from "next/link";
import { Metadata } from "next/types";
import * as act from './actions'

/**
 * html meta for SEO.
 */
export const metadata: Metadata = {
  title: '開戶申請展示 | 亞洲志遠',
  description: '開戶申請的展示頁面。',
}

/**
 * SSR page
 */
export default async function Demo201Page(props: {
  params: Promise<{ slug: string }>
}) {

  return (
    <Container>
      <Typography variant='h3' gutterBottom align='center'>開戶申請</Typography>

      <form action={act.handleGoApply} >
        
        <Stack alignItems='center' spacing={3} >
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

