using webApi.Models;
using System.Collections.Generic;
using System.Linq;

namespace webApi.Services
{
    public static class ClientService
    {
        static List<Client> Clients { get; }
        static int nextId = 3;
        static ClientService()
        {
            Clients = new List<Client>
            {
                new Client { id= 1, firstName = "Burak", lastName = "Gozen", email="burakgozen38@gmail.com"}
            };
        }

        public static List<Client> GetAll() => Clients;

        public static Client Get(int id) => Clients.FirstOrDefault(p => p.id == id);

        public static void Add(Client client)
        {
            client.id = nextId++;
            Clients.Add(client);
        }

        public static void Delete(int id)
        {
            var client = Get(id);
            if(client is null)
                return;

            Clients.Remove(client);
        }

        public static void Update(Client client)
        {
            var index = Clients.FindIndex(p => p.id == client.id);
            if(index == -1)
                return;

            Clients[index] = client;
        }
    }
}