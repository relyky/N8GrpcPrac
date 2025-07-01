"use client"
import { useState } from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import * as act from './actions'

export default function Demo003Page() {
  const [f_loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [name, setName] = useState('郝聰明')

  async function handleSayHello() {
    try {
      setMessage('')
      setLoading(true)

      const result = await act.sayHello(name)
      setMessage(JSON.stringify(result, null, 2))
    }
    catch (err: unknown) {
      setMessage(JSON.stringify(err, null, 2))
    }
    finally {
      setLoading(false)
    }
  }

  async function handleGetWeatherForecast() {
    try {
      setMessage('')
      setLoading(true)

      const result = await act.getWeatherForecast();
      console.log('result', result);
      console.log('resultJSON', JSON.stringify(result, null, 2));
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
      <TextField label="Name" variant="outlined" value={name} onChange={(e)=> setName(e.target.value)} />

      <Button variant="contained" onClick={handleSayHello}>gRPC sayHello</Button>
      <Button variant="contained" onClick={handleGetWeatherForecast}>取天氣</Button>

      {f_loading && <p className="text-5xl font-bold">Loading...</p>}

      <br />
      <label>message</label>
      <pre>{message}</pre>

    </Container>
  )
}