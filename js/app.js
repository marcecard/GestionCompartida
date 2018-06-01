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

function getVals() {
    var capitalInicial = parseFloat($('#capitalInicial').val());
    var duracion = parseFloat($('#duracion').val());
    var getPercent = parseFloat($('#getPercent').text());

    var capitalFinalAnual = capitalInicial * getPercent / 100;
    var capitalFinalDiario = capitalFinalAnual / 365;

    var interesGanado = capitalFinalDiario * duracion;

    var getInteresInput = parseFloat(interesGanado).toFixed(2)

    var capitalFinal = parseFloat(capitalInicial + interesGanado).toFixed(2);

    var porcentajeGanado = parseFloat(capitalFinal * 100 / capitalInicial - 100).toFixed(2);

    if (isNaN(getInteresInput, capitalFinal, porcentajeGanado)) {
        document.getElementById("dangerText").style.opacity = "1";
    } else {
        $("#interesInput").val("$" + getInteresInput);
        $("#capitalFinalInput").val("$" + capitalFinal);
        $("#porcentajeInput").val(porcentajeGanado + "%");
        document.getElementById("dangerText").style.opacity = "0";
    }
}

