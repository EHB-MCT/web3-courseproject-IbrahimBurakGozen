using System;
using System.Collections.Generic;

namespace BackendTemplate.Models
{
    public class Category
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public IEnumerable<Subproject> Subprojects { get; set; }
    }
}
