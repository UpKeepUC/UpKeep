using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using UpKeep.Mapper;
using UpKeep.Services;
using UpKeep.Services.Interfaces;
using UpKeepData.Data;
using UpKeepData.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<IUpKeepDBContext, UpKeepDBContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("UpKeepDB")));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();
builder.Services.AddAutoMapper(cfg => 
{
    cfg.AddProfile<MappingProfile>();
});
builder.Services.AddSingleton<IConfiguration>(builder.Configuration);
builder.Services.AddHttpClient("qrCodeClient", c => c.BaseAddress = new Uri(builder.Configuration.GetSection("QRCodeSecrets")["X-RapidAPI-Host"]));
builder.Services.AddTransient<IInventoryItemService, InventoryItemService>();
builder.Services.AddTransient<IInventoryItemTypeService, InventoryItemTypeService>();
builder.Services.AddTransient<IMaintenanceTaskService, MaintenanceTaskService>();
builder.Services.AddTransient<IMaintenanceTaskTypeService, MaintenanceTaskTypeService>();
builder.Services.AddTransient<IRoomTypeService, RoomTypeService>();
builder.Services.AddTransient<IRoomService, RoomService>();
builder.Services.AddTransient<IQRCodeService, QRCodeService>();
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();

// CORS - Allow calling the API from WebBrowsers
app.UseCors(x => x
    .AllowAnyMethod()
    .AllowAnyHeader()
    .AllowCredentials()
    .SetIsOriginAllowed(origin => true));// Allow any origin 

app.UseStaticFiles();
app.UseRouting();

app.UseEndpoints(endpoints => endpoints.MapControllers());

app.MapFallbackToFile("index.html"); ;

app.Run();
