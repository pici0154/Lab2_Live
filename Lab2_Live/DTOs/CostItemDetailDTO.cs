using Lab2_Live.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lab2_Live.DTOs
{
    public enum CostType
    {
        food, utilities, transportation, outing, groceries, clothes, electronics, other
    }
    public class CostItemDetailDTO
    {
        public long Id { get; set; }
        public string Description { get; set; }
        public float Sum { get; set; }
        public string Location { get; set; }
        public DateTime Date { get; set; }
        public string Currency { get; set; }
        public CostType Type { get; set; }
        public List<Comment> Comments { get; set; }
    }
}
