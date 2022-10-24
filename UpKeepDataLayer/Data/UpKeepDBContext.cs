using Microsoft.EntityFrameworkCore;
using UpKeepData.Entity;
using UpKeepData.Interfaces;

namespace UpKeepData.Data
{
    public partial class UpKeepDBContext : DbContext, IUpKeepDBContext
    {

        public UpKeepDBContext(DbContextOptions<UpKeepDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Employee> Employees { get; set; } = null!;
        public virtual DbSet<EmployeeMaintenanceTask> EmployeeMaintenanceTasks { get; set; } = null!;
        public virtual DbSet<InventoryItemMaintenanceTask> InventoryItemMaintenanceTasks { get; set; } = null!;
        public virtual DbSet<MaintenanceTask> MaintenanceTasks { get; set; } = null!;
        public virtual DbSet<MaintenanceTaskType> MaintenanceTaskTypes { get; set; } = null!;
        public virtual DbSet<Person> People { get; set; } = null!;
        public virtual DbSet<Room> Rooms { get; set; } = null!;
        public virtual DbSet<RoomType> RoomTypes { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>(entity =>
            {
                entity.ToTable("Employee");

                entity.Property(e => e.DateHired).HasColumnType("datetime");

                entity.Property(e => e.JobDescription)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.JobTitle)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.Person)
                    .WithMany(p => p.Employees)
                    .HasForeignKey(d => d.PersonId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Employee__Person__48CFD27E");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Employees)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Employee__UserId__47DBAE45");
            });

            modelBuilder.Entity<EmployeeMaintenanceTask>(entity =>
            {
                entity.ToTable("EmployeeMaintenanceTask");

                entity.Property(e => e.DateLinked).HasColumnType("datetime");

                entity.HasOne(d => d.Employee)
                    .WithMany(p => p.EmployeeMaintenanceTasks)
                    .HasForeignKey(d => d.EmployeeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__EmployeeM__Emplo__4BAC3F29");

                entity.HasOne(d => d.MaintenanceTask)
                    .WithMany(p => p.EmployeeMaintenanceTasks)
                    .HasForeignKey(d => d.MaintenanceTaskId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__EmployeeM__Maint__4CA06362");
            });

            modelBuilder.Entity<InventoryItem>(entity =>
            {
                entity.ToTable("InventoryItem");

                entity.Property(e => e.InventoryItemCost)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.PurchaseDate).HasColumnType("datetime");

                entity.Property(e => e.QrcodeId)
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("QRCodeId");

                entity.HasOne(d => d.InventoryItemType)
                    .WithMany(p => p.InventoryItems)
                    .HasForeignKey(d => d.InventoryItemTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Inventory__Inven__2B3F6F97");

                entity.HasOne(d => d.Room)
                    .WithMany(p => p.InventoryItems)
                    .HasForeignKey(d => d.RoomId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Inventory__RoomI__2C3393D0");
            });

            modelBuilder.Entity<InventoryItemMaintenanceTask>(entity =>
            {
                entity.ToTable("InventoryItemMaintenanceTask");

                entity.Property(e => e.DateLinked).HasColumnType("datetime");

                entity.HasOne(d => d.InventoryItem)
                    .WithMany(p => p.InventoryItemMaintenanceTasks)
                    .HasForeignKey(d => d.InventoryItemId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Inventory__Inven__412EB0B6");
            });

            modelBuilder.Entity<InventoryItemType>(entity =>
            {
                entity.ToTable("InventoryItemType");

                entity.Property(e => e.Description)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<MaintenanceTask>(entity =>
            {
                entity.ToTable("MaintenanceTask");

                entity.Property(e => e.Description)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.MaintenanceTaskCompletedDate).HasColumnType("datetime");

                entity.Property(e => e.MaintenanceTaskDueDate).HasColumnType("datetime");

                entity.Property(e => e.Name)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.MaintenanceTaskType)
                    .WithMany(p => p.MaintenanceTasks)
                    .HasForeignKey(d => d.MaintenanceTaskTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Maintenan__Maint__3E52440B");
            });

            modelBuilder.Entity<MaintenanceTaskType>(entity =>
            {
                entity.ToTable("MaintenanceTaskType");

                entity.Property(e => e.Description)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Person>(entity =>
            {
                entity.ToTable("Person");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Room>(entity =>
            {
                entity.ToTable("Room");

                entity.Property(e => e.RoomLocation)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.HasOne(d => d.RoomType)
                    .WithMany(p => p.Rooms)
                    .HasForeignKey(d => d.RoomTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Room__RoomTypeId__286302EC");
            });

            modelBuilder.Entity<RoomType>(entity =>
            {
                entity.ToTable("RoomType");

                entity.Property(e => e.Description)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("User");

                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
