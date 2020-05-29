using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lab2_Live.DTOs
{
    public class CostItemDTO
    {
        public long Id { get; set; }
        public string Description { get; set; }
        public float Sum { get; set; }
        public string Location { get; set; }
    }
}
