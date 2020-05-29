using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Lab2_Live.Models
{
    // https://docs.microsoft.com/en-us/aspnet/web-api/overview/web-api-routing-and-actions/create-a-rest-api-with-attribute-routing
    public class Comment
    {
        public long Id { get; set; }
        [Required]
        public string Text { get; set; }
        public bool Important { get; set; }
        [ForeignKey("CostItemId")]
        public long CostItemId { get; set; }
        
       // public CostItem CostItem { get; set; }
    }
}
