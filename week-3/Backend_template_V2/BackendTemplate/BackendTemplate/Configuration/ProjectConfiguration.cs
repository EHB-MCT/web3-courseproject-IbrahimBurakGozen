using System;
using System.Collections.Generic;
using BackendTemplate.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BackendTemplate.Configuration
{
    public class ProjectConfiguration : IEntityTypeConfiguration<Project>
    {
        private List<Project> Projects = new List<Project>();

        private void Seeder()
        {
            for (int i = 1; i < 30; i++)
            {
                Projects.Add(
                    new Project
                    {
                        ID = i,
                        Title = Faker.Lorem.Sentence(),
                        Description = Faker.Lorem.Paragraph(),
                        //Estimated_Finish_Time = Faker.
                        Price = Faker.RandomNumber.Next(0, 1000)
                    }
                );
            }
        }

        public void Configure(EntityTypeBuilder<Project> builder)
        {
            Seeder();
            builder.HasData(Projects);
        }
    }
}
