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
    [Produces("application/json")]
    [Route("api/[controller]")]

    [ApiController]
    public class CostItemsController : ControllerBase
    {
         private readonly CostDBContext _context; 
        public CostItemsController(CostDBContext context)
        {
            _context = context;
        }

        // GET: api/CostItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CostItem>>> GetCostItem()
        {
            return await _context.CostItems.ToListAsync();
        }

        // GET: api/CostItems/5
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
        [HttpPut("{id}")]
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
        [HttpPost]
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
