using System;
using BackendTemplate.Context;
using BackendTemplate.Repositories;

namespace BackendTemplate.Core
{
    public class UnitOfWork: IUnitOfWork
    {
        private readonly PlutoContext _context;

        public UnitOfWork(PlutoContext context)
        {
            _context = context;
            Projects = new ProjectRepository(_context);
            Subprojects = new SubprojectRepository(_context);
            Clients = new ClientRepository(_context);
            Employees = new EmployeeRepository(_context);
            Categories = new CategoryRepository(_context);
        }

        public IProjectRepository Projects { get; private set; }
        public ISubprojectRepository Subprojects { get; private set; }
        public IClientRepository Clients { get; private set; }
        public IEmployeeRepository Employees { get; private set; }
        public ICategoryRepository Categories { get; private set; }

        public int Complete()
        {
            return _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
