// search function
function searchFunction() {
    // declare variables
    var input, filter, card, headers, headerText, txtValue;
    input = document.getElementById('search-input');
    card = document.getElementById("card-row");
    headers = card.getElementsByClassName('card-header');
    // loop through all card headers, and hide those who don't match the search query
    for (i = 0; i < headers.length; i++) {
        headerText = headers[i].innerText;
        // console.log(headerText)
        txtValue = headerText.innerText || headerText.textContent;
        if (!headerText.includes(input.value)) {
            headers[i].parentElement.parentElement.parentElement.style.display = "none";
        } else {
            headers[i].parentElement.parentElement.parentElement.style.display = "";
        }
    }
}
// end of search function


// Translation function
function loadGoogleTranslate() {
    new google.translate.TranslateElement({
        pageLanguage: 'ar',
        autoDisplay: 'true',
        includedLanguages: 'ar,en',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}
// end of translation function


// tabs function
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    // Get the element with id="defaultOpen" and click on it
}
document.getElementById("defaultOpen").click();
// end of tabs function