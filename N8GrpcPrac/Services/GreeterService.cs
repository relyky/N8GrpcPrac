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
        Message = $"«¢Åo {request.Name} at {DateTime.Now:HH:mm:ss}¡C"
      });
    }
  }
}
