using System.Collections.Generic;
using BackendTemplate.Models;
using BackendTemplate.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackendTemplate.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : Controller
    {
        private readonly ProjectService service;

        public ProjectController()
        {
            service = new ProjectService();
        }


        [HttpGet]
        public IEnumerable<Project> Get()
        {
            return service.GetAll();
        }

        [HttpGet("{id}")]
        public ActionResult<Project> Get(int id)
        {
            var project = service.GetById(id);

            if (project == null) return NotFound();

            return project;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
