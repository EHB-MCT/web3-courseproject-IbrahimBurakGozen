using System;
using System.Collections.Generic;
using System.Linq;
using BackendTemplate.Context;
using BackendTemplate.Models;

namespace BackendTemplate.Repositories
{
    public class ProjectRepository : Repository<Project>, IProjectRepository
    {
        public ProjectRepository(PlutoContext context): base(context) {}

        public IEnumerable<Project> GetAllProjectSorted()
        {
            return PlutoContext.Projects
                .OrderBy(c => c.Title)
                .ToList();
        }

        public PlutoContext PlutoContext => Context as PlutoContext;
    }
}
