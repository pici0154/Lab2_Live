using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Lab2_Live.Models; 

namespace Lab2_Live.Controllers
{
   
    [Route("api/[controller]")]

    [ApiController]
    public class CostItemsController : ControllerBase
    {
         private readonly CostDBContext _context; 
        public CostItemsController(CostDBContext context)
        {
            _context = context;
        }
        /// <summary>
        /// Get a list of all CostItems. The list can be fitered by date ( from - to ) and by type.
        /// </summary>
        /// <param name="from"> Filter costs by date from. If the parameter is empty, all the costs will be displayed </param>
        /// <param name="to"> Filter costs by date to. If the parameter is empty, all the costs will be displayed</param>
        /// <param name="type"> Filter costs by type. If the parameter is empty, all the costs will be displayed</param>
        /// <returns>A list of costs</returns>
        // GET: api/CostItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DTOs.CostItemDTO>>> GetCostItems(DateTimeOffset? from = null,
            DateTimeOffset? to = null, CostType? type = null)
        {
            // filter by date from
            //filter by type 


            IQueryable<CostItem> result = _context.CostItems;

            if (from != null && to != null && type != null)
            {
                result = result.Where(c => from <= c.Date && c.Date <= to && type == c.Type);
            }
            else if (from == null && to != null && type != null)
            {
                result = result.Where(c => c.Date <= to && type == c.Type);

            }
            else if (from == null && to == null && type != null)
            {
                result = result.Where(c => type == c.Type);

            }
            else if (from != null && to != null && type == null)
            {
                result = result.Where(c => from <= c.Date && c.Date <= to);
            }
            else if (from != null && to == null && type == null)
            {
                result = result.Where(c => from <= c.Date);
            }
            else if (from != null && to == null && type != null)
            {
                result = result.Where(c => from <= c.Date && type == c.Type);
            }
            else if (from == null && to != null && type == null)
            {
                result = result.Where(c => c.Date <= to);
            }



            var resultList = await result
                .Include(f => f.Comments)
                .Select(f => DTOs.CostItemDTO.FromCostItem(f))
                .ToListAsync();
               return resultList;
            /*
                         var costItem = await result.Include(c => c.Comments).ToListAsync();

                         if (costItem == null)
                         {
                             return NotFound();
                         }

                         return costItem;
              */
            // return await _context.CostItems.ToListAsync();
        }

        // GET: api/CostItems/5
        /// <summary>
        /// Get a specific CostItem by Id
        /// </summary>
        /// <param name="id">Search the cost by the give ID</param>
        /// <returns>returns the specified cost item</returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<CostItem>> GetCostItem(long id)
        {
            var costItem = await _context.CostItems
                                            .Include(c => c.Comments)
                                            .FirstOrDefaultAsync(c => c.Id== id);

            if (costItem == null)
            {
                return NotFound();
            }

            return costItem;

            /*   var costItem = await _context.CostItems.FindAsync(id);

               if (costItem == null)
               {
                   return NotFound();
               }

               return costItem;*/
        }

        // PUT: api/CostItems/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        /// <summary>
        /// Update a specific CostItem 
        /// </summary>
        ///     PUT
        ///     {
        ///         "id": 1,
        ///         "description": "tea",
        ///         "sum": 2020,
        ///         "location": "SM",
        ///         "date": "2020-04-29T19:36:39.3388854",
        ///         "currency": "euro",
        ///         "type": "food",
        ///     }
        /// <param name="id">The CostItem will be updated for the specified id</param>
        /// <param name="costItem">The updated data</param>
        /// <returns>returns list of cost items with the updated cost item</returns>
        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> PutCostItem(long id, CostItem costItem)
        {
            if (id != costItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(costItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CostItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CostItems
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        /// <summary>
        /// Create a new CostItem
        /// </summary>
        /// Sample request:
        ///
        ///     POST 
        ///     {
        ///          
        ///         "description": "bread",
        ///         "sum": 2020,
        ///         "location": "Cluj",
        ///         "date": "2020-05-29T19:36:39.3388854",
        ///         "currency": "euro",
        ///         "type": "food",
        ///     }
        /// <param name="costItem">The new cost item</param>
        /// <returns>Returns a list of cost items with the new cost item</returns>
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<CostItem>> PostCostItem(CostItem costItem)
        {
            _context.CostItems.Add(costItem);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CostItemExists(costItem.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCostItem", new { id = costItem.Id }, costItem);
        }

        // DELETE: api/CostItems/5
        /// <summary>
        /// Delete a specific CostItem
        /// </summary>
        /// <param name="id">Delete the item by specified id</param>
        /// <returns>The list of cost items without the deleted object</returns>
        [HttpDelete("{id}")]
        public async Task<ActionResult<CostItem>> DeleteCostItem(long id)
        {
            var costItem = await _context.CostItems.FindAsync(id);
            if (costItem == null)
            {
                return NotFound();
            }

            _context.CostItems.Remove(costItem);
            await _context.SaveChangesAsync();

            return costItem;
        }

        private bool CostItemExists(long id)
        {
            return _context.CostItems.Any(e => e.Id == id);
        }
    }
}
