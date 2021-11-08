using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackendTemplate.Models;
using BackendTemplate.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackendTemplate.Controllers
{
    [Route("api/[controller]")]
    public class SubprojectController : Controller
    {
        private readonly IService<Subproject> service;

        public SubprojectController()
        {
            service = new SubprojectService();
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Subproject> Get()
        {
            return service.GetAll();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Subproject> Get(int id)
        {
            var subproject = service.GetById(id);

            if (subproject == null) return NotFound();

            return subproject;
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
