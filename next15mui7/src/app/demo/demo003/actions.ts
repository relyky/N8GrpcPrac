"use server"

import { HelloRequest } from "@/generated/greet";
import * as client from "@/lib/grpc-greet-client";

export async function sayHello(name: string) {
  try {
    const request: HelloRequest = {
      name: name
    };

    const reply = await client.sayHelloAsync(request);
    return reply;
  } catch (error) {
    console.error('sayHello error →', error);
    throw error;
  }
}


export async function getWeatherForecast() {
  try {
    const reply = await client.getWeatherForecastAsync();
    return reply;
  } catch (error) {
    console.error('getWeatherForecast error →', error);
    throw error;
  }
}
