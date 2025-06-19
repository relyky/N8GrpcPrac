# N8GrpcPrac
NET8 gRPC parctice

# 參考文件
 * [Docker for Beginners with Blazor](https://www.youtube.com/watch?v=Q_7rrpgy4Lo)
 * [在 ASP.NET Core 中使用 gRPCurl 和 gRPCui 測試 gRPC 服務](https://learn.microsoft.com/zh-tw/aspnet/core/grpc/test-tools?view=aspnetcore-8.0) 
 
# grpcurl 測試指令
```bash
> grpcurl -plaintext localhost:32781 list
Failed to dial target host "localhost:32781": context deadline exceeded

> grpcurl -insecure localhost:32781 list
greet.Greeter
grpc.reflection.v1alpha.ServerReflection

> docker network inspect bridge

```
http://172.17.0.2:8080
http://n8grpcprac:8080

# Next.js 呼叫 gRPC service
`@grpc/proto-loader`
`@grpc/grpc-js`
`protobuf-ts`
`protoc greet.proto --ts_proto_out=./generated`

```TS,server action
'use server';

import { GreeterClient } from './generated/greet.client';
import { HelloRequest } from './generated/greet';
import { createChannel } from '@protobuf-ts/runtime-rpc';

const client = new GreeterClient(createChannel('localhost:50051'));

https://github.com/timostamm/protobuf-ts/?tab=readme-ov-file

export async function sayHello(name: string): Promise<string> {
  const request: HelloRequest = { name };
  const response = await client.sayHello(request);
  return response.message;
}
```