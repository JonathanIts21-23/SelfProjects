function RendUtileKw (PCIgenerKw, RendGenerat){
    return PCIgenerKw*RendGenerat/100
}

function SpesaTotale (SpesaMw, RendUtileKw, euroItSmcKg) {
    return ((SpesaMw*100)/RendUtileKw)/100*euroItSmcKg
}

function calculate (){
    let rendGen = document.getElementById("rendGen").value
    let carb = document.getElementById("carburante").value
    document.getElementById("PCIgen").innerHTML = carb
    let rendUtile = RendUtileKw(carb,rendGen)
    document.getElementById("rendUtile").innerHTML = rendUtile
    let eurItSmcKg = document.getElementById("eurItSmcKg").value
    let spesaMw = document.getElementById("spesaMw").value
    document.getElementById("spesaTot").innerHTML = Math.round(SpesaTotale(eurItSmcKg, rendUtile, spesaMw))
}