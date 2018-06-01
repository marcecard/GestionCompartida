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
