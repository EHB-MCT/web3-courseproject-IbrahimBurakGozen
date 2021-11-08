using System;
using System.Collections.Generic;

namespace BackendTemplate.Models
{
    public enum SubprojectState
    {
        ToDo,
        Doing,
        Done
    }

    public class Subproject
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public SubprojectState State { get; set; }
        public string Start_Date { get; set; }
        public string Finish_Date { get; set; }

        public virtual Project Project { get; set; }
        public virtual Category Category { get; set; }
        public virtual IEnumerable<Employee> Employees { get; set; }
    }
}
