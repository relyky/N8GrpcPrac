using N8GrpcPrac.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddGrpc();
builder.Services.AddGrpcReflection();

var app = builder.Build();
IWebHostEnvironment env = app.Environment;

// Configure the HTTP request pipeline.
app.MapGrpcService<GreeterService>();

if (env.IsDevelopment())
{
  app.MapGrpcReflectionService()
    .AllowAnonymous();
}

app.MapGet("/", () => "Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");
app.MapGet("/healthz", () => "status:Healthy; version:1.0.1;");

// ¤½¥¬ proto ¤å¥ó
app.MapGet("/protos/greet.proto", async context => await context.Response.SendFileAsync("Protos/greet.proto"));

app.Run();
