using System;
using System.Collections.Generic;
using BackendTemplate.Context;
using BackendTemplate.Core;
using BackendTemplate.Models;

namespace BackendTemplate.Services
{
    public class SubprojectService : IService<Subproject>
    {
        private readonly IUnitOfWork unitOfWork;

        public SubprojectService()
        {
            unitOfWork = new UnitOfWork(new PlutoContext());
        }

        public IEnumerable<Subproject> GetAll()
        {
            return unitOfWork.Subprojects.GetAll();
        }

        public Subproject GetById(int id)
        {
            return unitOfWork.Subprojects.Get(id);
        }
    }
}