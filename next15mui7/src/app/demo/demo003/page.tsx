"use client"
import { useState } from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import * as act from './actions'
import { WeatherForecast } from "@/generated/greet";
import { Timestamp } from '@/generated/google/protobuf/timestamp'
import { format } from "date-fns";

export default function Demo003Page() {
  const [f_loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [name, setName] = useState('郝聰明')
  const [weatherForecast, setWeatherForecast] = useState<WeatherForecast | null>(null)

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
      setWeatherForecast(result)
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
      <label>天氣預報</label>
      {weatherForecast &&
        <dl>
          <dt>城市</dt>
          <dd>{weatherForecast.city}</dd>
          <dt>日期</dt>
          <dd>{format(Timestamp.toDate(weatherForecast.date!),'yyyy-MM-dd HH:mm:ss') }</dd>
          <dd>{`${Timestamp.toDate(weatherForecast.date!)}`}</dd>
          <dt>氣溫C</dt>
          <dd>{weatherForecast.temperatureC}</dd>
          <dt>氣溫F</dt>
          <dd>{weatherForecast.temperatureF}</dd>
          <dt>天氣</dt>
          <dd>{weatherForecast.summary}</dd>
        </dl>
      }

      <br/>
      <label>message</label>
      <pre>{message}</pre>

    </Container>
  )
}