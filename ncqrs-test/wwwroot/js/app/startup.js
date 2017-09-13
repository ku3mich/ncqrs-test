define(['require', 'jquery', 'ng', 'ngApp'], function (require, $, ng, ngApp) {
    var deps = $('[data-dep]').map(function () {
        return $(this).data('dep').split(',');
    });

    require(deps, function () {
        ng.bootstrap(document, ['ngApp']);
    });
});