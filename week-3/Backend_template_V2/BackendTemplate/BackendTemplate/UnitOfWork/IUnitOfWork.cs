using System;
using BackendTemplate.Repositories;

namespace BackendTemplate.Core
{
    public interface IUnitOfWork : IDisposable
    {
        IProjectRepository Projects { get; }
        ISubprojectRepository Subprojects { get; }
        IClientRepository Clients { get; }
        IEmployeeRepository Employees { get; }
        ICategoryRepository Categories { get; }
        int Complete();
    }
}
