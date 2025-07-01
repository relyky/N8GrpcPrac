"use server"

import { HelloRequest } from "@/generated/greet";
import * as client from "@/lib/grpc-greet-client";


export async function sayHello() {
  try {
    const request: HelloRequest = {
      name: 'Smart'
    };

    const reply = await client.sayHelloAsync(request);
    return reply;
  } catch (error) {
    console.error('sayHello error →', error);
    throw error;
  }
}

export async function sayHelloInsecure() {
  try {
    const request: HelloRequest = {
      name: 'Smart (insecure)'
    };

    const reply = await client.sayHelloInsecureAsync(request);
    return reply;
  } catch (error) {
    console.error('sayHello error →', error);
    throw error;
  }
}
