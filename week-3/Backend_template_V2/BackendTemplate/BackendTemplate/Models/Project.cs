using System;
using System.Collections.Generic;

namespace BackendTemplate.Models
{
    public class Project
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Estimated_Finish_Time { get; set; }
        public int Price { get; set; }

        public virtual IEnumerable<Subproject> Subprojects { get; set; }
        public virtual Client Client { get; set; }
    }
}
