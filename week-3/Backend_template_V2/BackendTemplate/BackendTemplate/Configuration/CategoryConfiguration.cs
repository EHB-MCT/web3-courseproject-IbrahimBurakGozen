using System;
using System.Collections.Generic;
using BackendTemplate.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BackendTemplate.Configuration
{
    public class CategoryConfiguration : IEntityTypeConfiguration<Category>
    {
        private List<Category> Categories = new List<Category>();

        private void Seeder()
        {
            for (int i = 1; i < 30; i++)
            {
                Categories.Add(
                    new Category
                    {
                        ID = i,
                        Name = Faker.Lorem.Sentence(),
                        Description = Faker.Lorem.Paragraph()
                    }
                ); 
            }
        }

        public void Configure(EntityTypeBuilder<Category> builder)
        {
            Seeder();
            builder.HasData(Categories);
        }
    }
}
