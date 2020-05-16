using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lab2_Live.Models
{
    public class CostDBContext : DbContext
    {
        public CostDBContext(DbContextOptions<CostDBContext> options)
            : base(options)
        {
        }

        public DbSet<CostItem> CostItems { get; set; }


    }
}
