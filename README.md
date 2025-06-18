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
```