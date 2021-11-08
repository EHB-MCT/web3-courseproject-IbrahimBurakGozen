using System;
using System.Collections;
using System.Collections.Generic;
using BackendTemplate.Context;
using BackendTemplate.Core;
using BackendTemplate.Models;
using BackendTemplate.Repositories;

namespace BackendTemplate.Services
{
    public class ProjectService: IService<Project>
    {
        private readonly IUnitOfWork unitOfWork;

        public ProjectService()
        {
            unitOfWork = new UnitOfWork(new PlutoContext());
        }

        public IEnumerable<Project> GetAll()
        {
            return unitOfWork.Projects.GetAll();
        }

        public Project GetById(int id)
        {
            return unitOfWork.Projects.Get(id);
        }
    }
}
