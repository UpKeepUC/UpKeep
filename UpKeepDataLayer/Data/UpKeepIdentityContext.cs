using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace UpKeepData.Data.UpKeepIdentityContext
{
    public class UpKeepIdentityContext : DbContext
    {
        public UpKeepIdentityContext(DbContextOptions<UpKeepIdentityContext> options) : base(options) { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new RoleConfiguration());
            modelBuilder.Entity<IdentityUserRole<string>>().HasKey(p => new { p.UserId, p.RoleId });
        }
        public DbSet<User> Users { get; set; }
    }

    public class RoleConfiguration : IEntityTypeConfiguration<IdentityRole> 
    { 
        public void Configure(EntityTypeBuilder<IdentityRole> builder) 
        { 
            builder.HasData(
                new IdentityRole { Name = "Visitor", NormalizedName = "VISITOR"}, 
                new IdentityRole { Name = "Administrator", NormalizedName = "ADMINISTRATOR"}); 
        } 
    }

    public class User : IdentityUser { 
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }

    public class UserRegistrationModel 
    { 
        public string FirstName { get; set; } 
        public string LastName { get; set; } 
        [Required(ErrorMessage = "Email is required")]
        [EmailAddress] 
        public string Email { get; set; } 
        [Required(ErrorMessage = "Password is required")]
        [DataType(DataType.Password)] 
        public string Password { get; set; } 
        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")] 
        public string ConfirmPassword { get; set; }
        [Required(ErrorMessage = "Password is required")]
        public string UserName { get; set; }
    }
}

