using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Backend.Services;
using Backend.Models;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
       [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<Client>), 200)]
        public Task<IActionResult> ReadAllAsync()
        {
            throw new NotImplementedException();
        }
    }
}
