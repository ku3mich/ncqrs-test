using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Pugzor.Core.Extensions;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace NCQRSTest
{

    public class Startup
    {
        public IConfigurationRoot Configuration { get; set; }
        public IHostingEnvironment Environment { get; set; }

        public Startup(IHostingEnvironment environment)
        {
            Environment = environment;

            var builder = new ConfigurationBuilder()
                        .SetBasePath(environment.ContentRootPath)
                        .AddJsonFile("appSettings.json", optional: true, reloadOnChange: true);

            Configuration = builder.Build();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services
                .AddOptions()
                .Configure<Config>(Configuration)
                .AddTransient<DbContext>()
                .AddMvc(opts => opts.Filters.Add<CommonViewDataValues>())
                .AddPugzor(opts =>
                {
                    opts.BaseDir = Path.Combine(Environment.ContentRootPath, "Views");
                    opts.Pretty = Environment.IsDevelopment();
                });
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, IServiceProvider serviceProvider, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseStaticFiles();

            app.UseMvc(routes => routes.MapRoute("default", "{Controller}/{Action}"));
        }
    }
}
