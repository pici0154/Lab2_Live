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
        public DateTime Date { get; set; }
        public string Currency { get; set; }
        public Models.CostType Type { get; set; }
        public long NumberOfComments { get; set; }

        //metoda statica pt calcularea nr de comentarii
        public static CostItemDTO FromCostItem(Models.CostItem c)
        {
            return new CostItemDTO
            {
                Id = c.Id,
                Description = c.Description,
                Sum = c.Sum,
                Location = c.Location,
                Date = c.Date,
                Currency = c.Currency,
                Type = c.Type,
                NumberOfComments = c.Comments.Count
            };
        }
    }
}
