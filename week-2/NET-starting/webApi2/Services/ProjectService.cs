using webApi.Models;
using System.Collections.Generic;
using System.Linq;

namespace webApi.Services
{
    public static class ProjectService
    {
        static List<Project> Projects { get; }
        static int nextId = 3;
        static ProjectService()
        {
            Projects = new List<Project>
            {
                new Project { id = 1, name = "Classic Italian", isGlutenFree = false },
                new Project { id = 2, name = "Veggie", isGlutenFree = true }
            };
        }

        public static List<Project> GetAll() => Projects;

        public static Project Get(int id) => Projects.FirstOrDefault(p => p.id == id);

        public static void Add(Project project)
        {
            project.id = nextId++;
            Projects.Add(project);
        }

        public static void Delete(int id)
        {
            var project = Get(id);
            if(project is null)
                return;

            Projects.Remove(project);
        }

        public static void Update(Project project)
        {
            var index = Projects.FindIndex(p => p.id == project.id);
            if(index == -1)
                return;

            Projects[index] = project;
        }
    }
}