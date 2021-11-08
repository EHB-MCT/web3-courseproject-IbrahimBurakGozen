using System;
using BackendTemplate.Context;
using BackendTemplate.Models;

namespace BackendTemplate.Repositories
{
    public class CategoryRepository : Repository<Category>, ICategoryRepository
    {
        public CategoryRepository(PlutoContext context) : base(context) { }
    }
}
