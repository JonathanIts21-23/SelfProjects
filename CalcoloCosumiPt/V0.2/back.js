function getRendUtileKw (PCIgenerKw, RendGenerat){
    return PCIgenerKw*RendGenerat/100
}

function getSpesaTotale (SpesaMw, RendUtileKw, euroLtSmcKg) {
    return ((SpesaMw*100)/RendUtileKw)/100*euroLtSmcKg
}

function resetCarb(){
    document.getElementById("PCIgen").innerHTML = document.getElementById("carburante").value
    document.getElementById("rendGen").value = ""
    document.getElementById("eurLtSmcKg").value = ""
}

function calculate (){
    let rendGen = document.getElementById("rendGen").value
    let carb = document.getElementById("carburante").value
    document.getElementById("PCIgen").innerHTML = carb
    let rendUtile = getRendUtileKw(carb,rendGen)
    document.getElementById("rendUtile").innerHTML = rendUtile
    let eurLtSmcKg = document.getElementById("eurLtSmcKg").value
    document.getElementById("spesaTot").innerHTML = getSpesaTotale(eurLtSmcKg, rendUtile, 1000).toFixed(2)
}

function getFabbTermicoWhm(casaMtr, altezzaMtr, secondoIsoMtr){
    return casaMtr*altezzaMtr*secondoIsoMtr
}

function getFabbTermKwGg(fabbTermicoWhm, oreAcceso){
    return fabbTermicoWhm/1000*oreAcceso
}

function getCostoEurGg(consAaSmc, costoGas){
    return roundNumber(consAaSmc, 210)*costoGas
}

function getSmcConsumati(costoEurGg, costoGas){
    return roundNumber(costoEurGg, costoGas)
}

function getKwNecessariGg(SmcConsumati, KwResiSmc){
    return SmcConsumati*KwResiSmc
}

function getTotateSmcEur(consAaSmc, costoGasSmc){
    return consAaSmc*costoGasSmc
}

function getRispPercentuale(a, b, c){
    return roundNumber(a-b, c)*100
}

function getConsKwhGg(PDCKwhGg, cop){
    return roundNumber(PDCKwhGg, cop)
}

function getEuroGg(consKwhGg, costoKwh){
    return consKwhGg*costoKwh
}

function roundNumber(dividendo, divisore){
    return (((dividendo*100)/divisore)/100)
}

function resetSmc() {
    document.getElementById("casa").value = ""
    document.getElementById("altezza").value = ""
    document.getElementById("isolamento").value = ""
    document.getElementById("oreAcceso").value = ""
    document.getElementById("consAaSmc").value = ""
    document.getElementById("costoGasSmc").value = ""
    document.getElementById("pdcKwHtGg").value = ""
    document.getElementById("cop").value = ""
    document.getElementById("costoKwh").value = ""
}

function calculate2(){
    let casa = document.getElementById("casa").value
    let altezza = document.getElementById("altezza").value
    let isolamento = document.getElementById("isolamento").value
    let fabbisognoTermicoWhm = getFabbTermicoWhm(casa, altezza, isolamento)
    document.getElementById("fabbisognoTermicoWhm").innerHTML = fabbisognoTermicoWhm.toFixed(2)
    document.getElementById("KwHTermici").innerHTML = (fabbisognoTermicoWhm/1000).toFixed(2)
    let oreAcceso = document.getElementById("oreAcceso").value
    document.getElementById("fabbisognoTermicoKwGg").innerHTML = getFabbTermKwGg(fabbisognoTermicoWhm, oreAcceso).toFixed(2)

    let consAaSmc = document.getElementById("consAaSmc").value
    document.getElementById("210smcGg").innerHTML = roundNumber(consAaSmc, 210).toFixed(2)
    let costoGasSmc = document.getElementById("costoGasSmc").value
    let costoEurGg = getCostoEurGg(consAaSmc, costoGasSmc)
    document.getElementById("CostoEuroGg").innerHTML = costoEurGg.toFixed(2)
    document.getElementById("costoEuroMm").innerHTML = (costoEurGg*30).toFixed(2)
    let SmcConsumati = getSmcConsumati(costoEurGg, costoGasSmc)
    document.getElementById("smcConstumati").innerHTML = SmcConsumati.toFixed(2)
    document.getElementById("kwNecessariGg").innerHTML = getKwNecessariGg(SmcConsumati, 9.6).toFixed(2)

    let pdcKwHtGg = document.getElementById("pdcKwHtGg").value
    let cop = document.getElementById("cop").value
    let consKwhGg = getConsKwhGg(pdcKwHtGg, cop)
    document.getElementById("consKwhGg").innerHTML = consKwhGg.toFixed(2)
    document.getElementById("consKwMm").innerHTML = (consKwhGg*30).toFixed(2)
    let costoKwh = document.getElementById("costoKwh").value
    let euroGg = getEuroGg(consKwhGg, costoKwh)
    document.getElementById("euroGg").innerHTML = euroGg.toFixed(2)
    document.getElementById("eur210Inv").innerHTML = (euroGg*210).toFixed(2)
    document.getElementById("eur15Kwh").innerHTML = (euroGg*15).toFixed(2)
    let smc3Kwhe = roundNumber(euroGg*15, 7.9)
    document.getElementById("smc3Kwhe").innerHTML = smc3Kwhe.toFixed(2)
    document.getElementById("x96").innerHTML = (smc3Kwhe*9.6).toFixed(2)
    document.getElementById("oreAccensione").innerHTML = roundNumber(smc3Kwhe, 9.6).toFixed(2)

    let totSmcEur = getTotateSmcEur(consAaSmc, costoGasSmc)
    document.getElementById("totSmcEur").innerHTML = totSmcEur.toFixed(2)
    document.getElementById("rispMet").innerHTML = getRispPercentuale(totSmcEur, euroGg*210, totSmcEur).toFixed(2) + "%"
}