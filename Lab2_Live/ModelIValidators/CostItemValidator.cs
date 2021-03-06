﻿using FluentValidation;
using Lab2_Live.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace Lab2_Live.ModelIValidators
{
    public class CostItemValidator : AbstractValidator<CostItem>
    {
       public CostItemValidator()
        {
            RuleFor(x => x.Sum).GreaterThanOrEqualTo(100);
            RuleFor(x => x.Description).MaximumLength(10);
            RuleFor(x => x.Location).NotNull();
            RuleFor(x => x.Type).IsInEnum();

        }
       
    }
}
 