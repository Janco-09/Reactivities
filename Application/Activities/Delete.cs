using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Persistance;

namespace Application.Activities
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid id {get; set;}

            public class Handler : IRequestHandler<Command>
            {
                private readonly DataContext _context;
                public Handler(DataContext context)
                {
                    _context = context;
                }

                public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
                {
                    var activity = await _context.Activities.FindAsync(request.id);

                    _context.Remove(activity);

                    await _context.SaveChangesAsync();

                    return Unit.Value;
                }
            }
        }
    }
}