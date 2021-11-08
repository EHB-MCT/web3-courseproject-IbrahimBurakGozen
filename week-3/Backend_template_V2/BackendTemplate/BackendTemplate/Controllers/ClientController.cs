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
    public class ClientController : Controller
    {
        private readonly IService<Client> service;

        public ClientController()
        {
            service = new ClientService();
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Client> Get()
        {
            return service.GetAll();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Client Get(int id)
        {
            return service.GetById(id);
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
