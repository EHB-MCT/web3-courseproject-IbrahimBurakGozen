using System;
using System.Collections;
using System.Collections.Generic;
using BackendTemplate.Models;

namespace BackendTemplate.Repositories
{
    public interface IProjectRepository : IRepository<Project>
    {
        IEnumerable<Project> GetAllProjectSorted();
    }
}
