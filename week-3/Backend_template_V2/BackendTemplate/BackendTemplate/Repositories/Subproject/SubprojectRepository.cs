using System;
using BackendTemplate.Context;
using BackendTemplate.Models;

namespace BackendTemplate.Repositories
{
    public class SubprojectRepository : Repository<Subproject>, ISubprojectRepository
    {
        public SubprojectRepository(PlutoContext context) : base(context) { }
    }
}
