using System;
using System.Collections.Generic;
using BackendTemplate.Context;
using BackendTemplate.Core;
using BackendTemplate.Models;

namespace BackendTemplate.Services
{
    public class ClientService : IService<Client>
    {
        private readonly IUnitOfWork unitOfWork;

        public ClientService()
        {
            unitOfWork = new UnitOfWork(new PlutoContext());
        }

        public IEnumerable<Client> GetAll()
        {
            return unitOfWork.Clients.GetAll();
        }

        public Client GetById(int id)
        {
            return unitOfWork.Clients.Get(id);
        }
    }
}
