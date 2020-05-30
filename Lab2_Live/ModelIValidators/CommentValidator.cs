using FluentValidation;
using Lab2_Live.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace Lab2_Live.ModelIValidators
{
    public class CommentValidator : AbstractValidator<Comment>
    {
        public CommentValidator() {
            
            RuleFor(x => x.Text).MinimumLength(5)
                                .MaximumLength(10);

            RuleFor(x => x.Important).NotNull();
            RuleFor(x => x.CostItemId).NotNull();
        }


    }
}
