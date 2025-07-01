/**
 * 包裝 gRPC 呼用程序。
 * for greet.proto
 */

import { HelloReply, HelloRequest } from "@/generated/greet";
import { GreeterClient } from "@/generated/greet.client";
import { ChannelCredentials } from "@grpc/grpc-js";
import { GrpcTransport } from "@protobuf-ts/grpc-transport";

const transportInsecure = new GrpcTransport({
  host: process.env.GREETER_HOST_INSECURE!, // 替換為你的 gRPC 服務地址
  channelCredentials: ChannelCredentials.createInsecure(), // 未加入安全機制
});

const transport = new GrpcTransport({
  host: process.env.GREETER_HOST!, // 替換為你的 gRPC 服務地址
  channelCredentials: ChannelCredentials.createSsl(), // 使用預設的憑證(但 docker 本身沒有憑證!需額外再配製)
});

console.info('grpc-greet-client', process.env.GREETER_HOST_INSECURE, process.env.GREETER_HOST)

// 創建客戶端實例
const client = new GreeterClient(transport);
const clientInsecure = new GreeterClient(transportInsecure); // 用於開發環境測試

export async function sayHelloAsync(request: HelloRequest): Promise<HelloReply> {
  const call = client.sayHello(request);
  const response = await call.response;
  return response;
}

/**
 * 用於開發環境測試
 */
export async function sayHelloInsecureAsync(request: HelloRequest): Promise<HelloReply> {
  const call = clientInsecure.sayHello(request);
  const response = await call.response;
  return response;
}
