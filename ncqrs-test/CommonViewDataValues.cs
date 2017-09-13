using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace NCQRSTest
{
    public class CommonViewDataValues : ActionFilterAttribute
    {
        public const string WebRoot = "WebRoot";
        private static string UrlRoot;

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            base.OnActionExecuting(context);
            var ctrl = ((Controller)(context.Controller));
            ctrl.ViewData[WebRoot] = UrlRoot ?? (UrlRoot = ctrl.Url.Content("~"));
        }
    }
}
