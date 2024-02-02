window.addEventListener('load', (event) => {

    let inputTemp = document.getElementById('inputTemperature');
    let selectedDegree = document.getElementById('Degselection');
    let convertButton = document.getElementById('btn');
    let convertTo = document.getElementById('convertToUnit');
    let outputDegree = document.getElementById('convertedDegree');
    let outputUnit = document.getElementById('convertedUnit');

    convertButton.addEventListener('click', () => {
        let toConvert = '';
        toConvert = selectedDegree.value;
        switch (toConvert) {
            case 'C':
                let outputFromCentigrade = celciusTo(inputTemp.value, convertTo.value);
                outputDegree.innerHTML = outputFromCentigrade;
                break;

            case 'F':
                let outputFromF = FahrenheitTo(inputTemp.value, convertTo.value);
                outputDegree.innerHTML = outputFromF;
                break;

            case 'K':
                let outputFromK = kelvinTo(inputTemp.value, convertTo.value);
                outputDegree.innerHTML = outputFromK;
                break;

            default:
                console.log("invalid!");
                break;

        }

    })


    //If input Temperature is in Centigrade
    function celciusTo(inputValue, convertUnit) {
        let temperature = 0;
        switch (convertUnit) {
            case 'C':
                temperature = parseFloat(inputValue);
                outputUnit.innerHTML = "C";
                break;

            case 'F':
                temperature = ((parseFloat((inputValue)) * 9 / 5) + 32).toFixed(2);
                outputUnit.innerHTML = "F";
                break;

            case 'K':
                temperature = (parseFloat(inputValue) + 273.15).toFixed(2);
                outputUnit.innerHTML = "K";
                break;

            default:
                console.log("Invalid Type!");
                break;
        }

        return temperature;
    }

    // If input temperature is in Fahrenheit
    function FahrenheitTo(inputValue, convertUnit) {
        let temperature = 0;
        switch (convertUnit) {
            case 'C':
                temperature = ((inputValue - 32) * 5 / 9).toFixed(2);
                outputUnit.innerHTML = "C";
                break;

            case 'K':
                temperature = (((inputValue - 32) * 5 / 9) + 273.15).toFixed(2);
                outputUnit.innerHTML = "K";
                break;

            case 'F':
                temperature = parseFloat(inputValue);
                outputUnit.innerHTML = "F";
                break;

            default:
                console.log("Invalid Type!");
                break;
        }

        return temperature;

    }

    // If input Temperatur is in Kelvin
    function kelvinTo(inputValue, convertUnit) {
        let temperature = 0;
        switch (convertUnit) {
            case 'C':
                temperature = ((parseFloat(inputValue) - 273.15)).toFixed(2);
                outputUnit.innerHTML = "C";
                break;

            case 'F':
                temperature = (((parseFloat(inputValue) - 273.15) * 9 / 5) + 32).toFixed(2);
                outputUnit.innerHTML = "F";
                break;

            case 'K':
                temperature = parseFloat(inputValue);
                outputUnit.innerHTML = "K";
                break;

            default:
                console.log("Invalid Type!");
                break;
        }

        return temperature;
    }

})