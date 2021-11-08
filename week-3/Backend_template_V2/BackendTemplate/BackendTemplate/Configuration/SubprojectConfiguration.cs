using System;
using System.Collections.Generic;
using BackendTemplate.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BackendTemplate.Configuration
{
    public class SubprojectConfiguration : IEntityTypeConfiguration<Subproject>
    {
        private List<Subproject> Subprojects = new List<Subproject>();

        private void Seeder()
        {
            for (int i = 1; i < 30; i++)
            {
                Subprojects.Add(
                    new Subproject
                    {
                        ID = i,
                        Title = Faker.Lorem.Sentence(),
                        Description = Faker.Lorem.Paragraph(),
                        Start_Date = "23/07/2001",
                        Finish_Date = "23/08/2001",
                        State = Faker.Enum.Random<SubprojectState>()
                    }
                );
            }
        }

        public void Configure(EntityTypeBuilder<Subproject> builder)
        {
            Seeder();
            builder.HasData(Subprojects);
        }
    }
}
