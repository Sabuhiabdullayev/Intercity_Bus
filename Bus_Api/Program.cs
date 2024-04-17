using BussinessLayer.Abstract;
using BussinessLayer.Concrete;
using DataAccessLayer.Abstract;
using DataAccessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<ApiContext>();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IContactUsServices, ContactUsManager>();
builder.Services.AddScoped<IContactUsDal, EfContactUsDal>();
builder.Services.AddScoped<IPassengersServices,PassengersManager>();
builder.Services.AddScoped<IDeparturePriceDal, EfDeparturePriceDal>();
builder.Services.AddScoped<IDeparturePriceServices, DeparturePriceManager>();
builder.Services.AddScoped<IPassengersDal, EfPassengersDal>();
builder.Services.AddCors(opt =>
{
    opt.AddPolicy("ApiBus", opts =>
    {
        opts.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseRouting();
app.UseCors("ApiBus");
app.UseAuthorization();

app.MapControllers();

app.Run();
