using FluentValidation;
using Lab2_Live.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lab2_Live.ModelIValidators
{
    public class CostItemValidator : AbstractValidator<CostItem>
    {
        CostItemValidator()
        {
            RuleFor(x => x.Id).MinimumLength(1);
            RuleFor(x => x.Sum).GreaterThanOrEqualTo(100);

        }
       
    }
}
 