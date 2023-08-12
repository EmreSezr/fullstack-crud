using Microsoft.EntityFrameworkCore;

namespace argus_backend.data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<User> Users => Set<User>();
        public DataContext() : base()
        {
        }
    }
}
