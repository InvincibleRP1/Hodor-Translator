let buttonTranslate = document.querySelector("#btn-translate");
let inputText = document.querySelector("#text-input");

let outputText = document.querySelector("#output-area");

let serverUrl = "https://api.funtranslations.com/translate/hodor.json";


function translatorUrl(input){
    return (serverUrl + "?" + "text" + "=" + input);
}

function errorHandler(error){
    console.log("An error occured: ", error);
    alert("An error has occured. Please try after sometime.")
}

function clickHandler(){
    fetch(translatorUrl(inputText.value))
    .then(response => response.json())
    .then(json => {
        var outputValue = json.contents.translated;
        outputText.innerHTML = outputValue;
    }).catch(errorHandler);

}

buttonTranslate.addEventListener("click", clickHandler);