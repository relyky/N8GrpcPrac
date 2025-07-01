using Google.Protobuf.WellKnownTypes;
using Grpc.Core;
using N8GrpcPrac;

namespace N8GrpcPrac.Services
{
  public class GreeterService : Greeter.GreeterBase
  {
    private readonly ILogger<GreeterService> _logger;
    public GreeterService(ILogger<GreeterService> logger)
    {
      _logger = logger;
    }

    public override Task<HelloReply> SayHello(HelloRequest request, ServerCallContext context)
    {
      return Task.FromResult(new HelloReply
      {
        Message = $"���o {request.Name} at {DateTime.Now:HH:mm:ss}�C"
      });
    }

    public override Task<WeatherForecast> GetWeatherForecast(Empty request, ServerCallContext context)
    {
      return Task.FromResult(new WeatherForecast
      {
        City = "�s�_��",
        Date = Timestamp.FromDateTime(DateTime.UtcNow),
        TemperatureC = 25,
        TemperatureF = 32 + (int)(25 / 0.5556),
        Summary = "����"
      });
    }
  }
}
