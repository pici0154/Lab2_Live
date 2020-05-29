using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Lab2_Live.Models;
using System;
using System.Linq;

namespace Lab2_Live.Models
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new CostDBContext(
                serviceProvider.GetRequiredService<
                    DbContextOptions<CostDBContext>>()))
            {
                // Look for any costs.
                if (!context.CostItems.Any())
                {
                    context.CostItems.AddRange(
                        new CostItem
                        {
                          //  Id = 1,
                            Description = "bread",
                            Sum = 2020,
                            Location = "Cluj",
                            Date = DateTime.Now,
                            Currency = "euro",
                            Type = CostType.food,
                        },
                        new CostItem
                        {
                          //  Id = 2,
                            Description = "TV",
                            Sum = 2020,
                            Location = "Cluj",
                            Date = DateTime.Now,
                            Currency = "euro",
                            Type = CostType.electronics,

                        }

                    ); ;
                    context.SaveChanges();
                }

            }
        }
    }
}