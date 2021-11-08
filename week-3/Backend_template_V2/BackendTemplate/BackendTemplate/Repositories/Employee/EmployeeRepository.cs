using System;
using BackendTemplate.Context;
using BackendTemplate.Models;

namespace BackendTemplate.Repositories
{
    public class EmployeeRepository : Repository<Employee>, IEmployeeRepository
    {
        public EmployeeRepository(PlutoContext context): base(context){}
    }
}
