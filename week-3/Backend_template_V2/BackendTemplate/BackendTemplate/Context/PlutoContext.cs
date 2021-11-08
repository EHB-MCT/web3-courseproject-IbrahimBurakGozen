using System;
using BackendTemplate.Configuration;
using BackendTemplate.Models;
using Microsoft.EntityFrameworkCore;

namespace BackendTemplate.Context
{
    public class PlutoContext: DbContext
    {
        public DbSet<Client> Clients { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Subproject> Subprojects { get; set; }
        public DbSet<Category> Categories { get; set; }

        //public PlutoContext(DbContextOptions connectionString) : base(connectionString){}

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string connectionString = Environment.GetEnvironmentVariable("CONNECTION_STRINGS");
            System.Console.WriteLine(connectionString);
            optionsBuilder.UseMySQL(connectionString.ToString());
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ProjectConfiguration());
            modelBuilder.ApplyConfiguration(new SubprojectConfiguration());
            modelBuilder.ApplyConfiguration(new ClientConfiguration());
            modelBuilder.ApplyConfiguration(new CategoryConfiguration());
            modelBuilder.ApplyConfiguration(new EmployeeConfiguration());
        }
    }
}


//protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//{
//    //optionsBuilder.UseMySQL(ConfigurationManager.AppSettings.);
//}

//protected override void OnModelCreating(ModelBuilder modelBuilder)
//{
//    //modelBuilder.Entity<User>().ToTable("Clients");
//    //modelBuilder.Entity<User>().ToTable("Employees");

//    base.OnModelCreating(modelBuilder);

//    modelBuilder.Entity<Project>(entity =>
//    {
//        entity.HasKey(e => e.ID);
//        entity.Property(e => e.Price).IsRequired();
//        entity.Property(e => e.Estimated_Finish_Time).IsRequired();
//    });

//    modelBuilder.Entity<Subproject>(entity =>
//    {
//        entity.Property(e => e.Title).IsRequired();
//        entity.HasOne(d => d.Project)
//          .WithMany(p => p.Subprojects);
//    });
//}