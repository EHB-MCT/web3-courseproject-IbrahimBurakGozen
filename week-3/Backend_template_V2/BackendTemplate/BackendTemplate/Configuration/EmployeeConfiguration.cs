using System;
using System.Collections.Generic;
using BackendTemplate.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BackendTemplate.Configuration
{
    public class EmployeeConfiguration : IEntityTypeConfiguration<Employee>
    {
        private List<Employee> Employees = new List<Employee>();

        private void Seeder()
        {
            for (int i = 1; i < 30; i++)
            {
                Employees.Add(
                    new Employee
                    {
                        ID = i,
                        FirstName = Faker.Name.First(),
                        LastName = Faker.Name.Last(),
                        Email = Faker.Internet.Email(),
                        Phone = Faker.Phone.Number()
                    }
                );
            }
        }

        public void Configure(EntityTypeBuilder<Employee> builder)
        {
            Seeder();
            builder.HasData(Employees);
        }
    }
}
