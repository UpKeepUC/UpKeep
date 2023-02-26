using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;
using UpKeep.Mapper;
using UpKeep.Services;
using UpKeep.Services.Interfaces;
using UpKeepData.Data;
using UpKeepData.Data.UpKeepIdentityContext;
using UpKeepData.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<IUpKeepDBContext, UpKeepDBContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("UpKeepDB")));
builder.Services.AddDbContext<UpKeepIdentityContext>(opt => opt.UseSqlServer(builder.Configuration.GetConnectionString("UpKeepIdentityDB")));
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

builder.Services.AddIdentity<User, IdentityRole>().AddEntityFrameworkStores<UpKeepIdentityContext>(); 

builder.Services.Configure<IdentityOptions>(options => 
{ 
    options.Password.RequireDigit = false; 
    options.Password.RequireNonAlphanumeric = false; 
    options.Password.RequireUppercase = false; 
});
var jwtSettings = builder.Configuration.GetSection("JwtSettings"); 
builder.Services.AddAuthentication(opt =>
{ 
    opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme; 
    opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme; 
}).AddJwtBearer(options => 
{ 
    options.TokenValidationParameters = new TokenValidationParameters 
    { 
        ValidateIssuer = false, 
        ValidateAudience = false, 
        ValidateLifetime = true, 
        ValidateIssuerSigningKey = true, 
        ValidIssuer = jwtSettings.GetSection("validIssuer").Value, 
        ValidAudience = jwtSettings.GetSection("validAudience").Value, 
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.GetSection("securityKey").Value)) 
    }; 
});

builder.Services.AddSwaggerGen();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Version = "v1",
        Title = "UpKeep Swagger UI",
        Description = "UpKeep Swagger UI",
    });
});

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
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Showing API V1");
}); 

app.UseAuthentication();
app.UseAuthorization();

app.UseEndpoints(endpoints => endpoints.MapControllers());

app.MapFallbackToFile("index.html"); ;

app.Run();
