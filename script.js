function resetFields () {
    const ifrForm = document.getElementById("ifrForm")
    const vfrForm = document.getElementById("vfrForm")

    ifrForm.reset();
    vfrForm.reset();
}

function changeFlightType () {
    let displayIfr = document.getElementById("mainBoxIfr")
    let displayVfr = document.getElementById("mainBoxVfr")
    let dispSuccess = document.getElementById('fuelAlert')
    let dispFail = document.getElementById('fuelAlertError')

    if (displayIfr.style.display=="inline-block") {
        displayIfr.style.display="none";
        displayVfr.style.display="inline-block";
    } else {
        displayIfr.style.display="inline-block";
        displayVfr.style.display="none";
    }

    dispSuccess.style.display="none"
    dispFail.style.display="none"

    resetFields ();
}

function fuelConsunption(event) {
    event.preventDefault();
    let depArr = Number(document.getElementById('depArr').value);
    let arrAlt = Number(document.getElementById('arrAlt').value);
    let airSpd = Number(document.getElementById('airSpd').value);
    let fuelCons = Number(document.getElementById('fuelCons').value);
    let taxyTime = Number(document.getElementById('taxyTime').value);
    let advCond = Number(document.getElementById('advCond').value);
    let totalFuel;
    let metrica = document.getElementById('metrica').value;
    let contTime = document.getElementById('contTime');

    if (!depArr || !arrAlt || !airSpd || !fuelCons) {
        let fuelResult = document.getElementById('fuelResult')
        fuelResult.innerHTML="Preencha no mínimo os 4 primeiros campos!"; 
        
    } else {
        totalTime = (depArr + arrAlt) / airSpd;
        if (contTime.checked) {
            extraTime =  (((depArr / airSpd) / 100) * 10) + (taxyTime + advCond + 45) / 60
        } else {
            extraTime = (taxyTime + advCond + 45) / 60;
        }
        totalFuel = (totalTime + extraTime) * fuelCons;
    }
   
    if (!totalFuel || totalFuel === NaN) {
        document.getElementById('fuelResultError').innerHTML ="Dados insuficientes!";
        document.getElementById('fuelAlertError').style.display="block";
        document.getElementById('fuelAlert').style.display="none";
    } else {
        document.getElementById('fuelResult').innerHTML ="Você utilizará " + totalFuel.toFixed(1).replace('.' , ',') + " " + metrica;
        document.getElementById('fuelAlert').style.display="block";
        document.getElementById('fuelAlertError').style.display="none";
    }
} 

function fuelConsunptionVfr (event) {
    event.preventDefault();
    let depArr = Number(document.getElementById('depArrV').value);
    let airSpd = Number(document.getElementById('airSpdV').value);
    let fuelCons = Number(document.getElementById('fuelConsV').value);
    let taxyTime = Number(document.getElementById('taxyTimeV').value);
    let advCond = Number(document.getElementById('advCondV').value);
    let totalFuel;
    let metrica = document.getElementById('metricaV').value;

    if (!depArr || !airSpd || !fuelCons) {
        let fuelResult = document.getElementById('fuelResultV')
        fuelResult.innerHTML="Preencha no mínimo os 3 primeiros campos!"; 
    } else {
        totalTime = depArr / airSpd;
        extraTime = (taxyTime + advCond + 30) / 60;
        totalFuel = (totalTime + extraTime) * fuelCons;
    }
   
    if (!totalFuel || totalFuel === NaN) {
        document.getElementById('fuelResultErrorV').innerHTML ="Dados insuficientes!";
        document.getElementById('fuelAlertErrorV').style.display="block";
        document.getElementById('fuelAlertV').style.display="none";
    } else {
        document.getElementById('fuelResultV').innerHTML ="Você utilizará " + totalFuel.toFixed(1).replace('.' , ',') + " " + metrica;
        document.getElementById('fuelAlertV').style.display="block";
        document.getElementById('fuelAlertErrorV').style.display="none";
    }
} 

function runwayApp (event) {
    event.preventDefault();
    const windDirection = Number(document.getElementById('windDirection').value);
    let runwayOne = Number(document.getElementById('runwayOne').value);
    const runwayTwo = Number(document.getElementById('runwayTwo').value);
    let windRun1 = windDirection-runwayOne;
    let windRun2 = windDirection-runwayTwo;
    let finalRunway;

    if (!windDirection || !runwayOne || !runwayTwo) {
        document.getElementById('insuficientData').innerHTML = "Preencha todos os campos!";
      
    } else { 
        windRun1 = windDirection-runwayOne;
        windRun2 = windDirection-runwayTwo;
        if (windRun1 > 90) {
            finalRunway = runwayTwo;
        } else {
            finalRunway = runwayOne;
        }
    }

    if (!finalRunway || !finalRunway === NaN) {
        document.getElementById('insuficientData').innerHTML = "Dados insuficientes";
        document.getElementById('insuficientDataError').style.display='block';
        document.getElementById('rightRunwayAlert').style.display="none";
    } else {
        document.getElementById('rightRunway').innerHTML ="Você utilizará a pista " + finalRunway;
        document.getElementById('rightRunwayAlert').style.display="block";
        document.getElementById('insuficientDataError').style.display="none";
    }
}