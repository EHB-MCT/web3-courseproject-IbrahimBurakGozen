using System;
using System.Collections.Generic;
using BackendTemplate.Context;
using BackendTemplate.Core;
using BackendTemplate.Models;

namespace BackendTemplate.Services
{
    public class CategoryService : IService<Category>
    {
        private readonly IUnitOfWork unitOfWork;

        public CategoryService()
        {
            unitOfWork = new UnitOfWork(new PlutoContext());
        }

        public IEnumerable<Category> GetAll()
        {
            return unitOfWork.Categories.GetAll();
        }

        public Category GetById(int id)
        {
            return unitOfWork.Categories.Get(id);
        }
    }
}
