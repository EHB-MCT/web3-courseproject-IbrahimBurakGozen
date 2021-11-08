using System;
using System.Collections;
using System.Collections.Generic;

namespace BackendTemplate.Services
{
    public interface IService<TEntity> where TEntity : class
    {
        IEnumerable<TEntity> GetAll();
        TEntity GetById(int id);
    }
}
