using Google.Protobuf.WellKnownTypes;
using Grpc.Net.Client;
using N8GrpcPrac;

namespace N8WebApp.Services;

public class GrpcDemoBiz : IDisposable
{
  /// <summary>
  /// 應該來自 appsettings.json 等的環境設定。
  /// </summary>
  public string gRPCHostAddress => "http://172.17.0.2:8080";
  Lazy<GrpcChannel> channel;

  public GrpcDemoBiz()
  {
    channel = new Lazy<GrpcChannel>(() => GrpcChannel.ForAddress(this.gRPCHostAddress));
  }

  void IDisposable.Dispose()
  {
    if (this.channel.IsValueCreated)
      this.channel.Value.Dispose();
  }

  public async Task<HelloReply> SayHelloAsync(HelloRequest request)
  {
    //## 全手動叫用 Grpc Cllient。
    //using var channel = GrpcChannel.ForAddress(gRPCHostAddress);
    var client = new Greeter.GreeterClient(channel.Value);
    var helloReply = await client.SayHelloAsync(request);
    return helloReply;
  }

  public async Task<WeatherForecast> GetWeatherForecastAsync()
  {
    var client = new Greeter.GreeterClient(channel.Value);
    var reply = await client.GetWeatherForecastAsync(new Empty());
    return reply;
  }

}
