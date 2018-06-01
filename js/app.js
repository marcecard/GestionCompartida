var myApp = angular.module('PlazoFijo', []);

myApp.controller('Bancos', ['$scope', function($scope) {
    $scope.nombreBanco = 'Elija una entidad bancaria';
    $scope.imgBanco = 'default.png';

    $scope.BBVA = function() {
        $scope.nombreBanco = 'BBVA Banco Francés';
        $scope.porcentaje = '25';
        $scope.imgBanco = 'Logo_BBVA.svg';
    };

    $scope.Santander = function() {
        $scope.nombreBanco = 'Santander Río';
        $scope.porcentaje = '24';
        $scope.imgBanco = 'Logo_Santander.svg';
    };

    $scope.Galicia = function() {
        $scope.nombreBanco = 'Banco Galicia';
        $scope.porcentaje = '26';
        $scope.imgBanco = 'Logo_Galicia.svg';
    };
    
}]);
