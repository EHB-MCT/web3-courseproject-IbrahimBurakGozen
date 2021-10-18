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
    public class ClientController : ControllerBase
    {
        [HttpGet]
        public ActionResult<List<Client>> Get()
        {
            return ClientService.GetAll();
        }

        [HttpGet("{id}")]
        public ActionResult<Client> Get(int id)
        {
            var client = ClientService.Get(id);

            if(client == null)
                return NotFound();

            return client;
        }

        [HttpPost]
        public IActionResult Post(Client client)
        {
            ClientService.Add(client);
            return CreatedAtAction(nameof(Post), new { id = client.id }, client);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Client client)
        {
            if (id != client.id)
                return BadRequest();

            var existingClient = ClientService.Get(id);
            if(existingClient is null)
                return NotFound();

            ClientService.Update(client);           

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var client = ClientService.Get(id);

            if (client is null)
                return NotFound();

            ClientService.Delete(id);

            return NoContent();
        }
    }
}
