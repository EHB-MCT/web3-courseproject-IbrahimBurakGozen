using System;
using System.Collections.Generic;
using BackendTemplate.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BackendTemplate.Configuration
{
    public class ClientConfiguration : IEntityTypeConfiguration<Client>
    {
        private List<Client> Clients = new List<Client>();

        private void Seeder()
        {
            for (int i = 1; i < 30; i++)
            {
                Clients.Add(
                    new Client
                    {
                        ID = i,
                        FirstName = Faker.Name.First(),
                        LastName = Faker.Name.Last(),
                        Email = Faker.Internet.Email(),
                        Phone = Faker.Phone.Number(),
                        Btw_Number = Faker.RandomNumber.Next(0, 1000).ToString()
                    }
                );
            }
        }

        public void Configure(EntityTypeBuilder<Client> builder)
        {
            Seeder();
            builder.HasData(Clients);
        }
    }
}
