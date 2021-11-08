using System;
using BackendTemplate.Context;
using BackendTemplate.Models;

namespace BackendTemplate.Repositories
{
    public class ClientRepository : Repository<Client>, IClientRepository
    {
        public ClientRepository(PlutoContext context): base(context){}
    }
}
