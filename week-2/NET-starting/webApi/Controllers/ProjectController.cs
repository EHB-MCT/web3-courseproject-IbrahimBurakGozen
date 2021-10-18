using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using webApi.Services;
using webApi.Models;

namespace webApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<List<Project>> Get()
        {
            return ProjectService.GetAll();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Project> Get(int id)
        {
            var project = ProjectService.Get(id);

            if(project == null)
                return NotFound();

            return project;
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post(Project project)
        {
            ProjectService.Add(project);
            return CreatedAtAction(nameof(Post), new { id = project.Id }, project);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, Project project)
        {
            if (id != project.Id)
                return BadRequest();

            var existingProject = ProjectService.Get(id);
            if(existingProject is null)
                return NotFound();

            ProjectService.Update(project);           

            return NoContent();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var project = ProjectService.Get(id);

            if (project is null)
                return NotFound();

            ProjectService.Delete(id);

            return NoContent();
        }
    }
}
