using System;
using System.Collections.Generic;
using BackendTemplate.Context;
using BackendTemplate.Core;
using BackendTemplate.Models;

namespace BackendTemplate.Services
{
    public class EmployeeService : IService<Employee>
    {
        private readonly IUnitOfWork unitOfWork;

        public EmployeeService()
        {
            unitOfWork = new UnitOfWork(new PlutoContext());
        }

        public IEnumerable<Employee> GetAll()
        {
            return unitOfWork.Employees.GetAll();
        }

        public Employee GetById(int id)
        {
            return unitOfWork.Employees.Get(id);
        }
    }
}
