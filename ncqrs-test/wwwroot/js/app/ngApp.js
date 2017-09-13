define(['ng', 'ui-bootstrap'], function (ng) {
    var ngApp = ng.module('ngApp', ['ui.bootstrap']);

    ngApp.config(['$sceProvider', '$controllerProvider', function ($sceProvider) {
        $sceProvider.enabled(false);
    }]);

    return ngApp;
});