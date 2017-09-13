require(['ngApp'], function (app) {
    app.controller('ctrl', ['$scope', function ($scope) {
        $scope.my = '! it is !';
    }]);
});