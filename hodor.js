let buttonTranslate = document.querySelector("#btn-translate");
let inputText = document.querySelector("#text-input");

let outputText = document.querySelector("#output-area");

let serverUrl = "https://api.funtranslations.com/translate/hodor.json";


function translatorUrl(input){
    return (serverUrl + "?" + "text" + "=" + input);
}

function clickHandler(){
    fetch(translatorUrl(inputText.value))
    .then(response => response.json())
    .then(json => {
        var outputValue = json.contents.translation;
        outputText.innerHTML = outputValue;
    })

}

buttonTranslate.addEventListener("click", clickHandler);