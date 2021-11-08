﻿// <auto-generated />
using System;
using BackendTemplate.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BackendTemplate.Migrations
{
    [DbContext(typeof(PlutoContext))]
    [Migration("20211102140817_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 64)
                .HasAnnotation("ProductVersion", "5.0.11");

            modelBuilder.Entity("BackendTemplate.Models.Project", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("Estimated_Finish_Time")
                        .HasColumnType("text");

                    b.Property<int>("Price")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .HasColumnType("text");

                    b.HasKey("ID");

                    b.ToTable("Projects");
                });

            modelBuilder.Entity("BackendTemplate.Models.Subproject", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("Finish_Date")
                        .HasColumnType("text");

                    b.Property<int?>("ProjectID")
                        .HasColumnType("int");

                    b.Property<string>("Start_Date")
                        .HasColumnType("text");

                    b.Property<int>("State")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .HasColumnType("text");

                    b.HasKey("ID");

                    b.HasIndex("ProjectID");

                    b.ToTable("Subprojects");
                });

            modelBuilder.Entity("BackendTemplate.Models.Subproject", b =>
                {
                    b.HasOne("BackendTemplate.Models.Project", "Project")
                        .WithMany("Subprojects")
                        .HasForeignKey("ProjectID");

                    b.Navigation("Project");
                });

            modelBuilder.Entity("BackendTemplate.Models.Project", b =>
                {
                    b.Navigation("Subprojects");
                });
#pragma warning restore 612, 618
        }
    }
}
