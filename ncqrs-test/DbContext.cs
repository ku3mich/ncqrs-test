using Microsoft.Extensions.Options;
using MyCouch;

namespace NCQRSTest
{
    public class DbContext : MyCouchClient
    {
        public DbContext(IOptions<Config> options) : base(options.Value.DbServerUrl, options.Value.DbServerUrl)
        {
        }
    }
}
