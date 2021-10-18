using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using MySql.EntityFrameworkCore.Extensions;
using Backend.Models;

namespace Backend.Context
{
    public class ClientContext : DbContext
    {
        //public ClientContext (DbContextOptions<ClientContext> options):base(options){}
        public DbSet<Client> Clients { get; set; }
        //public string DbPath { get; private set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySQL("server=127.0.0.1;port=8889;database=backend-template;user=root;password=root");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // modelBuilder.Entity<Client>().ToTable("client");
        }
  
    }
}