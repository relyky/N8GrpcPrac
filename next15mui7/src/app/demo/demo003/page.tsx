"use client"
import { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import * as act from './actions'

export default function Demo003Page() {
  const [f_loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')


  async function handleSayHello() {
    try {
      setMessage('')
      setLoading(true)

      const result = await act.sayHello()
      console.log('ON:handleSayHello →', result)

      setMessage(JSON.stringify(result, null, 2))
    }
    catch (err: unknown) {
      setMessage(JSON.stringify(err, null, 2))
    }
    finally {
      setLoading(false)
    }
  }

  async function handleSayHelloInsecure() {
    try {
      setMessage('')
      setLoading(true)

      const result = await act.sayHelloInsecure()
      console.log('ON:handleSayHelloInsecure →', result)

      setMessage(JSON.stringify(result, null, 2))
    }
    catch (err: unknown) {
      setMessage(JSON.stringify(err, null, 2))
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <Typography variant='h3'>Demo003 - gRPC Basic Demo</Typography>
      {f_loading && <p className="text-5xl font-bold">Loading...</p>}

      <Button onClick={handleSayHello}>gRPC sayHello</Button>
      <Button onClick={handleSayHelloInsecure} >gRPC sayHello(insecure)</Button>

      <br />
      <label>message</label>
      <pre>{message}</pre>

    </Container>
  )
}